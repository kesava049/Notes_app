'use client'
import { useState } from "react"
import { useRouter } from "next/navigation";

export const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    dateOfBirth: "",
    email: ""
  })
  const router = useRouter()
  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleGetOTP = () => {
    console.log("Getting OTP for:", formData)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6">
      <div className="w-full max-w-md rounded-2xl bg-black border border-white/10 shadow-2xl p-6">
        {/* Header */}
        <div className="text-center space-y-1 mb-6">
          <h1 className="absolute top-4 left-4 text-3xl font-extrabold text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text">
          HD
        </h1>
          <h2 className="text-xl font-semibold text-white">Sign up</h2>
          <p className="text-sm text-gray-400">
            Sign up to website Take your notes
          </p>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          {/* Name */}
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm text-white">Your Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter name"
              className="w-full px-4 py-2 rounded-md bg-black border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition"
            />
          </div>

          {/* Date of Birth */}
          <div className="space-y-1">
            <label htmlFor="dob" className="text-sm text-white">Date of Birth</label>
            <input
              id="dob"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-black border border-white text-white focus:outline-none focus:ring-2 focus:ring-white transition"
            />
          </div>

          {/* Email */}
          <div className="space-y-1">
            <label htmlFor="email" className="text-sm text-white">Email</label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-md bg-black border border-white text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white transition"
            />
          </div>

          {/* Submit Button */}
          <button
            onClick={handleGetOTP}
            className="w-full mt-4 px-4 py-2 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition"
          >
            Get OTP
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <button
              onClick={() => router.push('/signin')}
              className="text-white hover:underline font-medium"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}