"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import PageLayout from "@/components/page-layout"

export default function SignInPage() {
  const router = useRouter()
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  return (
    <PageLayout
      backHref="/returning-user"
      bottomContent={
        <div className="text-center">
          <Link href="/signin/email" className="text-indigo-900 font-medium underline text-sm sm:text-base">
            Use recovery email address to log in
          </Link>
        </div>
      }
    >
      <div className="bg-blue-50 rounded-lg p-5">
        <h1 className="text-xl sm:text-2xl font-bold mb-3">Enter your mobile number</h1>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          This must be the same mobile number registered to the device being used to tap in.
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
            onClick={() => router.push("/signin/verify")}
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
      </div>
    </PageLayout>
  )
}
