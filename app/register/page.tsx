"use client"

import type React from "react"
import { useState, useRef } from "react"
import { useRouter } from "next/navigation"
import PageLayout from "@/components/page-layout"

export default function RegisterPage() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("")
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const [showVerification, setShowVerification] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isVerifying, setIsVerifying] = useState(false)
  const [maskedPhone, setMaskedPhone] = useState("04XX XXX XXX")
  const inputRefs = useRef<Array<HTMLInputElement | null>>([null, null, null, null, null, null])

  // Handle input change for verification code
  const handleChange = (index: number, value: string) => {
    if (value.length > 1) {
      value = value.charAt(0)
    }

    const newCode = [...code]
    newCode[index] = value
    setCode(newCode)

    // Move to next input if current one is filled
    if (value !== "" && index < 5) {
      inputRefs.current[index + 1]?.focus()
    }

    // Check if all inputs are filled
    if (newCode.every((digit) => digit !== "")) {
      setIsVerifying(true)
      // Simulate verification delay
      setTimeout(() => {
        setIsVerifying(false)
        window.location.href = '/register/profile'
      }, 1500)
    }
  }

  // Handle backspace
  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace" && code[index] === "" && index > 0) {
      inputRefs.current[index - 1]?.focus()
    }
  }

  // Handle paste
  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pastedData = e.clipboardData.getData('text/plain')
    
    // Extract only digits from pasted content
    const digits = pastedData.replace(/\D/g, '').slice(0, 6)
    
    if (digits.length > 0) {
      const newCode = ["", "", "", "", "", ""]
      
      // Fill the code array with the pasted digits
      for (let i = 0; i < Math.min(digits.length, 6); i++) {
        newCode[i] = digits[i]
      }
      
      setCode(newCode)
      
      // Focus the next empty input or the last input if all are filled
      const nextEmptyIndex = newCode.findIndex(digit => digit === "")
      if (nextEmptyIndex !== -1) {
        inputRefs.current[nextEmptyIndex]?.focus()
      } else {
        inputRefs.current[5]?.focus()
      }
    }
  }

  return (
    <PageLayout backHref="/" bottomContent={null}>
      <div className="bg-blue-50 rounded-lg p-5 mb-4">
        {!showVerification ? (
          <>
            <h1 className="text-xl sm:text-2xl font-bold mb-3">Enter your mobile number</h1>
            <p className="text-gray-700 mb-5 text-sm sm:text-base">
              We'll send a 6-digit verification code via SMS to confirm your identity. Your number will only be used to set up your account securely.
            </p>

            <form>
              <div className="flex items-center bg-white border border-gray-200 rounded-md p-3 mb-5">
                <span className="text-lg font-medium mr-2">+61</span>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 outline-none text-lg"
                  placeholder="Phone number"
                  required
                />
              </div>

              <button
                type="button"
                onClick={() => router.push("/register/verify")}
                className="w-full bg-indigo-900 text-white rounded-md py-3 px-4 font-medium text-lg flex items-center justify-center"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send code"
                )}
              </button>
            </form>
          </>
        ) : (
          <>
            <h1 className="text-xl sm:text-2xl font-bold mb-3">Verify your mobile number</h1>
            <p className="text-gray-700 mb-5 text-sm sm:text-base">
              We've sent a 6-digit verification code to <span className="font-semibold">{maskedPhone}</span> via SMS. Enter it below to verify your number.
            </p>

            <div className="flex justify-between mb-6">
              {code.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => {
                    inputRefs.current[index] = el;
                  }}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-10 h-12 sm:w-12 sm:h-14 bg-white border border-gray-200 rounded-md text-center text-xl font-medium"
                  disabled={isVerifying}
                  aria-label={`Verification code digit ${index + 1}`}
                  title={`Enter digit ${index + 1} of verification code`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </PageLayout>
  )
}
