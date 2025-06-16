"use client"

import { useState } from "react"
import Layout from "@/components/layout"
import { Check, AlertCircle, ChevronDown, Plus, Edit } from "lucide-react"

export default function EmbeddedServicesPage() {
  const [activeTab, setActiveTab] = useState<"book" | "find" | "order">("book")
  const [hasActivePrescription, setHasActivePrescription] = useState(false)

  return (
    <Layout currentPage="services">
      <div className="p-4 pb-20 max-w-md mx-auto h-full">
        {activeTab === "book" && (
          <div className="bg-[#f8f8f8] rounded-3xl p-4">
            <h2 className="text-xl font-bold">Book a follow-up appointment</h2>
            <p className="mt-2 text-sm text-gray-800">
              Low on repeats or need some support? Book a bulk-billed appointment with an experienced clinician at{" "}
              <span className="font-bold">hubMed+</span>.
            </p>

            <div className="mt-4 space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">First name</label>
                <div className="relative">
                  <input
                    type="text"
                    value="Jane"
                    className="w-full p-3 rounded-xl bg-white border border-gray-200"
                    readOnly
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Last name</label>
                <div className="relative">
                  <input
                    type="text"
                    value="Smith"
                    className="w-full p-3 rounded-xl bg-white border border-gray-200"
                    readOnly
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <Check className="h-5 w-5 text-green-500" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Mobile number</label>
                <div className="relative">
                  <div className="flex">
                    <div className="bg-white p-3 rounded-l-xl border border-r-0 border-gray-200">+61</div>
                    <input
                      type="text"
                      placeholder="e.g. 0412345678"
                      className="w-full p-3 rounded-r-xl bg-white border border-gray-200"
                    />
                  </div>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Date of birth</label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="DD / MM / YYYY"
                    className="w-full p-3 rounded-xl bg-white border border-gray-200"
                  />
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                  </div>
                </div>
              </div>

              <button className="w-full bg-[#240e9d] text-white py-4 rounded-xl font-medium mt-4">
                Save and continue
              </button>
            </div>
          </div>
        )}

        {activeTab === "find" && (
          <div className="bg-[#f8f8f8] rounded-3xl p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">My active prescriptions</h2>
              {hasActivePrescription && (
                <div className="flex space-x-2">
                  <button className="rounded-full bg-[#f8f8f8] p-1">
                    <Plus className="h-5 w-5" />
                  </button>
                  <button className="rounded-full bg-[#f8f8f8] p-1">
                    <Edit className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>

                <div className="bg-[#fbe4e1] rounded-xl p-4 mt-4">
                  <p className="text-center">You have no active prescription(s)</p>
                </div>

                <div className="mt-4">
                  <p className="text-sm">
                    To add a new script, open the link your clinician sent by email or SMS, select 'Copy Token' and
                    paste it below.
                  </p>

                  <div className="mt-4">
                    <label className="block text-sm font-medium mb-1">Token URL</label>
                    <input type="text" className="w-full p-3 rounded-xl bg-white border border-gray-200" />
                  </div>

                  <div className="flex items-start mt-4">
                    <input type="checkbox" className="mt-1 mr-2" />
                    <p className="text-sm">
                      I consent to my prescription details being uploaded and associated with my personal information
                    </p>
                  </div>

                  <button className="w-full bg-[#240e9d] text-white py-4 rounded-xl font-medium mt-4">
                    Add new prescription
                  </button>
                </div>
          </div>
        )}

        {activeTab === "order" && (
          <div className="bg-[#f8f8f8] rounded-3xl p-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold">My active prescriptions</h2>
              {hasActivePrescription && (
                <div className="flex space-x-2">
                  <button className="rounded-full bg-[#f8f8f8] p-1">
                    <Plus className="h-5 w-5" />
                  </button>
                  <button className="rounded-full bg-[#f8f8f8] p-1">
                    <Edit className="h-5 w-5" />
                  </button>
                </div>
              )}
            </div>
                <div className="bg-white rounded-xl p-4 mt-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold">NICOVAPE® Q50 50 MG/ML 28</p>
                      <p className="text-sm">2 supplies remaining</p>
                    </div>
                    <div className="text-right">
                      <p className="text-green-500 font-medium">ACTIVE</p>
                      <p className="text-sm">Exp: 01/01/2026</p>
                    </div>
                  </div>
                </div>

                <button className="w-full flex justify-between items-center mt-4">
                  <span>View expired prescriptions</span>
                  <ChevronDown className="h-5 w-5" />
                </button>
          </div>
        )}

        {/* Secondary Navigation */}
        <div className="fixed bottom-20 left-0 right-0 max-w-md mx-auto px-4">
          <div className="bg-[#deedff] rounded-full p-1 flex justify-between">
            <button
              className={`flex-1 py-2 px-4 rounded-full flex items-center justify-center ${activeTab === "book" ? "bg-white" : ""}`}
              onClick={() => setActiveTab("book")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
                  stroke="#240e9d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 7V12L15 15"
                  stroke="#240e9d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Book
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-full flex items-center justify-center ${activeTab === "find" ? "bg-white" : ""}`}
              onClick={() => setActiveTab("find")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="#240e9d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="#240e9d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              find
            </button>
            <button
              className={`flex-1 py-2 px-4 rounded-full flex items-center justify-center ${activeTab === "order" ? "bg-white" : ""}`}
              onClick={() => setActiveTab("order")}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mr-2"
              >
                <path
                  d="M16 3H1V16H16V3Z"
                  stroke="#240e9d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 8H20L23 11V16H16V8Z"
                  stroke="#240e9d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M5.5 21C6.88071 21 8 19.8807 8 18.5C8 17.1193 6.88071 16 5.5 16C4.11929 16 3 17.1193 3 18.5C3 19.8807 4.11929 21 5.5 21Z"
                  stroke="#240e9d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5 21C19.8807 21 21 19.8807 21 18.5C21 17.1193 19.8807 16 18.5 16C17.1193 16 16 17.1193 16 18.5C16 19.8807 17.1193 21 18.5 21Z"
                  stroke="#240e9d"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Order
            </button>
          </div>
        </div>
      </div>
    </Layout>
  )
}
