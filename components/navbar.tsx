"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const [academicsOpen, setAcademicsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/images/mgm-logo.png" alt="MGM College Logo" width={360} height={360} className="rounded-lg " />
            {/* <div className="hidden md:block">
               <h1 className="text-xl font-bold text-purple-900">MGM's College of Engineering</h1> 
               <p className="text-sm text-gray-600">Nanded</p> 
            </div> */}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Home
            </Link>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-purple-600 transition-colors font-medium">
                About
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/about#vision"
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    Vision & Mission
                  </Link>
                  <Link
                    href="/about#chairman"
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    Chairman's Desk
                  </Link>
                  <Link
                    href="/about#director"
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    Director's Desk
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-purple-600 transition-colors font-medium">
                Academics
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/academics"
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    All Programs
                  </Link>
                  <Link
                    href="/academics/civil"
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    Civil Engineering
                  </Link>
                  <Link
                    href="/academics/computer-science"
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    Computer Science
                  </Link>
                  <Link
                    href="/academics/mechanical"
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    Mechanical Engineering
                  </Link>
                  <Link
                    href="/academics/electronics"
                    className="block px-4 py-2 text-gray-700 hover:bg-purple-50 hover:text-purple-600"
                  >
                    Electronics & Telecom
                  </Link>
                </div>
              </div>
            </div>

             <Link href="/achievements" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Achievements
            </Link>

            <Link href="/contact" className="text-gray-700 hover:text-purple-600 transition-colors font-medium">
              Contact
            </Link>

            <Button className="bg-purple-600 hover:bg-purple-700">Admissions</Button>
          </div>

          {/* Mobile menu button */}
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t">
            <div className="space-y-2">
              <Link
                href="/"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-md transition-colors"
                  onClick={() => setAboutOpen(!aboutOpen)}
                >
                  About
                  <ChevronDown className={`h-4 w-4 transition-transform ${aboutOpen ? "rotate-180" : ""}`} />
                </button>
                {aboutOpen && (
                  <div className="ml-4 space-y-1">
                    <Link
                      href="/about"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      About Us
                    </Link>
                    <Link
                      href="/about#vision"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Vision & Mission
                    </Link>
                  </div>
                )}
              </div>

            
              <div>
                <button
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-md transition-colors"
                  onClick={() => setAcademicsOpen(!academicsOpen)}
                >
                  Academics
                  <ChevronDown className={`h-4 w-4 transition-transform ${academicsOpen ? "rotate-180" : ""}`} />
                </button>
                {academicsOpen && (
                  <div className="ml-4 space-y-1">
                    <Link
                      href="/academics"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      All Programs
                    </Link>
                    <Link
                      href="/academics/civil"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Civil Engineering
                    </Link>
                    <Link
                      href="/academics/computer-science"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Computer Science
                    </Link>
                    <Link
                      href="/academics/mechanical"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Mechanical Engineering
                    </Link>
                    <Link
                      href="/academics/electronics"
                      className="block px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 rounded-md"
                      onClick={() => setIsOpen(false)}
                    >
                      Electronics & Telecom
                    </Link>
                  </div>
                )}
              </div>

                  <Link
                href="/achievements"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Achievements
              </Link>


              <Link
                href="/contact"
                className="block px-4 py-2 text-gray-700 hover:bg-purple-50 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="px-4 py-2">
                <Button className="w-full bg-purple-600 hover:bg-purple-700">Admissions</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
