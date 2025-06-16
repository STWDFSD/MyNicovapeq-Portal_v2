"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import PageLayout from "@/components/page-layout"

export default function EmailSignInPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    router.push("/home")
  }

  return (
    <PageLayout
      backHref="/signin"
      bottomContent={
        <div className="text-center">
          <Link href="/forgot-password" className="text-indigo-900 font-medium underline text-sm sm:text-base">
            Forgot your password?
          </Link>
        </div>
      }
    >
      <div className="bg-blue-50 rounded-lg p-5">
        <h1 className="text-xl sm:text-2xl font-bold mb-3">Sign in with email</h1>
        <p className="text-gray-700 mb-4 text-sm sm:text-base">
          Enter the recovery email and password you used when registering your device.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email address"
              className="w-full p-3 border border-gray-200 rounded-md"
              required
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full p-3 border border-gray-200 rounded-md"
              required
            />
          </div>
          <button type="submit" className="w-full bg-indigo-900 text-white rounded-md py-3 px-4 font-medium text-lg">
            Sign in
          </button>
        </form>
      </div>
    </PageLayout>
  )
}
