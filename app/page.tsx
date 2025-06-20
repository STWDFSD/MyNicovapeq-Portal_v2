"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle } from "lucide-react";
import Logo from "@/components/logo";

export default function HomePage() {
  const router = useRouter();

  // useEffect(() => {
  //   const isDeviceRegistered =
  //     localStorage.getItem("deviceRegistered") === "true";

  //   if (isDeviceRegistered) {
  //     router.push("/returning-user");
  //   }
  // }, [router]);

  const handleRegister = () => {
    // For demo purposes, set the device as registered after registration
    localStorage.setItem("deviceRegistered", "true");
  };

  return (
    <main className="h-screen max-h-screen flex flex-col items-center bg-gradient-to-b from-blue-400 via-blue-500 to-blue-800 text-white overflow-hidden">
      <div className="w-full max-w-md flex flex-col items-center px-4 flex-1 overflow-hidden">
        {/* Header Section */}
        <div className="w-full flex flex-col items-center pt-8 sm:pt-16">
          <h1 className="text-2xl font-medium text-center mb-2">Welcome to</h1>
          <Logo className="w-64 sm:w-80 h-auto mb-4" />

          {/* Device Recognition Alert */}
          <div className="bg-green-50/90 text-gray-800 rounded-[15px] w-full py-3 px-4 flex items-center justify-center mt-2 mb-6">
            <CheckCircle className="w-5 h-5 mr-2 text-gray-800" />
            <span className="text-base sm:text-lg font-medium">
              New unregistered device recognised
            </span>
          </div>
        </div>

        {/* Motivational Section - Scrollable if needed */}
        <div className="w-full flex flex-col items-start justify-end flex-1 overflow-y-auto py-4">
          <h2 className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2">
            <span className="italic text-gray-200">Stay</span> informed.
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2">
            <span className="italic text-gray-200">Stay</span> motivated.
          </h2>
          <h2 className="text-3xl sm:text-5xl font-bold mb-1 sm:mb-2">
            <span className="italic text-gray-200">Stay</span> supported.
          </h2>

          <p className="text-base sm:text-xl mt-4 mb-6">
            Take control of your quit journey with features and insights
            designed to keep you informed, motivated and supported along the
            way.
          </p>
        </div>
      </div>

      {/* Action Buttons - Fixed at bottom */}
      <div className="w-full max-w-md px-4 py-4 mt-auto">
        <div className="w-full flex flex-row space-x-4">
          <Link
            href="/register"
            onClick={handleRegister}
            className="w-1/2 bg-white text-black rounded-[15px] py-2 px-4 text-center font-medium"
          >
            Register
          </Link>
          <Link
            href="/signin"
            className="w-1/2 border border-white text-white rounded-[15px] py-2 px-4 text-center font-medium"
          >
            Sign in
          </Link>
        </div>
      </div>
    </main>
  );
}
