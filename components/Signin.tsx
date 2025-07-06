'use client'
// src/components/SignIn.tsx
import React, { useState } from "react";
import OtpInput from "react-otp-input";
import axios from "axios";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [loading, setLoading] = useState(false);

  const handleEmailSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await axios.post("/api/send-otp", { email });
    setStep("otp");
    setLoading(false);
  };

  const handleOtpSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await axios.post("/api/verify-otp", { email, otp });
    setLoading(false);
    // Redirect or show success
  };

  return (
    <div className="flex min-h-screen">
      <div className="flex flex-col justify-center w-full max-w-md px-8 py-12 bg-white">
        <h2 className="text-2xl font-bold mb-2">Sign in</h2>
        <p className="mb-6 text-gray-500">Please login to continue to your account.</p>
        {step === "email" ? (
          <form onSubmit={handleEmailSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Send OTP
            </button>
          </form>
        ) : (
          <form onSubmit={handleOtpSubmit} className="space-y-4">
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              isInputNum
              shouldAutoFocus
              inputStyle={{
                width: "2.5rem",
                height: "2.5rem",
                margin: "0 0.25rem",
                borderRadius: "0.375rem",
                border: "1px solid #d1d5db",
                fontSize: "1.25rem",
              }}
            />
            <button
              type="submit"
              disabled={loading || otp.length < 6}
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Sign in
            </button>
          </form>
        )}
        <div className="mt-4 flex items-center justify-between">
          <button className="text-blue-600 text-sm hover:underline">Resend OTP</button>
          <label className="flex items-center text-sm">
            <input type="checkbox" className="mr-2" />
            Keep me logged in
          </label>
        </div>
        <div className="mt-6 text-sm">
          Need an account? <a href="/signup" className="text-blue-600 hover:underline">Create one</a>
        </div>
      </div>
      <div className="hidden md:block flex-1 bg-blue-900">
        {/* Replace with your image */}
        <img
          src="https://www.figma.com/design/2KWrT6Sg71N8EZwdAMOvvF/Assignment-Design-copy?node-id=3358-163&t=GFo4p16JBEIPyYv0-4"
          alt="Background"
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};

export default SignIn;
