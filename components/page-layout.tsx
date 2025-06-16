import type React from "react"
import Link from "next/link"
import { ArrowLeft, HelpCircle } from "lucide-react"

interface PageLayoutProps {
  children: React.ReactNode
  backHref?: string
  showHeader?: boolean
  showHelp?: boolean
  bottomContent?: React.ReactNode
}

export default function PageLayout({
  children,
  backHref,
  showHeader = true,
  showHelp = true,
  bottomContent,
}: PageLayoutProps) {
  return (
    <div className="h-[100svh] flex flex-col bg-white text-black overflow-hidden">
      {showHeader && (
        <div className="w-full max-w-md mx-auto px-4 pt-4 pb-2 shrink-0">
          <div className="flex justify-between items-center">
            {backHref && (
              <Link href={backHref} className="p-2">
                <ArrowLeft className="w-5 h-5" />
              </Link>
            )}
            {!backHref && <div className="w-9" />}

            {showHelp && (
              <Link href="/help" className="flex items-center gap-1 px-3 py-1.5 rounded-full border border-gray-200">
                <HelpCircle className="w-4 h-4" />
                <span className="font-medium text-sm">Help</span>
              </Link>
            )}
          </div>
        </div>
      )}

      <div className="flex-1 w-full max-w-md mx-auto px-4 overflow-auto">
        <div className="h-full flex flex-col">{children}</div>
      </div>

      {bottomContent && <div className="w-full max-w-md mx-auto px-4 py-4 bg-white shrink-0">{bottomContent}</div>}
    </div>
  )
}
