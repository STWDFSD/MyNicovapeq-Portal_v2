"use client"

import { useEffect, useRef, useState } from "react"
import Layout from "@/components/layout"
import { ArrowDown } from "lucide-react"

export default function UsagePage() {
  const [activeTimeFilter, setActiveTimeFilter] = useState<"7" | "14" | "all">("7")
  const [activeCartridgeFilter, setActiveCartridgeFilter] = useState<"7" | "14" | "all">("7")

  const usageChartRef = useRef<HTMLDivElement>(null)
  const cartridgeChartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (usageChartRef.current && cartridgeChartRef.current) {
      // Create bars for the usage chart
      renderChart(usageChartRef.current)
      renderChart(cartridgeChartRef.current)
    }
  }, [activeTimeFilter, activeCartridgeFilter])

  const renderChart = (container: HTMLDivElement) => {
    // Clear previous chart
    container.innerHTML = ""

    // Create dotted line for average
    const dottedLine = document.createElement("div")
    dottedLine.className = "absolute top-1/2 left-0 right-0 border-t border-dashed border-gray-400 z-10"
    container.appendChild(dottedLine)

    // Create "avg." label
    const avgLabel = document.createElement("div")
    avgLabel.className =
      "absolute top-[calc(50%-12px)] right-0 text-xs border border-[#240e9d] text-[#240e9d] rounded-full px-2 py-0.5 bg-white z-20"
    avgLabel.textContent = "avg."
    container.appendChild(avgLabel)

    // Create bars
    const barHeights = [60, 90, 40, 70, 50, 75, 30]

    barHeights.forEach((height, index) => {
      const bar = document.createElement("div")
      bar.className = index === 6 ? "bg-[#240e9d] rounded-full w-8" : "bg-[#4099ff] rounded-full w-8"
      bar.style.height = `${height}px`
      container.appendChild(bar)
    })
  }

  return (
    <Layout currentPage="usage">
      <div className="px-3 h-full overflow-auto">
        {/* Usage Stats */}
        <div className="bg-[#deedff] rounded-3xl p-4">
          <h3 className="font-medium text-gray-800 text-lg">My average usage</h3>
          <p className="text-xs mt-1">
            Between: <span className="font-medium">29 May 10:22 am – 29 May 6:31 pm</span> (last tap in)
          </p>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-xl p-3 flex flex-col items-center">
              <div className="text-4xl font-bold text-center">13</div>
              <div className="text-center text-xs mt-1">Puffs per hour</div>
              <div className="mt-2">
                <span className="bg-[#32b450] text-white px-4 py-1 rounded-full text-xs flex items-center">
                  <ArrowDown className="h-3 w-3 mr-1" /> 50%
                </span>
              </div>
              <div className="bg-[#deedff] rounded-xl p-1 mt-2 text-center text-xs w-full">
                Lifetime average: <span className="font-bold">26</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-3 flex flex-col items-center">
              <div className="text-4xl font-bold text-center">130</div>
              <div className="text-center text-xs mt-1">Puffs per day</div>
              <div className="mt-2">
                <span className="bg-[#32b450] text-white px-4 py-1 rounded-full text-xs flex items-center">
                  <ArrowDown className="h-3 w-3 mr-1" /> 50%
                </span>
              </div>
              <div className="bg-[#deedff] rounded-xl p-1 mt-2 text-center text-xs w-full">
                Lifetime average: <span className="font-bold">260</span>
              </div>
            </div>
          </div>

          {/* Chart */}
          <div className="mt-4 h-24 relative">
            <div ref={usageChartRef} className="flex items-end justify-between h-full"></div>
          </div>

          {/* Time filters */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <button
              className={`py-1.5 rounded-full text-center text-xs ${
                activeTimeFilter === "7" ? "bg-[#240e9d] text-white" : "bg-[#deedff] border border-gray-200"
              }`}
              onClick={() => setActiveTimeFilter("7")}
            >
              Last 7 tap ins
            </button>
            <button
              className={`py-1.5 rounded-full text-center text-xs ${
                activeTimeFilter === "14" ? "bg-[#240e9d] text-white" : "bg-[#deedff] border border-gray-200"
              }`}
              onClick={() => setActiveTimeFilter("14")}
            >
              Last 14 tap ins
            </button>
            <button
              className={`py-1.5 rounded-full text-center text-xs ${
                activeTimeFilter === "all" ? "bg-[#240e9d] text-white" : "bg-[#deedff] border border-gray-200"
              }`}
              onClick={() => setActiveTimeFilter("all")}
            >
              All time
            </button>
          </div>
        </div>

        {/* Cartridge Duration */}
        <div className="bg-[#deedff] rounded-3xl p-4 mt-4">
          <h3 className="font-medium text-gray-800 text-lg">How long my cartridges last</h3>

          <div className="mt-3 bg-white rounded-xl p-3">
            <p className="text-xs">
              <span className="font-medium">28 May – 29 May</span>
            </p>
            <div className="flex justify-between items-center mt-1">
              <div className="text-2xl font-bold">1.6 days</div>
              <span className="bg-[#32b450] text-white px-4 py-1 rounded-full text-xs flex items-center">
                <ArrowDown className="h-3 w-3 mr-1" /> 50%
              </span>
            </div>
            <div className="bg-[#deedff] rounded-xl p-1 mt-2 text-center text-xs border border-gray-200">
              Lifetime average: <span className="font-bold">1.7 days</span>
            </div>
          </div>

          {/* Chart */}
          <div className="mt-4 h-24 relative">
            <div ref={cartridgeChartRef} className="flex items-end justify-between h-full"></div>
          </div>

          {/* Time filters */}
          <div className="grid grid-cols-3 gap-2 mt-2">
            <button
              className={`py-1.5 rounded-full text-center text-xs ${
                activeCartridgeFilter === "7" ? "bg-[#240e9d] text-white" : "bg-[#deedff] border border-gray-200"
              }`}
              onClick={() => setActiveCartridgeFilter("7")}
            >
              Last 7 cartridges
            </button>
            <button
              className={`py-1.5 rounded-full text-center text-xs ${
                activeCartridgeFilter === "14" ? "bg-[#240e9d] text-white" : "bg-[#deedff] border border-gray-200"
              }`}
              onClick={() => setActiveCartridgeFilter("14")}
            >
              Last 14 cartridges
            </button>
            <button
              className={`py-1.5 rounded-full text-center text-xs ${
                activeCartridgeFilter === "all" ? "bg-[#240e9d] text-white" : "bg-[#deedff] border border-gray-200"
              }`}
              onClick={() => setActiveCartridgeFilter("all")}
            >
              All time
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
