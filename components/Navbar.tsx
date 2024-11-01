"use client"

import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"
import { Button } from '@/components/ui/button'
// Mock session data
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mockSession = {
  data: {
    user: {
      name: "David Wang",
      email: "david@example.com",
      image: "https://github.com/shadcn.png"
    }
  }
}
export default function Navbar() {
  const { data: session } = useSession() //substitute mockSession with useSession() when using real data

  return (
    <nav className="bg-white shadow">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-2xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent hover:from-blue-700 hover:to-blue-900 transition-colors">
            SnapNutrient
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            {session ? (
              <>
                {/* <Link href="/dashboard" className="text-gray-600 hover:text-gray-900">
                  Dashboard
                </Link>
                <Link href="/tracking" className="text-gray-600 hover:text-gray-900">
                  Track Meal
                </Link>
                <Link href="/social" className="text-gray-600 hover:text-gray-900">
                  Community
                </Link> */}
                <span className="text-gray-600">
                  Hello, {session.user?.name}
                </span>
                <Button 
                  variant="outline" 
                  onClick={() => signOut()}
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <>
                {/* <Link href="/features" className="text-gray-600 hover:text-gray-900">
                  Features
                </Link>
                <Link href="/pricing" className="text-gray-600 hover:text-gray-900">
                  Pricing
                </Link> */}
                <Link href="/auth/signin">
                  <Button className="bg-blue-600 hover:bg-blue-700">Sign In</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}