import Layout from "@/components/layout"
import { ChevronDown, Copy } from "lucide-react"

export default function RegisteredDevicePage() {
  return (
    <Layout currentPage="device">
      <div className="p-4 h-full overflow-auto">
        {/* Current Device */}
        <div className="bg-[#f8f8f8] rounded-3xl p-4">
          <h3 className="font-medium text-gray-800">Current device</h3>
          <div className="flex items-center mt-2">
            <div className="text-xl font-bold">Nicovape® Q</div>
            <span className="ml-3 bg-[#32b450] text-white px-3 py-1 rounded-full text-xs">REGISTERED</span>
          </div>

          <div className="bg-gray-200 rounded-xl p-3 mt-4 flex justify-between items-center text-xs">
            <div>
              <span className="text-gray-600">Batch no.:</span>
              <span className="font-medium ml-1">1234567890</span>
            </div>
            <div>
              <span className="text-gray-600">Serial no.:</span>
              <span className="font-medium ml-1">1234567890</span>
            </div>
            <button className="p-1">
              <Copy className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* Current Cartridge */}
        <div className="bg-[#f8f8f8] rounded-3xl p-4 mt-4">
          <h3 className="font-medium text-gray-800">Current cartridge</h3>
          <div className="flex items-center mt-2">
            <div className="text-xl font-bold">Nicovape® Q50</div>
            <span className="ml-3 bg-[#d8703c] text-white px-3 py-1 rounded-full text-xs">CLASSIC FLAVOUR</span>
          </div>

          <div className="bg-gray-200 rounded-xl p-3 mt-4 flex justify-between items-center text-xs">
            <div>
              <span className="text-gray-600">Batch no.:</span>
              <span className="font-medium ml-1">1234567890</span>
            </div>
            <div>
              <span className="text-gray-600">Expiry:</span>
              <span className="font-medium ml-1">01/01/2026</span>
            </div>
            <button className="p-1">
              <Copy className="h-4 w-4 text-gray-600" />
            </button>
          </div>
        </div>

        {/* View Past Devices */}
        <button className="bg-[#f8f8f8] rounded-3xl p-4 w-full flex justify-between items-center mt-4">
          <span className="text-lg font-medium">View past devices</span>
          <div className="flex items-center">
            <span className="mr-2 font-medium">2</span>
            <ChevronDown className="h-5 w-5" />
          </div>
        </button>

        {/* View Past Cartridges */}
        <button className="bg-[#f8f8f8] rounded-3xl p-4 w-full flex justify-between items-center mt-4">
          <span className="text-lg font-medium">View past cartridges</span>
          <div className="flex items-center">
            <span className="mr-2 font-medium">29</span>
            <ChevronDown className="h-5 w-5" />
          </div>
        </button>
      </div>
    </Layout>
  )
}
