import { AlertCircle } from "lucide-react"

export default function StepsCard() {
  return (
    <div className="bg-blue-50 rounded-xl p-4 mb-4">
      <div className="flex items-start gap-3">
        <AlertCircle className="w-5 h-5 text-blue-500 mt-0.5" />
        <div>
          <h3 className="font-medium">Complete your setup</h3>
          <p className="text-sm text-gray-700 mt-1">Add your environment variables to enable all features</p>
        </div>
      </div>

      <div className="mt-3 space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">✓</div>
          <span className="text-sm">Device registration</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs">
            2
          </div>
          <span className="text-sm">Connect to AWS Cognito</span>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gray-200 text-gray-500 flex items-center justify-center text-xs">
            3
          </div>
          <span className="text-sm">Set up API endpoints</span>
        </div>
      </div>
    </div>
  )
}
