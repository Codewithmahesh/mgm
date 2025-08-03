import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image src="/images/mgm-logo.png" alt="MGM College Logo" width={260} height={360} className="rounded-lg " />
            
            </div>
            <p className="text-gray-400 text-sm">
              Affiliated to Dr. BATU, Lonere • Accredited by NAAC(2024) • NBA Accredited(2024-2027) • Approved by AICTE,
              New Delhi.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/academics" className="text-gray-400 hover:text-white transition-colors">
                  Academics
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="text-gray-400 hover:text-white transition-colors">
                  Admissions
                </Link>
              </li>
              <li>
                <Link href="/placements" className="text-gray-400 hover:text-white transition-colors">
                  Placements
                </Link>
              </li>
              <li>
                <Link href="/research" className="text-gray-400 hover:text-white transition-colors">
                  Research
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Programs</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/academics#cse" className="text-gray-400 hover:text-white transition-colors">
                  Computer Science
                </Link>
              </li>
              <li>
                <Link href="/academics#mechanical" className="text-gray-400 hover:text-white transition-colors">
                  Mechanical
                </Link>
              </li>
              <li>
                <Link href="/academics#civil" className="text-gray-400 hover:text-white transition-colors">
                  Civil
                </Link>
              </li>
              <li>
                <Link href="/academics#etc" className="text-gray-400 hover:text-white transition-colors">
                  Electronics & Telecom
                </Link>
              </li>
              <li>
                <Link href="/academics#ai-ml" className="text-gray-400 hover:text-white transition-colors">
                  AI & ML
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 mt-1 text-purple-400" />
                <span className="text-gray-400">
                  MGM's College of Engineering
                  <br />
                  Nanded, Maharashtra, India
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">+91-XXXX-XXXXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-purple-400" />
                <span className="text-gray-400">info@mgmcen.ac.in</span>
              </div>
            </div>

            <div className="flex space-x-4 mt-6">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2024 MGM's College of Engineering, Nanded. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
