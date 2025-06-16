"use client"

import { User, Filter, Menu, Plus, Minus, Target } from "lucide-react"
import { useRouter } from "next/navigation"
import Logo from "@/components/logo"
import Layout from "@/components/layout"

export default function PharmacyMapPage() {
  const router = useRouter()

  return (
    <Layout currentPage="services">
      <div className="h-[100svh] flex flex-col bg-white overflow-hidden max-w-md mx-auto h-full">
        <div className="flex-1 flex flex-col">

          {/* Sub Header */}
          <div className="px-4 py-3 bg-white border-b border-gray-100 flex items-center justify-between relative z-10">
            <div className="flex items-center space-x-2">
              <Menu className="w-5 h-5 text-gray-600" />
              <span className="text-lg font-medium text-black">Nearby</span>
            </div>
            <div className="flex items-center space-x-2 text-blue-600">
              <span className="text-sm font-medium">Filters</span>
              <Filter className="w-4 h-4" />
            </div>
          </div>

          {/* Map Container */}
          <div className="flex-1 relative bg-gray-200">
            {/* Search Bar */}
            <div className="absolute top-4 left-4 right-4 z-20">
              <div className="bg-white rounded-lg p-3 shadow-sm flex items-center space-x-3">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 text-blue-600 border-gray-300 rounded"
                  aria-label="Search as I move the map"
                  title="Search as I move the map"
                />
                <span className="text-sm text-gray-600 flex-1">Search as I move the map</span>
                <span className="text-sm text-gray-400">Reservoir</span>
              </div>
            </div>

            {/* Map Controls */}
            <div className="absolute top-20 right-4 z-20 flex flex-col space-y-2">
              <button 
                className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center"
                aria-label="Zoom in"
                title="Zoom in"
              >
                <Plus className="w-5 h-5 text-gray-600" />
              </button>
              <button 
                className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center"
                aria-label="Zoom out"
                title="Zoom out"
              >
                <Minus className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="absolute bottom-20 right-4 z-20">
              <button 
                className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center"
                aria-label="Locate me"
                title="Locate me"
              >
                <Target className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Map Background */}
            <div className="w-full h-full bg-gray-200 relative">
              {/* Location Labels */}
              <div className="absolute top-16 left-8 text-gray-500 text-sm">Essendon</div>
              <div className="absolute top-32 left-16 text-gray-500 text-sm">Moonee Ponds</div>
              <div className="absolute top-20 right-32 text-gray-500 text-sm">Coburg Lake Reserve</div>
              <div className="absolute top-32 right-24 text-gray-500 text-sm">Coburg</div>
              <div className="absolute top-40 right-16 text-gray-500 text-sm">Preston</div>
              <div className="absolute top-56 right-8 text-gray-500 text-sm">Thornbury</div>
              <div className="absolute top-48 left-24 text-gray-500 text-sm">Brunswick</div>
              <div className="absolute top-56 right-32 text-gray-500 text-sm">Northcote</div>
              <div className="absolute top-64 left-20 text-gray-500 text-sm">Parkville</div>
              <div className="absolute top-80 right-20 text-gray-500 text-sm">Yarra Bend Park</div>
              <div className="absolute top-96 right-8 text-gray-500 text-sm">Kew</div>
              <div className="absolute bottom-32 left-8 text-gray-500 text-sm">Port Melbourne</div>
              <div className="absolute bottom-24 left-24 text-gray-500 text-sm">Albert Park</div>
              <div className="absolute bottom-40 right-32 text-gray-500 text-sm">Richmond</div>
              <div className="absolute bottom-16 right-8 text-gray-500 text-sm">Hawthorn</div>
              <div className="absolute bottom-32 right-24 text-gray-500 text-sm">Southbank</div>
              <div className="absolute bottom-48 right-16 text-gray-500 text-sm">Prahran</div>
              <div className="absolute bottom-56 right-8 text-gray-500 text-sm">Malvern</div>

              {/* Melbourne Label */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-gray-400 text-2xl font-light">
                Melbourne
              </div>

              {/* Location Markers */}
              <div className="absolute top-48 left-32 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
                5
              </div>
              <div className="absolute top-72 right-40 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
                2
              </div>
              <div className="absolute top-80 left-1/2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
                2
              </div>
              <div className="absolute bottom-48 left-1/3 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
                2
              </div>
              <div className="absolute bottom-32 right-1/3 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center text-white text-sm font-medium">
                6
              </div>

              {/* Black Location Markers */}
              <div className="absolute top-64 right-24 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <div className="absolute bottom-40 right-20 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
              <div className="absolute bottom-56 left-20 w-8 h-8 bg-black rounded-full flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-full" />
              </div>
            </div>

            {/* List View Button */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
              <button
                onClick={() => router.push("/services/pharmacy")}
                className="bg-orange-100 text-orange-600 py-2 px-4 rounded-lg flex items-center space-x-2"
              >
                <div className="w-4 h-4 bg-orange-600 rounded-sm" />
                <span className="font-medium text-sm">List view</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
