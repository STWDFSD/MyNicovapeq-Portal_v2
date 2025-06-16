import Layout from "@/components/layout"
import Link from "next/link"

export default function ExternalPage() {
  return (
    <Layout currentPage="services">
      <div className="p-4 space-y-4 max-w-md mx-auto h-full">
        {/* Appointment Card */}
        <div className="bg-gray-50 rounded-3xl p-4">
          <h2 className="text-2xl font-bold">Book a follow-up appointment</h2>
          <p className="mt-2 text-gray-700">
            Low on repeats or need some support? Book a bulk-billed appointment today with hubMed+.
          </p>
          <Link href="https://hubmed.com.au" target="_blank" className="block mt-4">
            <button className="w-full bg-indigo-900 text-white py-4 rounded-xl font-medium">Visit hubmed.com.au</button>
          </Link>
        </div>

        {/* Pharmacy Card */}
        <div className="bg-gray-50 rounded-3xl p-4">
          <h2 className="text-2xl font-bold">Find your nearest pharmacy</h2>
          <p className="mt-2 text-gray-700">
            Running low? Quitwise lists hundreds of pharmacies verified as stocked and trained suppliers of Nicovape® Q.
          </p>
          <Link href="https://quitwise.com.au" target="_blank" className="block mt-4">
            <button className="w-full bg-indigo-900 text-white py-4 rounded-xl font-medium">
              Visit quitwise.com.au
            </button>
          </Link>
        </div>

        {/* Home Delivery Card */}
        <div className="bg-gray-50 rounded-3xl p-4">
          <h2 className="text-2xl font-bold">Order home delivery</h2>
          <p className="mt-2 text-gray-700">
            Can't get to the pharmacy? Convenient home delivery is now available via Evermed.
          </p>
          <div className="bg-red-100 rounded-xl p-4 mt-4">
            <p className="text-gray-800 font-medium">Valid prescription required for home delivery orders</p>
            <p className="text-gray-700 mt-1">Need a new script? Book an appointment below</p>
          </div>
          <Link href="https://evermed.com.au" target="_blank" className="block mt-4">
            <button className="w-full bg-indigo-900 text-white py-4 rounded-xl font-medium">
              Visit evermed.com.au
            </button>
          </Link>
        </div>
      </div>
    </Layout>
  )
}
