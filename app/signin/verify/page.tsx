"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import PageLayout from "@/components/page-layout"

export default function VerifySignInPage() {
  const router = useRouter()
  const [code, setCode] = useState(["", "", "", "", "", ""])
  const [isVerifying, setIsVerifying] = useState(false)
  const [maskedPhone, setMaskedPhone] = useState("04XX XXX XXX")
  const inputRefs = useRef<Array<HTMLInputElement | null>>([null, null, null, null, null, null])

  // Handle input change
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
          router.push("/home")
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
    const pastedData = e.clipboardData.getData("text/plain")

    // Extract only digits from pasted content
    const digits = pastedData.replace(/\D/g, "").slice(0, 6)

    if (digits.length > 0) {
      const newCode = ["", "", "", "", "", ""]

      // Fill the code array with the pasted digits
      for (let i = 0; i < Math.min(digits.length, 6); i++) {
        newCode[i] = digits[i]
      }

      setCode(newCode)

      // Focus the next empty input or the last input if all are filled
      const nextEmptyIndex = newCode.findIndex((digit) => digit === "")
      if (nextEmptyIndex !== -1) {
        inputRefs.current[nextEmptyIndex]?.focus()
      } else {
        inputRefs.current[5]?.focus()
      }
    }
  }

  // Focus first input on mount
  useEffect(() => {
    inputRefs.current[0]?.focus()
  }, [])

  return (
    <PageLayout backHref="/signin">
      <div className="bg-blue-50 rounded-lg p-5">
        <h1 className="text-xl sm:text-2xl font-bold mb-3">Verify your mobile number</h1>
        <p className="text-gray-700 mb-5 text-sm sm:text-base">
          A 6-digit code has been sent to <span className="font-semibold">{maskedPhone}</span> via SMS. Input this below
          to verify your number.
        </p>

        <div className="flex justify-between mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={(el) => {
                inputRefs.current[index] = el
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
      </div>
    </PageLayout>
  )
}
