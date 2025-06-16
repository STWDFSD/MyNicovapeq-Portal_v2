"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ChevronDown } from "lucide-react"
import PageLayout from "@/components/page-layout"
import { toast } from "@/components/ui/use-toast"

export default function DemographicsPage() {
  const router = useRouter()
  const [gender, setGender] = useState<string | null>(null)
  const [ageRange, setAgeRange] = useState<string | null>(null)

  // State for dropdowns
  const [stateDropdownOpen, setStateDropdownOpen] = useState(false)
  const [smokingTimeDropdownOpen, setSmokingTimeDropdownOpen] = useState(false)
  const [quitAttemptsDropdownOpen, setQuitAttemptsDropdownOpen] = useState(false)

  // Selected values
  const [selectedState, setSelectedState] = useState<string | null>(null)
  const [selectedSmokingTime, setSelectedSmokingTime] = useState<string | null>(null)
  const [selectedQuitAttempts, setSelectedQuitAttempts] = useState<string | null>(null)

  // Refs for dropdowns
  const stateDropdownRef = useRef<HTMLDivElement>(null)
  const smokingTimeDropdownRef = useRef<HTMLDivElement>(null)
  const quitAttemptsDropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (stateDropdownRef.current && !stateDropdownRef.current.contains(event.target as Node)) {
        setStateDropdownOpen(false)
      }
      if (smokingTimeDropdownRef.current && !smokingTimeDropdownRef.current.contains(event.target as Node)) {
        setSmokingTimeDropdownOpen(false)
      }
      if (quitAttemptsDropdownRef.current && !quitAttemptsDropdownRef.current.contains(event.target as Node)) {
        setQuitAttemptsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Show success message before redirecting
    toast({
      title: "Registration Complete",
      description: "Your account has been set up successfully!",
    })

    // Set a small delay before redirecting to ensure the user sees the success message
    setTimeout(() => {
      router.push("/home")
    }, 1500)
  }

  // State options
  const stateOptions = [
    "New South Wales (NSW)",
    "Victoria (VIC)",
    "Queensland (QLD)",
    "Western Australia (WA)",
    "South Australia (SA)",
    "Tasmania (TAS)",
    "Australian Capital Territory (ACT)",
    "Northern Territory (NT)",
  ]

  // Smoking time options
  const smokingTimeOptions = ["6 months", "1 year", "2 years", "3-5 years", "5-10 years", "10+ years"]

  // Quit attempts options
  const quitAttemptsOptions = ["1", "2", "3", "4", "5", "10", "More than 10"]

  return (
    <PageLayout
      backHref="/register/profile"
      bottomContent={
        <button
          onClick={() => router.push("/dashboard")}
          className="w-full bg-indigo-900 text-white rounded-md py-3 px-4 font-medium text-lg"
        >
          Complete registration
        </button>
      }
    >
      <form onSubmit={handleSubmit} className="pb-4">
        <div className="bg-blue-50 rounded-lg p-5">
          <div className="flex justify-between items-center mb-3">
            <h1 className="text-xl sm:text-2xl font-bold">Help us serve you better</h1>
            <span className="text-xs sm:text-sm border border-gray-800 rounded-full px-2 py-0.5">Optional</span>
          </div>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            These details are optional, but they help us know our customers better to keep improving our offerings.
          </p>

          <div className="space-y-4">
            {/* State Dropdown */}
            <div className="relative" ref={stateDropdownRef}>
              <div
                className="flex justify-between items-center w-full p-3 bg-white border border-gray-200 rounded-md cursor-pointer"
                onClick={() => setStateDropdownOpen(!stateDropdownOpen)}
              >
                <span className="text-gray-500 text-sm sm:text-base">
                  {selectedState || "In which state/territory do you live?"}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>

              {stateDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-y-auto">
                  {stateOptions.map((state) => (
                    <div
                      key={state}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
                      onClick={() => {
                        setSelectedState(state)
                        setStateDropdownOpen(false)
                      }}
                    >
                      {state}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Gender Selection */}
            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {["Male", "Female", "Other"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setGender(option)}
                  className={`py-2 px-2 sm:py-3 sm:px-4 rounded-md text-center text-sm sm:text-base ${
                    gender === option ? "bg-indigo-900 text-white" : "bg-white border border-gray-200 text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Age Range Selection */}
            <div className="grid grid-cols-5 gap-1 sm:gap-2">
              {["18-29", "30-39", "40-49", "50-59", "60+"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setAgeRange(option)}
                  className={`py-2 px-1 sm:py-3 sm:px-2 rounded-md text-center text-xs sm:text-sm ${
                    ageRange === option ? "bg-indigo-900 text-white" : "bg-white border border-gray-200 text-gray-700"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-3"></div>

            {/* Smoking Time Dropdown */}
            <div className="relative" ref={smokingTimeDropdownRef}>
              <div
                className="flex justify-between items-center w-full p-3 bg-white border border-gray-200 rounded-md cursor-pointer"
                onClick={() => setSmokingTimeDropdownOpen(!smokingTimeDropdownOpen)}
              >
                <span className="text-gray-500 text-sm sm:text-base">
                  {selectedSmokingTime || "For how long have you smoked?"}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>

              {smokingTimeDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-y-auto">
                  {smokingTimeOptions.map((option) => (
                    <div
                      key={option}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
                      onClick={() => {
                        setSelectedSmokingTime(option)
                        setSmokingTimeDropdownOpen(false)
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Quit Attempts Dropdown */}
            <div className="relative" ref={quitAttemptsDropdownRef}>
              <div
                className="flex justify-between items-center w-full p-3 bg-white border border-gray-200 rounded-md cursor-pointer"
                onClick={() => setQuitAttemptsDropdownOpen(!quitAttemptsDropdownOpen)}
              >
                <span className="text-gray-500 text-sm sm:text-base">
                  {selectedQuitAttempts || "How many times have you tried to quit?"}
                </span>
                <ChevronDown className="w-5 h-5 text-gray-500" />
              </div>

              {quitAttemptsDropdownOpen && (
                <div className="absolute z-10 mt-1 w-full bg-white border border-gray-200 rounded-md shadow-lg max-h-40 overflow-y-auto">
                  {quitAttemptsOptions.map((option) => (
                    <div
                      key={option}
                      className="p-2 hover:bg-gray-100 cursor-pointer text-sm sm:text-base"
                      onClick={() => {
                        setSelectedQuitAttempts(option)
                        setQuitAttemptsDropdownOpen(false)
                      }}
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </PageLayout>
  )
}
