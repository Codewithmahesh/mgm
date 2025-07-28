import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Clock } from "lucide-react"

export default function AcademicsPage() {
  const ugCourses = [
    { name: "Civil Engineering", duration: "4 years", intake: "60", startYear: "1984" },
    { name: "Computer Science & Engineering", duration: "4 years", intake: "120", startYear: "1999" },
    { name: "Electronics & Telecommunication Engineering", duration: "4 years", intake: "60", startYear: "1984" },
    { name: "Information Technology", duration: "4 years", intake: "60", startYear: "2001" },
    { name: "Mechanical Engineering", duration: "4 years", intake: "120", startYear: "1984" },
    { name: "Artificial Intelligence and Machine Learning", duration: "4 years", intake: "60", startYear: "2021" },
    { name: "Automation and Robotics", duration: "4 years", intake: "60", startYear: "2022" },
  ]

  const pgCourses = [
    { name: "Structural Engineering", duration: "2 years", intake: "18", startYear: "2009" },
    { name: "Electronics & Telecommunication Engineering", duration: "2 years", intake: "18", startYear: "2010" },
    { name: "Computer Science & Engineering", duration: "2 years", intake: "18", startYear: "2010" },
    { name: "Manufacturing Process Engineering", duration: "2 years", intake: "18", startYear: "2012" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">Academic Programs</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive engineering education across multiple disciplines
          </p>
        </div>

        <div className="space-y-12">
          <div className="animate-slide-up">
            <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Undergraduate Programs (B.Tech)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ugCourses.map((course, index) => (
                <Card
                  key={index}
                  className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-purple-500" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-purple-500" />
                        <span>Intake: {course.intake}</span>
                      </div>
                      <Badge variant="outline" className="border-purple-300 text-purple-700">
                        Since {course.startYear}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="animate-slide-up animation-delay-400">
            <h2 className="text-3xl font-bold text-purple-800 mb-8 text-center">Postgraduate Programs (M.Tech)</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pgCourses.map((course, index) => (
                <Card
                  key={index}
                  className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                  style={{ animationDelay: `${(index + 7) * 100}ms` }}
                >
                  <CardHeader className="bg-gradient-to-r from-purple-700 to-purple-800 text-white">
                    <CardTitle className="text-lg">{course.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <div className="flex items-center text-gray-600">
                        <Clock className="w-4 h-4 mr-2 text-purple-500" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="w-4 h-4 mr-2 text-purple-500" />
                        <span>Intake: {course.intake}</span>
                      </div>
                      <Badge variant="outline" className="border-purple-300 text-purple-700">
                        Since {course.startYear}
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
