import Image from "next/image"

interface LogoProps {
  className?: string
  textOnly?: boolean
}

export default function Logo({ className = "", textOnly = false }: LogoProps) {
  if (textOnly) {
    return (
      <div className={`${className} relative flex items-center justify-center`}>
        <Image src="/images/new-logo.png" alt="mynicovapeQ logo" width={186} height={25} className="h-auto w-full" />
      </div>
    )
  }

  return (
    <div className={`${className} relative flex items-center justify-center`}>
      <Image src="/images/logo.png" alt="mynicovapeQ logo" width={186} height={25} className="h-auto w-full" />
    </div>
  )
}
