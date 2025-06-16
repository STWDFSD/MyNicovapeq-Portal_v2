"use client"

import { Plus, User } from "lucide-react"
import { useRouter } from "next/navigation"
import Logo from "@/components/logo"
import Layout from "@/components/layout"

export default function AppointmentPage() {
  const router = useRouter()

  return (
  <Layout currentPage="services">
    <div className="h-[100svh] flex flex-col bg-gray-50 overflow-hidden max-w-md mx-auto h-full">
      <div className="flex-1 flex flex-col">

        {/* Main Content */}
        <div className="flex-1 px-4 pb-4 flex items-center justify-center">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Plus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-2xl font-semibold text-black mb-2">Book a follow-up appointment</h1>
            <p className="text-gray-600 mb-6">Schedule your next appointment with your healthcare provider.</p>
            <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium">Book Appointment</button>
          </div>
        </div>
      </div>
    </div>
  </Layout>
  )
}
