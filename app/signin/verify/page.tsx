"use client";

import type React from "react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import PageLayout from "@/components/page-layout";
import { AuthService } from "@/lib/auth-service";
import { useToast } from "@/hooks/use-toast";
import { CheckCircle, Loader2 } from "lucide-react";

export default function VerifySignInPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [code, setCode] = useState(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [maskedPhone, setMaskedPhone] = useState("");
  const [resendCountdown, setResendCountdown] = useState(0);
  const [verificationStatus, setVerificationStatus] = useState<
    "idle" | "verifying" | "success" | "error"
  >("idle");
  const [failureCount, setFailureCount] = useState(0);
  const MAX_FAILURE_ATTEMPTS = 3;
  const inputRefs = useRef<Array<HTMLInputElement | null>>([
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  // Initialize phone number from session storage
  useEffect(() => {
    const storedPhone = sessionStorage.getItem("verificationPhone");
    if (storedPhone) {
      setPhoneNumber(storedPhone);
      setMaskedPhone(AuthService.formatPhoneForDisplay(storedPhone));
    } else {
      // Redirect back to signin if no phone number
      router.push("/signin");
    }
  }, [router]);

  // Handle resend countdown
  useEffect(() => {
    if (resendCountdown > 0) {
      const timer = setTimeout(
        () => setResendCountdown(resendCountdown - 1),
        1000
      );
      return () => clearTimeout(timer);
    }
  }, [resendCountdown]);

  // Handle input change
  const handleChange = (index: number, value: string) => {
    // Clear error when user starts typing
    if (verificationStatus === "error") setVerificationStatus("idle");

    if (value.length > 1) {
      value = value.charAt(0);
    }

    // Only allow digits
    if (!/^\d*$/.test(value)) {
      return;
    }

    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if current one is filled
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Check if all inputs are filled
    if (newCode.every((digit) => digit !== "")) {
      handleVerify(newCode.join(""));
    }
  };

  // Handle verification
  const handleVerify = async (verificationCode: string) => {
    if (!phoneNumber) {
      setVerificationStatus("error");

      // Show error toast
      toast({
        title: "⚠️ Verification Error",
        description:
          "Phone number not found. Please return to the sign-in page and try again.",
        variant: "warning",
      });
      return;
    }

    // Check if user has exceeded maximum attempts
    if (failureCount >= MAX_FAILURE_ATTEMPTS) {
      toast({
        title: "🚫 Too Many Failed Attempts",
        description:
          "You've exceeded the maximum verification attempts. Please request a new code.",
        variant: "destructive",
      });
      return;
    }

    setIsVerifying(true);
    setVerificationStatus("verifying");

    try {
      const response = await AuthService.verifyCode(
        phoneNumber,
        verificationCode
      );

      if (response.success) {
        setVerificationStatus("success");
        setFailureCount(0); // Reset failure count on success

        // Show success toast
        toast({
          title: "✅ Phone Verified Successfully",
          description:
            "Your mobile number has been confirmed. Redirecting to your dashboard...",
          variant: "success",
        });

        sessionStorage.removeItem("verificationPhone");

        // Add a small delay for better UX before redirecting
        setTimeout(() => {
          router.push("/home");
        }, 1500);
      } else {
        setVerificationStatus("error");
        const newFailureCount = failureCount + 1;
        setFailureCount(newFailureCount);

        // Show different messages based on failure count
        if (newFailureCount >= MAX_FAILURE_ATTEMPTS) {
          toast({
            title: "🚫 Verification Blocked",
            description:
              "Too many incorrect attempts. Please request a new verification code.",
            variant: "destructive",
          });
        } else {
          const remainingAttempts = MAX_FAILURE_ATTEMPTS - newFailureCount;
          toast({
            title: "❌ Verification Failed",
            description: `Incorrect code. ${remainingAttempts} attempt${
              remainingAttempts > 1 ? "s" : ""
            } remaining.`,
            variant: "destructive",
          });
        }

        // Don't clear the code inputs - let user correct them
        // Focus first input for easy correction
        inputRefs.current[0]?.focus();
      }
    } catch (error) {
      console.error("Error verifying code:", error);
      setVerificationStatus("error");
      const newFailureCount = failureCount + 1;
      setFailureCount(newFailureCount);

      // Show error toast
      toast({
        title: "⚠️ Network Error",
        description:
          "Unable to verify your code. Please check your internet connection and try again.",
        variant: "destructive",
      });

      // Don't clear the code inputs on network error
      inputRefs.current[0]?.focus();
    } finally {
      setIsVerifying(false);
    }
  };

  // Handle resend code
  const handleResendCode = async () => {
    if (!phoneNumber || resendCountdown > 0) return;

    setIsResending(true);
    setVerificationStatus("idle");

    try {
      const response = await AuthService.sendVerificationCode(phoneNumber);

      if (response.success) {
        setResendCountdown(60); // 60 second cooldown
        setCode(["", "", "", "", "", ""]);
        setFailureCount(0); // Reset failure count when new code is sent
        inputRefs.current[0]?.focus();

        // Show success toast
        toast({
          title: "🔄 New Code Sent",
          description: `A fresh 6-digit code has been sent to ${maskedPhone}. Previous codes are no longer valid.`,
          variant: "success",
        });
      } else {
        // Show error toast
        toast({
          title: "⚠️ Resend Failed",
          description:
            "Unable to send a new code. Please wait a moment and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error resending code:", error);

      // Show error toast
      toast({
        title: "⚠️ Network Error",
        description:
          "Unable to send a new code. Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsResending(false);
    }
  };

  // Handle backspace
  const handleKeyDown = (
    index: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain");

    // Extract only digits from pasted content
    const digits = pastedData.replace(/\D/g, "").slice(0, 6);

    if (digits.length > 0) {
      const newCode = ["", "", "", "", "", ""];

      // Fill the code array with the pasted digits
      for (let i = 0; i < Math.min(digits.length, 6); i++) {
        newCode[i] = digits[i];
      }

      setCode(newCode);

      // Focus the next empty input or the last input if all are filled
      const nextEmptyIndex = newCode.findIndex((digit) => digit === "");
      if (nextEmptyIndex !== -1) {
        inputRefs.current[nextEmptyIndex]?.focus();
      } else {
        inputRefs.current[5]?.focus();
      }
    }
  };

  // Focus first input on mount
  useEffect(() => {
    if (phoneNumber) {
      inputRefs.current[0]?.focus();
    }
  }, [phoneNumber]);

  if (!phoneNumber) {
    return null; // Don't render until we have the phone number
  }

  return (
    <PageLayout backHref="/signin">
      <div className="bg-blue-50 rounded-lg p-5">
        <h1 className="text-xl sm:text-2xl font-bold mb-3">
          Verify your mobile number
        </h1>
        <p className="text-gray-700 mb-5 text-sm sm:text-base">
          A 6-digit code has been sent to{" "}
          <span className="font-semibold">{maskedPhone}</span> via SMS. Input
          this below to verify your number.
        </p>

        {/* {verificationStatus === "success" && (
          <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-md flex items-center gap-2">
            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
            <p className="text-green-700 text-sm">
              Verification successful! Redirecting...
            </p>
          </div>
        )}

        {failureCount > 0 && failureCount < MAX_FAILURE_ATTEMPTS && (
          <div className="mb-4 p-3 bg-amber-50 border border-amber-200 rounded-md flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-amber-600 text-sm font-medium">⚠️</span>
              <p className="text-amber-700 text-sm">
                {MAX_FAILURE_ATTEMPTS - failureCount} attempt
                {MAX_FAILURE_ATTEMPTS - failureCount > 1 ? "s" : ""} remaining
              </p>
            </div>
          </div>
        )}

        {failureCount >= MAX_FAILURE_ATTEMPTS && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-md flex items-center gap-2">
            <div className="flex items-center gap-2">
              <span className="text-red-600 text-sm font-medium">🚫</span>
              <p className="text-red-700 text-sm">
                Maximum attempts reached. Please request a new code.
              </p>
            </div>
          </div>
        )} */}

        <div className="flex justify-between mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                if (el) {
                  inputRefs.current[index] = el;
                }
              }}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className={`w-10 h-12 sm:w-12 sm:h-14 bg-white border rounded-md text-center text-xl font-medium transition-all duration-200 disabled:opacity-50 ${
                verificationStatus === "success"
                  ? "border-green-300 bg-green-50"
                  : verificationStatus === "error"
                  ? "border-red-300 bg-red-50"
                  : "border-gray-200 hover:border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
              }`}
              disabled={isVerifying || verificationStatus === "success"}
              aria-label={`Verification code digit ${index + 1}`}
              title={`Enter digit ${index + 1} of verification code`}
            />
          ))}
        </div>

        {isVerifying && (
          <div className="mb-4 flex items-center justify-center gap-2 text-blue-600">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span className="text-sm">Verifying your code...</span>
          </div>
        )}

        <div className="text-center">
          <p className="text-gray-600 text-sm mb-3">Didn't receive the code?</p>
          <button
            onClick={handleResendCode}
            disabled={
              isResending ||
              resendCountdown > 0 ||
              verificationStatus === "success"
            }
            className="text-indigo-900 font-medium underline text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:text-indigo-700 transition-colors"
          >
            {isResending ? (
              <span className="flex items-center gap-1">
                <Loader2 className="h-3 w-3 animate-spin" />
                Sending...
              </span>
            ) : resendCountdown > 0 ? (
              `Resend in ${resendCountdown}s`
            ) : (
              "Resend code"
            )}
          </button>
        </div>
      </div>
    </PageLayout>
  );
}
