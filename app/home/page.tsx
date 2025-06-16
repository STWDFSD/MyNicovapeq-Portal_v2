"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { User } from "lucide-react"
import Layout from "@/components/layout"

export default function HomePage() {
  const router = useRouter()

  // Check if user is authenticated
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("deviceRegistered") === "true"
    if (!isAuthenticated) {
      router.push("/")
    }
  }, [router])

  return (
    <main className="h-[100svh] flex flex-col bg-white text-black overflow-hidden">
    <Layout currentPage="home">
      {/* Content - scrollable if needed */}
      <div className="flex-1 overflow-auto px-4 h-full">
        <div className="max-w-md mx-auto space-y-4">
          {/* Liquid and Battery Status */}
          <div className="grid grid-cols-2 gap-4">
            {/* Liquid Status */}
            <div className="bg-yellow-50 rounded-3xl overflow-hidden relative h-36">
              <div className="p-4 relative z-10">
                <h2 className="text-lg font-medium">Liquid</h2>
                <p className="text-5xl font-bold mt-2">70%</p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 bg-yellow-400"
                style={{
                  borderTopLeftRadius: "100%",
                  borderTopRightRadius: "100%",
                  height: "60%",
                }}
              />
            </div>

            {/* Battery Status */}
            <div className="bg-green-50 rounded-3xl overflow-hidden relative h-36">
              <div className="p-4 relative z-10">
                <h2 className="text-lg font-medium">Battery</h2>
                <p className="text-5xl font-bold mt-2">70%</p>
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 bg-green-500"
                style={{
                  borderTopLeftRadius: "100%",
                  borderTopRightRadius: "100%",
                  height: "60%",
                }}
              />
            </div>
          </div>

          {/* Current Cartridge */}
          <div className="bg-gray-50 rounded-3xl p-4">
            <h2 className="text-base font-medium">Current cartridge</h2>
            <div className="flex items-center justify-between mt-1">
              <h3 className="text-2xl font-bold">Nicovape® Q50</h3>
              <span className="bg-orange-400 text-white px-3 py-1 rounded-full text-xs font-medium">
                CLASSIC FLAVOUR
              </span>
            </div>
          </div>

          {/* Usage Statistics */}
          <div className="bg-blue-50 rounded-3xl p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">My average usage</h2>
              <span className="text-xs">Last tap in period: 8 hours</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {/* Puffs per hour */}
              <div className="bg-white rounded-3xl p-4 text-center">
                <p className="text-4xl font-bold">13</p>
                <p className="text-sm mt-1">Puffs per hour</p>
                <div className="flex justify-center mt-2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    50%
                  </span>
                </div>
                <div className="bg-blue-50 rounded-xl py-1 mt-2">
                  <p className="text-xs">Lifetime average: 26</p>
                </div>
              </div>

              {/* Puffs per day */}
              <div className="bg-white rounded-3xl p-4 text-center">
                <p className="text-4xl font-bold">130</p>
                <p className="text-sm mt-1">Puffs per day</p>
                <div className="flex justify-center mt-2">
                  <span className="bg-green-500 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-3 w-3 mr-1"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    50%
                  </span>
                </div>
                <div className="bg-blue-50 rounded-xl py-1 mt-2">
                  <p className="text-xs">Lifetime average: 260</p>
                </div>
              </div>
            </div>

            {/* Previous cartridge */}
            <div className="mt-4">
              <h2 className="text-sm font-medium">My previous cartridge lasted</h2>
              <div className="flex justify-between items-center mt-1">
                <p className="text-2xl font-bold">1.6 days</p>
                <span className="bg-green-500 text-white px-4 py-1 rounded-full text-xs font-medium flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-3 w-3 mr-1"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                  50%
                </span>
              </div>
              <div className="bg-blue-50 rounded-xl py-1 mt-2 text-center">
                <p className="text-xs">Lifetime average: 1.7 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </Layout>
    </main>
  )
}
