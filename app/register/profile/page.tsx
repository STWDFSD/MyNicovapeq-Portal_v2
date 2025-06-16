"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { User } from "lucide-react"
import PageLayout from "@/components/page-layout"

export default function ProfilePage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/register/demographics")
  }

  return (
    <PageLayout
      backHref="/register/verify"
      bottomContent={
        <button
          onClick={() => router.push("/register/demographics")}
          className="w-full bg-indigo-900 text-white rounded-md py-3 px-4 font-medium text-lg"
        >
          Continue
        </button>
      }
    >
      <form onSubmit={handleSubmit} className="flex flex-col h-full">
        <div className="bg-blue-50 rounded-lg p-5 mb-4">
          <h1 className="text-xl sm:text-2xl font-bold mb-3">Personalise your profile</h1>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            These details will be used for support chats, warranty claims and similar.
          </p>

          <div className="space-y-3 mb-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First name"
              className="w-full p-3 border border-gray-200 rounded-md"
              required
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last name"
              className="w-full p-3 border border-gray-200 rounded-md"
              required
            />
          </div>

          <div className="bg-white border border-gray-200 rounded-md p-3 flex items-center gap-3">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-900" />
            </div>
            <p className="text-gray-700 text-sm sm:text-base">
              Tap to take a profile photo or choose one from your phone
            </p>
          </div>
        </div>

        <div className="bg-red-50 rounded-lg p-5 mb-4">
          <div className="flex justify-between items-center mb-3">
            <h2 className="text-lg sm:text-xl font-bold">Add a recovery email</h2>
            <span className="text-xs sm:text-sm border border-gray-800 rounded-full px-2 py-0.5">Important</span>
          </div>
          <p className="text-gray-700 mb-4 text-sm sm:text-base">
            If you lose access to your phone, these details can be used to recover your account.
          </p>

          <div className="space-y-3">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full p-3 border border-gray-200 rounded-md"
              required
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Choose a password"
              className="w-full p-3 border border-gray-200 rounded-md"
              required
            />
          </div>
        </div>
      </form>
    </PageLayout>
  )
}
