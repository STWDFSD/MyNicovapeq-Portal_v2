"use client"

import type React from "react"

import { User } from "lucide-react"
import Logo from "@/components/logo"
import FooterNav from "@/components/footer-nav"

interface LayoutProps {
  children: React.ReactNode
  currentPage: "home" | "services" | "help" | "usage" | "device"
}

export default function Layout({ children, currentPage }: LayoutProps) {
  return (
    <div className="h-[100svh] flex flex-col bg-white text-black overflow-hidden">
      {/* Header - fixed height */}
      <header className="w-full p-4 flex justify-between items-center shrink-0">
        <Logo textOnly className="text-2xl" />
        <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-blue-800" />
        </div>
      </header>

      {/* Main content - scrollable if needed */}
      <div className="flex-1 overflow-auto">
        <div className="max-w-md mx-auto h-full">{children}</div>
      </div>

      {/* Footer Navigation - fixed height */}
      <div className="shrink-0">
        <FooterNav />
      </div>
    </div>
  )
}
