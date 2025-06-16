import Layout from "@/components/layout"

export default function HelpPage() {
  return (
    <Layout currentPage="help">
      <div className="p-4 h-full overflow-auto">
        <div className="bg-gray-50 rounded-3xl p-4">
          <h2 className="text-2xl font-bold">Help & Support</h2>

          <div className="mt-4 space-y-4">
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-medium text-lg">Frequently Asked Questions</h3>
              <p className="text-gray-600 mt-1">Find answers to common questions about your device</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-medium text-lg">Troubleshooting</h3>
              <p className="text-gray-600 mt-1">Solutions for common device issues</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-medium text-lg">Contact Support</h3>
              <p className="text-gray-600 mt-1">Get in touch with our customer service team</p>
            </div>

            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-medium text-lg">User Manual</h3>
              <p className="text-gray-600 mt-1">Download the complete user guide</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
