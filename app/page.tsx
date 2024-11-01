"use client"

import Unauthorized_Home from "@/app/unauthorized_client/page"
import Authorized_Home from "@/app/authorized_client/page"
import { useSession } from "next-auth/react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
export default function Home() {
  const { data: session } = useSession() 
  return (
    <div className="min-h-screen flex flex-col">
      {session ? null : <Navbar />}
      <div className="container mx-auto px-4 py-12">
        {session ?  <Authorized_Home /> : <Unauthorized_Home />}
      </div>
      {session ? null: <Footer /> }
    </div>
  )
}