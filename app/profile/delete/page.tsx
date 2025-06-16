"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, AlertTriangle } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

export default function DeleteAccountPage() {
  const router = useRouter()
  const { toast } = useToast()
  const [isDeleting, setIsDeleting] = useState(false)
  const [confirmation, setConfirmation] = useState("")

  const handleDelete = (e: React.FormEvent) => {
    e.preventDefault()

    if (confirmation !== "DELETE") {
      toast({
        title: "Confirmation required",
        description: "Please type DELETE to confirm account deletion",
        variant: "destructive",
      })
      return
    }

    setIsDeleting(true)

    // Simulate API call
    setTimeout(() => {
      setIsDeleting(false)
      localStorage.removeItem("deviceRegistered")
      toast({
        title: "Account deleted",
        description: "Your account has been permanently deleted",
      })
      router.push("/")
    }, 1500)
  }

  return (
    <div className="h-[100svh] flex flex-col bg-white text-black overflow-hidden">
      {/* Header */}
      <header className="w-full p-4 flex items-center shrink-0">
        <button onClick={() => router.back()} className="p-2 mr-2">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-xl font-bold">Delete Account</h1>
      </header>

      {/* Content */}
      <div className="flex-1 overflow-auto px-4 pb-4">
        <div className="max-w-md mx-auto">
          <div className="bg-red-50 rounded-xl p-4 mb-6 flex items-start gap-3">
            <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
            <div>
              <h2 className="font-bold text-red-700">Warning: This action cannot be undone</h2>
              <p className="text-sm text-gray-700 mt-1">
                Deleting your account will permanently remove all your data, including profile information, usage
                history, and device associations.
              </p>
            </div>
          </div>

          <form onSubmit={handleDelete} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2">
                To confirm deletion, type "DELETE" in the field below:
              </label>
              <input
                type="text"
                value={confirmation}
                onChange={(e) => setConfirmation(e.target.value)}
                className="w-full p-3 rounded-xl bg-white border border-gray-200"
                placeholder="Type DELETE"
              />
            </div>

            <button
              type="submit"
              disabled={isDeleting}
              className="w-full bg-red-600 text-white rounded-xl py-4 font-medium flex items-center justify-center"
            >
              {isDeleting ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Permanently Delete Account"
              )}
            </button>

            <button
              type="button"
              onClick={() => router.back()}
              className="w-full bg-gray-200 text-gray-700 rounded-xl py-4 font-medium"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
