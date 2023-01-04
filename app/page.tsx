"use client"

import { Inter } from "@next/font/google"
import { Hero } from "components/hero"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter"
})

export default function Home() {
  return (
    <main className={`${inter.variable} font-sans min-h-screen w-screen flex items-center justify-center`}>
      <Hero />
    </main>
  )
}
