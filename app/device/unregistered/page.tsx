"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import { ChevronDown, Copy, Upload } from "lucide-react"
import Link from "next/link"

export default function UnregisteredDevicePage() {
  const [day, setDay] = useState("")
  const [month, setMonth] = useState("")
  const [year, setYear] = useState("")

  return (
    <Layout currentPage="device">
      <div className="p-4 space-y-4">
        {/* Current Device */}
        <div className="bg-[#f8f8f8] rounded-3xl p-4">
          <h3 className="font-medium text-gray-800">Current device</h3>
          <div className="flex items-center mt-2">
            <div className="text-2xl font-bold">Nicovape® Q</div>
            <span className="ml-3 bg-[#f87171] text-white px-3 py-1 rounded-full text-sm">UNREGISTERED</span>
          </div>

          <div className="bg-[#fbe4e1] rounded-xl p-4 mt-4">
            <p className="text-gray-800">Register this device to activate your 6-month warranty period</p>
          </div>

          <div className="mt-4">
            <label className="block text-gray-800 font-medium mb-2">Enter the receipt date of purchase:</label>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="DD"
                value={day}
                onChange={(e) => setDay(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl p-3 text-center w-full"
              />
              <input
                type="text"
                placeholder="MM"
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl p-3 text-center w-full"
              />
              <input
                type="text"
                placeholder="YY"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                className="bg-white border border-gray-200 rounded-xl p-3 text-center w-full"
              />
            </div>
          </div>

          <div className="mt-4 border border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center">
            <Upload className="h-12 w-12 text-gray-800 mb-4" />
            <h3 className="text-xl font-medium text-center">Upload a clear photo of your receipt</h3>
            <p className="text-gray-600 text-center mt-2">Take a photo or choose from your gallery</p>
          </div>

          <Link href="/device/registered">
            <button className="w-full bg-[#240e9d] text-white py-4 rounded-xl font-medium mt-4">Register device</button>
          </Link>

          <div className="bg-gray-200 rounded-xl p-3 mt-4 flex justify-between items-center">
            <div>
              <span className="text-sm text-gray-600">Batch no.:</span>
              <span className="font-medium ml-1">1234567890</span>
            </div>
            <div>
              <span className="text-sm text-gray-600">Serial no.:</span>
              <span className="font-medium ml-1">1234567890</span>
            </div>
            <Copy className="h-5 w-5 text-gray-600" />
          </div>
        </div>

        {/* Current Cartridge */}
        <div className="bg-[#f8f8f8] rounded-3xl p-4">
          <h3 className="font-medium text-gray-800">Current cartridge</h3>
          <div className="flex items-center mt-2">
            <div className="text-2xl font-bold">Nicovape® Q50</div>
            <span className="ml-3 bg-[#d8703c] text-white px-3 py-1 rounded-full text-sm">CLASSIC FLAVOUR</span>
          </div>

          <div className="bg-gray-200 rounded-xl p-3 mt-4 flex justify-between items-center">
            <div>
              <span className="text-sm text-gray-600">Batch no.:</span>
              <span className="font-medium ml-1">1234567890</span>
            </div>
            <div>
              <span className="text-sm text-gray-600">Expiry:</span>
              <span className="font-medium ml-1">01/01/2026</span>
            </div>
            <Copy className="h-5 w-5 text-gray-600" />
          </div>
        </div>

        {/* View Past Devices */}
        <button className="bg-[#f8f8f8] rounded-3xl p-4 w-full flex justify-between items-center">
          <span className="text-xl font-medium">View past devices</span>
          <ChevronDown className="h-6 w-6" />
        </button>

        {/* View Past Cartridges */}
        <button className="bg-[#f8f8f8] rounded-3xl p-4 w-full flex justify-between items-center">
          <span className="text-xl font-medium">View past cartridges</span>
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </Layout>
  )
}
