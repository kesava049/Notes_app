'use client';

import Link from 'next/link';
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut({ redirect: false });
    router.push('/auth/signin');
  };

  return (
    <header className="bg-secondary text-white shadow-md">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          Note-Taking App
        </Link>
        <div className="space-x-4">
          {session ? (
            <>
              <Link href="/dashboard" className="hover:text-accent">
                Dashboard
              </Link>
              <button
                onClick={handleSignOut}
                className="hover:text-accent"
              >
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link href="/auth/signin" className="hover:text-accent">
                Sign In
              </Link>
              <Link href="/auth/signup" className="hover:text-accent">
                Sign Up
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}