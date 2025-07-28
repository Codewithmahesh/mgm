import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Clock, Award, BookOpen, User, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function MechanicalPage() {
  const courseHighlights = [
    "Thermodynamics",
    "Fluid Mechanics",
    "Machine Design",
    "Manufacturing Processes",
    "CAD/CAM",
    "Robotics & Automation",
    "Heat Transfer",
    "Materials Science",
    "Quality Control",
    "Industrial Engineering",
    "Renewable Energy",
    "Automotive Engineering",
  ]

  const careerOpportunities = [
    "Mechanical Engineer",
    "Design Engineer",
    "Production Engineer",
    "Quality Engineer",
    "Project Manager",
    "Research & Development",
    "Automotive Engineer",
    "HVAC Engineer",
    "Manufacturing Engineer",
    "Maintenance Engineer",
  ]

  const facilities = [
    "Advanced Manufacturing Lab",
    "CAD/CAM Laboratory",
    "Thermal Engineering Lab",
    "Fluid Mechanics Lab",
    "Materials Testing Lab",
    "Robotics & Automation Lab",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-900 mb-4">Mechanical Engineering</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engineering solutions for a mechanical world through innovation and precision
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-orange-200 shadow-lg animate-slide-up">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <BookOpen className="mr-3 h-6 w-6" />
                  Course Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-800">4 Years</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-800">120</div>
                    <div className="text-sm text-gray-600">Intake</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 text-orange-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-orange-800">1984</div>
                    <div className="text-sm text-gray-600">Established</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The Mechanical Engineering program is one of our oldest and most prestigious departments. We focus on
                  developing engineers who can design, analyze, and manufacture mechanical systems. Our curriculum
                  covers traditional mechanical engineering subjects along with modern technologies like robotics,
                  automation, and sustainable energy systems.
                </p>
              </CardContent>
            </Card>

            <Card className="border-orange-200 shadow-lg animate-slide-up animation-delay-200">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                <CardTitle className="text-2xl">Course Highlights</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-3">
                  {courseHighlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="p-3 text-center border-orange-300 text-orange-700">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 shadow-lg animate-slide-up animation-delay-400">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                <CardTitle className="text-2xl">Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {careerOpportunities.map((career, index) => (
                    <div key={index} className="flex items-center p-3 bg-orange-50 rounded-lg">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{career}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 shadow-lg animate-slide-up animation-delay-600">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                <CardTitle className="text-2xl">Facilities</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {facilities.map((facility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{facility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="border-orange-200 shadow-lg animate-slide-up animation-delay-200">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                <CardTitle className="text-xl flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Head of Department
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-16 w-16 text-orange-600" />
                </div>
                <h3 className="text-xl font-bold text-orange-800 mb-2">Dr. Priya Sharma</h3>
                <p className="text-gray-600 mb-4">Ph.D. in Mechanical Engineering</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 text-orange-600 mr-2" />
                    <span>priya.sharma@mgmcen.ac.in</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 text-orange-600 mr-2" />
                    <span>+91-9876-543211</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-orange-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    18+ years of experience in Mechanical Engineering. Expert in Manufacturing Processes, Robotics, and
                    Sustainable Energy Systems.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-orange-200 shadow-lg animate-slide-up animation-delay-400">
              <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-700 text-white">
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <Button className="w-full bg-orange-600 hover:bg-orange-700">Download Syllabus</Button>
                <Button variant="outline" className="w-full border-orange-300 text-orange-700 bg-transparent">
                  <Link href="/contact">Contact Department</Link>
                </Button>
                <Button variant="outline" className="w-full border-orange-300 text-orange-700 bg-transparent">
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
