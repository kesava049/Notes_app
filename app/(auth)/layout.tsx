'use client'
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex bg-gray-100">
      <div className="w-full md:w-1/2 h-screen flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-6">
          {children}
        </div>
      </div>
      <div className="hidden md:flex w-1/2 h-screen items-center justify-center p-4">
        <img
          src="https://res.allmacwallpaper.com/pic/Thumbnails/23774_728.jpg"
          alt="Sample Image"
          className="w-full h-full object-cover border-black border-2 rounded-3xl"
        />
      </div>
    </div>
  );
}