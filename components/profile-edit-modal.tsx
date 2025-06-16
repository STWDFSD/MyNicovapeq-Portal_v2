"use client"

import type React from "react"

import { useState } from "react"
import { X } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"

interface ProfileEditModalProps {
  isOpen: boolean
  onClose: () => void
  fieldType: "name" | "phone" | "email"
  initialValue: string | { firstName: string; lastName: string }
  onSave: (value: any) => void
}

export default function ProfileEditModal({ isOpen, onClose, fieldType, initialValue, onSave }: ProfileEditModalProps) {
  const { toast } = useToast()
  const [isSaving, setIsSaving] = useState(false)

  // State for form values
  const [firstName, setFirstName] = useState(typeof initialValue === "object" ? initialValue.firstName : "")
  const [lastName, setLastName] = useState(typeof initialValue === "object" ? initialValue.lastName : "")
  const [phone, setPhone] = useState(fieldType === "phone" ? (initialValue as string) : "")
  const [email, setEmail] = useState(fieldType === "email" ? (initialValue as string) : "")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSaving(true)

    // Prepare the value to save based on field type
    let valueToSave

    switch (fieldType) {
      case "name":
        valueToSave = { firstName, lastName }
        break
      case "phone":
        valueToSave = phone
        break
      case "email":
        valueToSave = email
        break
    }

    // Simulate API call
    setTimeout(() => {
      setIsSaving(false)
      onSave(valueToSave)
      toast({
        title: "Updated successfully",
        description: `Your ${fieldType} has been updated`,
      })
      onClose()
    }, 1000)
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold">
            Edit {fieldType === "name" ? "Name" : fieldType === "phone" ? "Phone Number" : "Email"}
          </h2>
          <button onClick={onClose} className="p-1">
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4">
          {fieldType === "name" && (
            <>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-gray-200"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-gray-200"
                  required
                />
              </div>
            </>
          )}

          {fieldType === "phone" && (
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Phone Number</label>
              <div className="flex">
                <div className="bg-white p-3 rounded-l-xl border border-r-0 border-gray-200">+61</div>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full p-3 rounded-r-xl bg-white border border-gray-200"
                  required
                />
              </div>
            </div>
          )}

          {fieldType === "email" && (
            <div className="mb-6">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 rounded-xl bg-white border border-gray-200"
                required
              />
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 bg-gray-200 text-gray-700 rounded-xl py-3 font-medium"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSaving}
              className="flex-1 bg-indigo-900 text-white rounded-xl py-3 font-medium flex items-center justify-center"
            >
              {isSaving ? (
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Save"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
