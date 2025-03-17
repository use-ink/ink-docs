import React from 'react'
import { Navbar } from '../components/landing/nav'
import { Footer } from '../components/footer'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  )
}
