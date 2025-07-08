'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignUp() {
  const [error, setError] = useState('');
  const router = useRouter();

  const handleGoogleSignUp = async () => {
    try {
      const result = await signIn('google', { callbackUrl: '/dashboard' });
      if (result?.error) {
        setError('Failed to sign up with Google');
      }
    } catch (err) {
      setError('An error occurred during sign-up');
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <button
        onClick={handleGoogleSignUp}
        className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Sign up with Google
      </button>
    </div>
  );
}