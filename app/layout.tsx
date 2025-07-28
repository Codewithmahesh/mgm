import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { EditModeProvider } from "@/components/edit-mode-provider"
import EditToggleButton from "@/components/edit-toggle-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "MGM's College of Engineering, Nanded",
  description:
    "Affiliated to Dr. BATU, Lonere • Accredited by NAAC(2024) • NBA Accredited(2024-2027) • Approved by AICTE, New Delhi",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <EditModeProvider>
          <Navbar />
          <EditToggleButton />
          {children}
          <Footer />
        </EditModeProvider>
      </body>
    </html>
  )
}
