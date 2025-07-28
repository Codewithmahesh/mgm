import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Clock, Award, BookOpen, User, Mail, Phone } from "lucide-react"
import Link from "next/link"

export default function ComputerSciencePage() {
  const courseHighlights = [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Web Development",
    "Mobile App Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Cybersecurity",
    "Cloud Computing",
    "DevOps",
  ]

  const careerOpportunities = [
    "Software Developer",
    "Full Stack Developer",
    "Data Scientist",
    "System Analyst",
    "Database Administrator",
    "Network Engineer",
    "Cybersecurity Specialist",
    "AI/ML Engineer",
    "Cloud Architect",
    "Product Manager",
  ]

  const facilities = [
    "Advanced Computer Labs with latest hardware",
    "High-speed internet connectivity",
    "Licensed software for development",
    "Project development labs",
    "Research facilities",
    "Industry collaboration spaces",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Computer Science & Engineering</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shaping the future through innovative technology and computational thinking
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Course Overview */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="border-blue-200 shadow-lg animate-slide-up">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <BookOpen className="mr-3 h-6 w-6" />
                  Course Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-800">4 Years</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-800">120</div>
                    <div className="text-sm text-gray-600">Intake</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-800">1999</div>
                    <div className="text-sm text-gray-600">Established</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The Computer Science & Engineering program at MGM's College of Engineering is designed to provide
                  students with a comprehensive understanding of computational systems, software development, and
                  emerging technologies. Our curriculum combines theoretical foundations with practical applications,
                  preparing graduates for successful careers in the rapidly evolving tech industry.
                </p>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg animate-slide-up animation-delay-200">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl">Course Highlights</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-3">
                  {courseHighlights.map((highlight, index) => (
                    <Badge key={index} variant="outline" className="p-3 text-center border-blue-300 text-blue-700">
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg animate-slide-up animation-delay-400">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl">Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {careerOpportunities.map((career, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{career}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg animate-slide-up animation-delay-600">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl">Facilities</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {facilities.map((facility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{facility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* HOD Information */}
          <div className="space-y-6">
            <Card className="border-blue-200 shadow-lg animate-slide-up animation-delay-200">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-xl flex items-center">
                  <User className="mr-2 h-5 w-5" />
                  Head of Department
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="h-16 w-16 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-blue-800 mb-2">Dr. Rajesh Kumar</h3>
                <p className="text-gray-600 mb-4">Ph.D. in Computer Science</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center">
                    <Mail className="h-4 w-4 text-blue-600 mr-2" />
                    <span>rajesh.kumar@mgmcen.ac.in</span>
                  </div>
                  <div className="flex items-center justify-center">
                    <Phone className="h-4 w-4 text-blue-600 mr-2" />
                    <span>+91-9876-543210</span>
                  </div>
                </div>
                <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                  <p className="text-sm text-gray-700">
                    15+ years of experience in Computer Science education and research. Specializes in AI, Machine
                    Learning, and Data Science.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-blue-200 shadow-lg animate-slide-up animation-delay-400">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-xl">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Download Syllabus</Button>
                <Button variant="outline" className="w-full border-blue-300 text-blue-700 bg-transparent">
                  <Link href="/contact">Contact Department</Link>
                </Button>
                <Button variant="outline" className="w-full border-blue-300 text-blue-700 bg-transparent">
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
