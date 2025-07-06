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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-6">
      <div className="w-full max-w-md rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl p-6">
        {/* Header */}
        <div className="text-center space-y-1 mb-6">
          <h2 className="text-xl font-semibold text-white">Sign up</h2>
          <p className="text-sm text-gray-400">
            Sign up to website Take your notes
          </p>
        </div>

        {/* Form Inputs */}
        <div className="space-y-4">
          {/* Name */}
          <div className="space-y-1">
            <label htmlFor="name" className="text-sm text-gray-300">Your Name</label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              placeholder="Enter name"
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

          {/* Date of Birth */}
          <div className="space-y-1">
            <label htmlFor="dob" className="text-sm text-gray-300">Date of Birth</label>
            <input
              id="dob"
              type="date"
              value={formData.dateOfBirth}
              onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
              className="w-full px-4 py-2 rounded-md bg-white/10 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />
          </div>

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

          {/* Submit Button */}
          <button
            onClick={handleGetOTP}
            className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium rounded-lg shadow-lg hover:opacity-90 transition"
          >
            Get OTP
          </button>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Already have an account?{" "}
            <button onClick={()=>{
              router.push('/signin')
            }}
              className="text-blue-400 hover:underline font-medium">
              Sign in
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}