import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Users, Building, Award } from "lucide-react"

export default function PlacementHighlights() {
  const stats = [
    {
      icon: <TrendingUp className="h-8 w-8 text-green-500" />,
      number: "95%",
      label: "Placement Rate",
      description: "Students placed in 2023-24",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      number: "500+",
      label: "Students Placed",
      description: "In the last academic year",
    },
    {
      icon: <Building className="h-8 w-8 text-purple-500" />,
      number: "150+",
      label: "Companies",
      description: "Visited for placements",
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      number: "₹45 LPA",
      label: "Highest Package",
      description: "Offered in 2023-24",
    },
  ]

  const topRecruiters = [
    "TCS",
    "Infosys",
    "Wipro",
    "Accenture",
    "IBM",
    "Microsoft",
    "Google",
    "Amazon",
    "Flipkart",
    "Paytm",
    "L&T",
    "Mahindra",
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Placement Highlights</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Our strong industry connections ensure excellent placement opportunities for our students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-purple-100 mb-2">{stat.label}</div>
                <div className="text-sm text-purple-200">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white/10 backdrop-blur-lg border-white/20 animate-slide-up animation-delay-500">
          <CardHeader>
            <CardTitle className="text-2xl text-white text-center">Top Recruiters</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="flex flex-wrap justify-center gap-3">
              {topRecruiters.map((company, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="p-3 text-white border-white/30 hover:bg-white/20 transition-colors"
                >
                  {company}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
