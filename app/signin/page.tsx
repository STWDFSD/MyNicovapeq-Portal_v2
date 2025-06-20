"use client";

import type React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import PageLayout from "@/components/page-layout";
import { AuthService } from "@/lib/auth-service";
import { useToast } from "@/hooks/use-toast";

export default function SignInPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = async () => {
    // Validate phone number
    if (!phoneNumber.trim()) {
      toast({
        title: "📱 Phone Number Required",
        description:
          "Please enter your mobile number to receive a verification code.",
        variant: "warning",
      });
      return;
    }

    if (!AuthService.validatePhoneNumber(phoneNumber)) {
      toast({
        title: "📱 Invalid Phone Number",
        description:
          "Please enter a valid Australian mobile number (e.g., 0412 345 678).",
        variant: "warning",
      });
      return;
    }

    setIsLoading(true);

    try {
      const response = await AuthService.sendVerificationCode(phoneNumber);

      if (response.success) {
        // Show success toast
        toast({
          title: "📱 Verification Code Sent",
          description: `We've sent a 6-digit code to ${AuthService.formatPhoneForDisplay(
            phoneNumber
          )}. Check your SMS messages.`,
          variant: "success",
        });

        // Store phone number in session storage for verification page
        sessionStorage.setItem("verificationPhone", phoneNumber);
        router.push("/signin/verify");
      } else {
        toast({
          title: "⚠️ Failed to Send Code",
          description:
            "Unable to send verification code. Please check your number and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error sending verification code:", error);
      toast({
        title: "⚠️ Network Error",
        description:
          "Unable to send verification code. Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendCode();
    }
  };

  return (
    <PageLayout
      backHref="/returning-user"
      bottomContent={
        <div className="text-center">
          <Link
            href="/signin/email"
            className="text-indigo-900 font-medium underline text-sm sm:text-base"
          >
            Use recovery email address to log in
          </Link>
        </div>
      }
    >
      <div className="bg-blue-50 rounded-lg p-5">
        <h1 className="text-xl sm:text-2xl font-bold mb-3">
          Enter your mobile number
        </h1>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          This must be the same mobile number registered to the device being
          used to tap in.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSendCode();
          }}
        >
          <div className="flex items-center bg-white border border-gray-200 rounded-md p-3 mb-5">
            <span className="text-lg font-medium mr-2">+61</span>
            <input
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 outline-none text-lg"
              placeholder="Phone number"
              required
              disabled={isLoading}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-900 text-white rounded-md py-3 px-4 font-medium text-lg flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Sending...
              </>
            ) : (
              "Send code"
            )}
          </button>
        </form>
      </div>
    </PageLayout>
  );
}
