import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-purple-900 mb-4">About MGM's College of Engineering</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Established in 1984, we are committed to excellence in engineering education
          </p>
        </div>

        <div className="grid gap-8 md:gap-12">
          <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
              <CardTitle className="text-2xl">Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <p className="text-gray-700 leading-relaxed">
                To establish itself as a leading provider of engineering education, committed to developing proficient
                engineers who are globally accepted and dedicated to serving mankind.
              </p>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up animation-delay-200">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
              <CardTitle className="text-2xl">Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Delivering quality engineering education through multidisciplinary and sustainable approach
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fostering globally competent engineers capable of solving real-life problems
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Inculcating professionalism, teamwork, research, innovation, and entrepreneurship
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Fostering collaborations with industry, academia, and research organizations
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up animation-delay-400">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
              <CardTitle className="text-2xl">Core Values</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Integrity",
                  "Accountability",
                  "Responsibility",
                  "Transparency",
                  "Respect for Individual",
                  "Faculty Empowerment",
                  "Service to Nation",
                  "Environmental Stewardship",
                ].map((value, index) => (
                  <Badge key={index} variant="outline" className="p-3 text-center border-purple-300 text-purple-700">
                    {value}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up animation-delay-600">
            <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
              <CardTitle className="text-2xl">Accreditations & Affiliations</CardTitle>
            </CardHeader>
            <CardContent className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Accredited by:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• National Board of Accreditations (NBA)</li>
                    <li>• NAAC (2024)</li>
                    <li>• NBA Accredited (2024-2027)</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-purple-800 mb-2">Affiliated to:</h4>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Dr. BATU, Lonere</li>
                    <li>• Approved by AICTE, New Delhi</li>
                    <li>• 'A' Grade College by Govt. of Maharashtra</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
