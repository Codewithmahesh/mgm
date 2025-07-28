import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Clock, Award, BookOpen, User, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function ElectronicsPage() {
  const courseHighlights = [
    "Digital Electronics",
    "Analog Electronics",
    "Communication Systems",
    "Signal Processing",
    "Microprocessors",
    "VLSI Design",
    "Embedded Systems",
    "Wireless Communication",
    "Optical Communication",
    "Antenna Design",
    "RF Engineering",
    "IoT Systems",
  ]

  const careerOpportunities = [
    "Electronics Engineer",
    "Communication Engineer",
    "VLSI Design Engineer",
    "Embedded Systems Engineer",
    "RF Engineer",
    "Signal Processing Engineer",
    "Network Engineer",
    "IoT Developer",
    "Hardware Engineer",
    "Research & Development",
  ]

  const facilities = [
    "Digital Electronics Lab",
    "Analog Electronics Lab",
    "Communication Systems Lab",
    "Microprocessor Lab",
    "VLSI Design Lab",
    "Embedded Systems Lab",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-900 mb-4">
            Electronics & Telecommunication Engineering
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting the world through advanced communication and electronic systems
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-indigo-200 shadow-lg animate-slide-up">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <BookOpen className="mr-3 h-6 w-6" />
                  Course Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-indigo-800">4 Years</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-indigo-800">60</div>
                    <div className="text-sm text-gray-600">Intake</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 text-indigo-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-indigo-800">1984</div>
                    <div className="text-sm text-gray-600">Established</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Electronics & Telecommunication Engineering combines the principles of electronics with communication
                  systems. Our program covers both hardware and software aspects of electronic systems, preparing
                  students for careers in telecommunications, embedded systems, and emerging technologies like IoT and
                  5G.
                </p>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 shadow-lg animate-slide-up animation-delay-200">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                <CardTitle className="text-2xl">Course Highlights</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-3">
                  {courseHighlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="p-3 text-center border-indigo-300 text-indigo-700">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 shadow-lg animate-slide-up animation-delay-400">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                <CardTitle className="text-2xl">Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {careerOpportunities.map((career, index) => (
                    <div key={index} className="flex items-center p-3 bg-indigo-50 rounded-lg">
                      <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{career}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 shadow-lg animate-slide-up animation-delay-600">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                <CardTitle className="text-2xl">Facilities</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {facilities.map((facility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{facility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-indigo-200 shadow-lg animate-slide-up animation-delay-200">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                <CardTitle className="text-xl flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Head of Department
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-indigo-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-16 w-16 text-indigo-600" />
                </div>
                <h3 className="text-xl font-bold text-indigo-800 mb-2">Dr. Sunita Desai</h3>
                <p className="text-gray-600 mb-4">Ph.D. in Electronics Engineering</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 text-indigo-600 mr-2" />
                    <span>sunita.desai@mgmcen.ac.in</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 text-indigo-600 mr-2" />
                    <span>+91-9876-543213</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-indigo-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    16+ years of experience in Electronics & Communication. Expert in VLSI Design, Signal Processing,
                    and Wireless Communication Systems.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-indigo-200 shadow-lg animate-slide-up animation-delay-400">
              <CardHeader className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white">
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <Button className="w-full bg-indigo-600 hover:bg-indigo-700">Download Syllabus</Button>
                <Button variant="outline" className="w-full border-indigo-300 text-indigo-700 bg-transparent">
                  <Link href="/contact">Contact Department</Link>
                </Button>
                <Button variant="outline" className="w-full border-indigo-300 text-indigo-700 bg-transparent">
                  View Faculty
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
