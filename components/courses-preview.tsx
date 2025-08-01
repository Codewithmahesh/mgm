import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Users, Clock, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CoursesPreview() {
  const featuredCourses = [
    {
      name: "Computer Science & Engineering",
      level: "B.Tech",
      duration: "4 years",
      intake: "120",
      description: "Comprehensive program covering software development, AI, and emerging technologies.",
      highlights: ["AI & ML", "Data Science", "Software Engineering", "Cybersecurity"],
    },
    {
      name: "Artificial Intelligence and Machine Learning",
      level: "B.Tech",
      duration: "4 years",
      intake: "60",
      description: "Cutting-edge program focused on AI, ML, and intelligent systems.",
      highlights: ["Deep Learning", "Neural Networks", "Computer Vision", "NLP"],
    },
    {
      name: "Mechanical Engineering",
      level: "B.Tech",
      duration: "4 years",
      intake: "120",
      description: "Traditional engineering discipline with modern manufacturing focus.",
      highlights: ["CAD/CAM", "Robotics", "Thermal Systems", "Manufacturing"],
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">Academic Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive range of undergraduate and postgraduate engineering programs designed for the
            future.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {featuredCourses.map((course, index) => (
            <Card
              key={index}
              className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full animate-slide-up"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-yellow-400 text-black">
                    {course.level}
                  </Badge>
                  <GraduationCap className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{course.name}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex-1 flex flex-col">
                <div className="space-y-4 flex-1">
                  <p className="text-gray-600">{course.description}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      Intake: {course.intake}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-purple-800 mb-2">Key Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {course.highlights.map((highlight, idx) => (
                        <Badge key={idx} variant="outline" className="border-purple-300 text-purple-700">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
      
                <Link
                  href={`/academics/${
                    course.name.toLowerCase().includes("computer")
                      ? "computer-science"
                      : course.name.toLowerCase().includes("artificial")
                        ? "computer-science"
                        : course.name.toLowerCase().includes("mechanical")
                          ? "mechanical"
                          : "civil"
                  }`}
                >
                  <Button
                    variant="outline"
                    className="group flex w-full items-center gap-2 border-2 border-purple-300 text-purple-700 bg-white px-5 py-2 rounded-3xl mt-5 hover:text-purple-700 hover:border-purple-700 transition duration-300"
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center animate-fade-in animation-delay-600">
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            <Link href="/academics" className="flex items-center">
              View All Programs
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
