'use client'
import { useState } from "react"
import { useRouter } from 'next/navigation'

export const SignInForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    otp: "",
    keepLoggedIn: false
  })
  const router = useRouter();

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSignIn = () => {
    console.log("Signing in with:", formData)
  }

  const handleResendOTP = () => {
    console.log("Resending OTP to:", formData.email)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl p-6">
        {/* Header */}
        <div className="text-center space-y-1 mb-6">
          <h2 className="text-xl font-semibold text-white">Sign in</h2>
          <p className="text-sm text-gray-400">
            Please login to continue to your account.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-4">
          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm text-gray-300">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* OTP */}
          <div className="space-y-1">
            <label htmlFor="otp" className="text-sm text-gray-300">OTP</label>
            <input
              id="otp"
              type="text"
              value={formData.otp}
              onChange={(e) => handleInputChange("otp", e.target.value)}
              placeholder="Enter OTP"
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
            <button
              onClick={handleResendOTP}
              className="text-sm text-blue-400 hover:underline mt-1"
            >
              Resend OTP
            </button>
          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="keepLoggedIn"
              checked={formData.keepLoggedIn}
              onChange={(e) => handleInputChange("keepLoggedIn", e.target.checked)}
              className="h-4 w-4 text-blue-500 rounded focus:ring-2 focus:ring-blue-400"
            />
            <label htmlFor="keepLoggedIn" className="text-sm text-gray-300">
              Keep me logged in
            </label>
          </div>

          {/* Sign In Button */}
          <button
            onClick={handleSignIn}
            className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Sign in
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Need an account?{" "}
            <button onClick={()=>{
              router.push('/signup')
            }}
            className="text-blue-400 hover:underline font-medium">
              Create one
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}