"use client"

import type React from "react"

import { ArrowLeft, ArrowRight, User, Phone } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import Logo from "@/components/logo"
import Layout from "@/components/layout"

export default function PharmacyListPage() {
  const router = useRouter()
  const [currentPage, setCurrentPage] = useState(1)
  const [showFilters, setShowFilters] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  const pharmacies = [
    {
      name: "Chemist Warehouse Melbourne Midtown Plaza",
      address: "Shop 206",
      phone: "61396394016",
      distance: "285m",
    },
    {
      name: "Southgate Pharmacy",
      address: "P14 Southgate Shopping Centre",
      phone: "61396997000",
      distance: "794m",
    },
    {
      name: "Chemist Warehouse Southbank",
      address: "Ground Floor & Part First Floor",
      phone: "61396822278",
      distance: "1.70km",
    },
    {
      name: "Chemist Warehouse Fitzroy",
      address: "206 Brunswick Str",
      phone: "96417 2917",
      distance: "1.85km",
    },
    {
      name: "Smith Street Soul Pattinson Chemist",
      address: "123 Smith Street",
      phone: "96419 3456",
      distance: "2.1km",
    },
  ]

  const totalResults = 38
  const resultsPerPage = 20
  const startResult = (currentPage - 1) * resultsPerPage + 1
  const endResult = Math.min(currentPage * resultsPerPage, totalResults)

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (endResult < totalResults) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePharmacyClick = (pharmacy: any) => {
    // Handle pharmacy selection
    console.log("Selected pharmacy:", pharmacy)
  }

  const handleCallPharmacy = (phone: string, e: React.MouseEvent) => {
    e.stopPropagation()
    window.location.href = `tel:${phone}`
  }

  return (
    <Layout currentPage="services">
    <div className="h-[100svh] flex flex-col bg-white overflow-hidden max-w-md mx-auto h-full">
      <div className="flex-1 flex flex-col mx-auto max-w-md bg-grey-50">

        {/* Sub Header */}
        <div className="px-4 py-3 bg-white flex items-center justify-between">
          <button onClick={() => setShowMenu(!showMenu)} className="flex items-center space-x-2 relative">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2.5 5H17.5M2.5 10H17.5M2.5 15H17.5"
                stroke="#374151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="text-lg font-medium text-black">Nearby</span>

            {/* Dropdown Menu */}
            {showMenu && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <div className="py-2">
                  <button
                    onClick={() => {
                      setShowMenu(false)
                      // Handle nearby selection
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Nearby
                  </button>
                  <button
                    onClick={() => {
                      setShowMenu(false)
                      // Handle all pharmacies selection
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    All Pharmacies
                  </button>
                  <button
                    onClick={() => {
                      setShowMenu(false)
                      // Handle favorites selection
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Favorites
                  </button>
                  <button
                    onClick={() => {
                      setShowMenu(false)
                      // Handle recent selection
                    }}
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Recent
                  </button>
                </div>
              </div>
            )}
          </button>
          <button onClick={() => setShowFilters(!showFilters)} className="flex items-center space-x-2 text-blue-600">
            <span className="text-sm font-medium">Filters</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 4H14M4 8H12M6 12H10"
                stroke="#4199FF"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <div className="px-4 py-3 bg-gray-50 flex items-center justify-between">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`${currentPage === 1 ? "text-gray-300" : "text-gray-600 hover:text-gray-800"}`}
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <span className="text-sm text-gray-600">
            Showing {startResult}-{endResult} out of {totalResults} results
          </span>
          <button
            onClick={handleNextPage}
            disabled={endResult >= totalResults}
            className={`${endResult >= totalResults ? "text-gray-300" : "text-gray-600 hover:text-gray-800"}`}
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Pharmacy List */}
        <div className="flex-1 overflow-auto">
          {pharmacies.map((pharmacy, index) => (
            <div key={index} className="border-b border-gray-100">
              <div
                className="p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => handlePharmacyClick(pharmacy)}
              >
                <h3 className="text-lg font-semibold text-black mb-2">{pharmacy.name}</h3>
                <div className="flex items-center space-x-4 mb-3">
                  <div className="flex items-center space-x-1">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="4" width="12" height="8" rx="1" stroke="#6B7280" strokeWidth="1.5" />
                      <path d="M6 2V6M10 2V6" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span className="text-sm text-gray-600">{pharmacy.address}</span>
                  </div>
                  <button
                    onClick={(e) => handleCallPharmacy(pharmacy.phone, e)}
                    className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
                  >
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{pharmacy.phone}</span>
                  </button>
                </div>
                <div className="bg-blue-50 rounded-lg p-3 flex items-center justify-center">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2"
                  >
                    <path
                      d="M3 7L17 7M5 4L15 4M7 10L13 10M2 13L18 13M4 16L16 16"
                      stroke="#6B7280"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="text-sm font-medium text-gray-700">{pharmacy.distance}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Map View Button */}
          <div className="p-4">
            <button
              onClick={() => router.push("/services/pharmacy/map")}
              className="w-full bg-orange-100 text-orange-600 py-3 px-4 rounded-lg flex items-center justify-center space-x-2 hover:bg-orange-200 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2 6L6 4L10 6L14 4V12L10 14L6 12L2 14V6Z"
                  stroke="#EA580C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 4V12M10 6V14"
                  stroke="#EA580C"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="font-medium">Map view</span>
            </button>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}
