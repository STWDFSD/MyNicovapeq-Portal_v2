import type React from "react"
export default function WelcomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="overflow-hidden">{children}</div>
}
