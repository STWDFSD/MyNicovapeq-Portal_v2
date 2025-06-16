"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { User, Phone, Mail, LogOut } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import Layout from "@/components/layout"


export default function ProfilePage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  const handleLogout = () => {
    setIsLoggingOut(true)

    // Simulate logout process
    setTimeout(() => {
      localStorage.removeItem("deviceRegistered")
      toast({
        title: "Logged out successfully",
        description: "You have been logged out of your account",
      })
      router.push("/")
    }, 1000)
  }

  const handleDeleteAccount = () => {
    if (confirm("Are you sure you want to delete your account? This action cannot be undone.")) {
      toast({
        title: "Account deletion requested",
        description: "Your account deletion request has been submitted",
      })
    }
  }

  return (
    <Layout currentPage="profile">
    <div className="h-[100svh] flex flex-col bg-white text-black overflow-hidden h-full">

      {/* Content - scrollable if needed */}
      <div className="flex-1 overflow-auto px-4 pb-4">
        <div className="max-w-md mx-auto">
          <div className="bg-blue-50 rounded-3xl p-6">
            <h1 className="text-2xl font-bold mb-6">My account</h1>

            {/* Profile Photo Section */}
            <div className="bg-white rounded-xl p-6 mb-4 flex flex-col sm:flex-row items-center gap-4">
              <div className="relative cursor-pointer group">
                <div className="w-24 h-24 rounded-full overflow-hidden">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/download-nnCyryPMbwXe9Mrn3cwb88sfrcHnDO.png"
                    alt="Profile photo"
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 rounded-full transition-all flex items-center justify-center">
                  <span className="text-white opacity-0 group-hover:opacity-100 text-xs font-medium">Change</span>
                </div>
              </div>
              <p className="text-center sm:text-left text-gray-700">
                Tap to update your profile photo or choose one from your phone
              </p>
            </div>

            {/* Name Section */}
            <div className="bg-white rounded-xl p-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-indigo-900">
                  <User className="w-6 h-6" />
                </div>
                <span className="font-medium">Jane Smith</span>
              </div>
              <button className="text-gray-700">Edit</button>
            </div>

            {/* Phone Section */}
            <div className="bg-white rounded-xl p-4 mb-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-indigo-900">
                  <Phone className="w-6 h-6" />
                </div>
                <span className="font-medium">+61 412 345 678</span>
              </div>
              <button className="text-gray-700">Edit</button>
            </div>

            {/* Email Section */}
            <div className="bg-white rounded-xl p-4 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="text-indigo-900">
                  <Mail className="w-6 h-6" />
                </div>
                <span className="font-medium">janesmith123@gmail.com</span>
              </div>
              <button className="text-gray-700">Edit</button>
            </div>
          </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="w-full bg-indigo-900 text-white rounded-xl py-4 font-medium flex items-center justify-center gap-2 mb-6 top-4"
            >
              {isLoggingOut ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                <>
                  <LogOut className="w-5 h-5" />
                  Log out
                </>
              )}
            </button>

            {/* Delete Account Link */}
            <div className="text-center">
              <button onClick={handleDeleteAccount} className="text-gray-700 hover:underline text-sm">
                Delete my account
              </button>
            </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}
