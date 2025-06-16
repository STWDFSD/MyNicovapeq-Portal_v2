"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Logo from "@/components/logo"
import { useToast } from "@/components/ui/use-toast"

export default function DashboardPage() {
  const router = useRouter()
  const { toast } = useToast()

  // Redirect to the new home page
  useEffect(() => {
    router.push("/home")
  }, [router])

  const handleSignOut = async () => {
    try {
      localStorage.removeItem("deviceRegistered")
      sessionStorage.removeItem("phoneNumber")

      // Redirect to home page
      router.push("/")
    } catch (error) {
      console.error("Error signing out:", error)
      toast({
        title: "Error",
        description: "Failed to sign out. Please try again.",
        variant: "destructive",
      })
    }
  }

  return (
    <main className="h-screen max-h-screen flex flex-col items-center bg-gradient-to-b from-blue-400 via-blue-500 to-blue-800 text-white overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center px-4 flex-1 overflow-hidden">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center pt-8 sm:pt-16">
          <h1 className="text-2xl font-medium text-center mb-2">Welcome to</h1>
          <Logo className="w-64 sm:w-80 h-auto mb-4" />

          <div className="bg-green-50/90 text-gray-800 rounded-[15px] w-full py-3 px-4 flex items-center justify-center mt-2 mb-6">
            <span className="text-base sm:text-lg font-medium">Redirecting to home page...</span>
          </div>
        </div>
      </div>
    </main>
  )
}
