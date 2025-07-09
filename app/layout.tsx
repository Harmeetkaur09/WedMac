import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Poppins } from 'next/font/google'
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
})
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Adjust as needed
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "WedMac India - Makeup Artist Platform",
  description: "Make Your Interior More Minimalistic & Modern",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
<html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
