import { CheckCircle } from "lucide-react"

interface DeviceAlertProps {
  isRegistered?: boolean
}

export default function DeviceAlert({ isRegistered = false }: DeviceAlertProps) {
  return (
    <div className="bg-green-50/90 text-gray-800 rounded-[15px] w-full py-4 px-6 flex items-center justify-center mt-4 mb-8">
      <CheckCircle className="w-6 h-6 mr-2 text-gray-800" />
      <span className="text-lg font-medium">
        {isRegistered ? "This device is already registered" : "New unregistered device recognised"}
      </span>
    </div>
  )
}
