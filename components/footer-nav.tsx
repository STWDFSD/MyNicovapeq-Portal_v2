"use client"

import { usePathname, useRouter } from "next/navigation"
import { Home, PlusCircle, HelpCircle, PieChart, CircleDot } from "lucide-react"
import { cn } from "@/lib/utils"

export default function FooterNav() {
  const pathname = usePathname()
  const router = useRouter()

  const navItems = [
    {
      name: "Home",
      href: "/home",
      icon: Home,
      active: pathname === "/home",
    },
    {
      name: "Services",
      href: "/services",
      icon: PlusCircle,
      active: pathname === "/services",
    },
    {
      name: "Help",
      href: "/help",
      icon: HelpCircle,
      active: pathname === "/help",
    },
    {
      name: "Usage",
      href: "/usage",
      icon: PieChart,
      active: pathname === "/usage",
    },
    {
      name: "Device",
      href: "/device",
      icon: CircleDot,
      active: pathname === "/device",
    },
  ]

  return (
    <nav className="">
      <div className="mx-auto max-w-md bg-blue-50 rounded-full mb-4 shadow-lg flex justify-between px-6 py-3">
        {navItems.map((item) => (
          <button key={item.name} onClick={() => router.push(item.href)} className="flex flex-col items-center">
            <div className={cn("p-1.5 rounded-full", item.active ? "text-blue-500" : "text-gray-800")}>
              <item.icon className={cn("w-5 h-5", item.name === "Home" && item.active && "fill-blue-500")} />
            </div>
            <span className={cn("text-xs font-medium", item.active ? "text-blue-500" : "text-gray-800")}>
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </nav>
  )
}
