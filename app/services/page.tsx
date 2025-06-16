"use client"

import { Plus, Pill, MapPin, Truck, User } from "lucide-react"
import { useRouter } from "next/navigation"
import Logo from "@/components/logo"
import Layout from "@/components/layout"

export default function ServicesPage() {
  const router = useRouter()

  const services = [
    {
      title: "Book a follow-up appointment",
      icon: Plus,
      href: "/services/appointment",
    },
    {
      title: "Manage your prescription",
      icon: Pill,
      href: "/services/prescription",
    },
    {
      title: "Find your nearest pharmacy",
      icon: MapPin,
      href: "/services/pharmacy",
    },
    {
      title: "Order home delivery",
      icon: Truck,
      href: "/services/delivery",
    },
  ]

  return (
  <Layout currentPage="services">
    <div className="h-[100svh] flex flex-col overflow-hidden max-w-md mx-auto h-full">
      <div className="flex-1 flex flex-col">

        {/* Main Content */}
        <div className="flex-1 pb-4 px-3">
          <div className="max-w-md mx-auto bg-[#F2F8FF] rounded-3xl p-4">
            <h1 className="text-2xl font-semibold text-black mb-6">Services</h1>

            <div className="space-y-4 max-w-md mx-auto">
              {/* Book a follow-up appointment */}
              <button
                onClick={() => router.push("/services/appointment")}
                className="w-full bg-white rounded-2xl p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_350_427)">
                      <path
                        d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                        stroke="#240E9D"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_350_427">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-sm font-medium text-black">Book a follow-up appointment</span>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12L19 12M19 12L12 5M19 12L12 19"
                    stroke="#1E1E1E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Manage your prescription */}
              <button
                onClick={() => router.push("/services/prescription")}
                className="w-full bg-white rounded-2xl p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7 6.50061L10.4908 6.5C12.113 6.53851 13.3811 7.49028 13.0186 9.09153C12.8608 9.78835 12.1196 10.4123 11.377 10.5535C11.3656 10.5556 11.3514 10.5345 11.3567 10.5719L13.51 13.2583C13.5326 13.2292 13.5605 13.202 13.582 13.1724C13.6506 13.0778 13.7287 12.9867 13.8052 12.8916C14.3155 12.2578 14.8038 11.6146 15.317 10.9827L16.8276 10.9747L16.8842 10.9983L14.3133 14.1644L17 17.49H15.3663C15.3317 17.431 15.2838 17.3628 15.2411 17.3088C14.7109 16.639 14.1665 15.9364 13.6343 15.276C13.61 15.2459 13.5008 15.0994 13.4768 15.0994C13.4514 15.0994 13.4499 15.1134 13.4377 15.1253C13.3628 15.1976 13.2998 15.3201 13.2376 15.3973C12.8633 15.8606 12.4805 16.3281 12.1154 16.7864C11.9306 17.0183 11.7484 17.2535 11.571 17.4902H10.0281C10.0236 17.4902 9.9951 17.5234 9.98685 17.4677L12.6744 14.1824C12.4329 13.8641 12.1758 13.5565 11.9242 13.2452C11.3067 12.4813 10.6679 11.6946 10.0568 10.934C10.0103 10.876 9.96358 10.8174 9.91242 10.7628H8.36949V12.9927C8.36949 12.9944 8.34656 13.0155 8.34474 13.0155H7.02475C7.02294 13.0155 7 12.9944 7 12.9927V6.50061ZM8.36966 7.59652V9.69703C9.00366 9.67465 9.66143 9.72686 10.2928 9.69763C11.0326 9.66354 11.724 9.3544 11.6874 8.57752C11.6695 8.20004 11.4552 7.89957 11.0872 7.74599C10.9981 7.70885 10.8912 7.6603 10.7956 7.68754L10.8284 7.65741L10.3755 7.59576L8.36982 7.59637L8.36966 7.59652Z"
                      fill="#240E9D"
                    />
                    <circle cx="12" cy="12" r="10" stroke="#240E9D" strokeWidth="2.5" />
                  </svg>
                  <span className="text-sm font-medium text-black">Manage your prescription</span>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12L19 12M19 12L12 5M19 12L12 19"
                    stroke="#1E1E1E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Find your nearest pharmacy */}
              <button
                onClick={() => router.push("/services/pharmacy")}
                className="w-full bg-white rounded-2xl p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-2">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_350_439)">
                      <path
                        d="M7.33335 16.5L0.916687 20.1667V5.50001L7.33335 1.83334M7.33335 16.5L14.6667 20.1667M7.33335 16.5V1.83334M14.6667 20.1667L21.0834 16.5V1.83334L14.6667 5.50001M14.6667 20.1667V5.50001M14.6667 5.50001L7.33335 1.83334"
                        stroke="#240E9D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_350_439">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-sm font-medium text-black">Find your nearest pharmacy</span>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12L19 12M19 12L12 5M19 12L12 19"
                    stroke="#1E1E1E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* Order home delivery */}
              <button
                onClick={() => router.push("/services/delivery")}
                className="w-full bg-white rounded-2xl p-3 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center space-x-2">
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_350_449)">
                      <path
                        d="M14.6667 14.6667V2.75H0.916687V14.6667H14.6667ZM14.6667 14.6667H21.0834V10.0833L18.3334 7.33333H14.6667L14.6667 14.6667ZM7.33335 16.9583C7.33335 18.224 6.30734 19.25 5.04169 19.25C3.77603 19.25 2.75002 18.224 2.75002 16.9583C2.75002 15.6927 3.77603 14.6667 5.04169 14.6667C6.30734 14.6667 7.33335 15.6927 7.33335 16.9583ZM19.25 16.9583C19.25 18.224 18.224 19.25 16.9584 19.25C15.6927 19.25 14.6667 18.224 14.6667 16.9583C14.6667 15.6927 15.6927 14.6667 16.9584 14.6667C18.224 14.6667 19.25 15.6927 19.25 16.9583Z"
                        stroke="#240E9D"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_350_449">
                        <rect width="22" height="22" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="text-sm font-medium text-black">Order home delivery</span>
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12L19 12M19 12L12 5M19 12L12 19"
                    stroke="#1E1E1E"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  )
}
