import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, BookOpen, Building, Globe, Trophy } from "lucide-react"

export default function StatsSection() {
  const stats = [
    {
      icon: <Award className="h-8 w-8 text-yellow-500" />,
      number: "40+",
      label: "Years of Excellence",
      description: "Established in 1984",
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      number: "5000+",
      label: "Alumni Worldwide",
      description: "Global network",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-green-500" />,
      number: "11",
      label: "Programs Offered",
      description: "UG & PG courses",
    },
    {
      icon: <Building className="h-8 w-8 text-purple-500" />,
      number: "50+",
      label: "MGM Institutions",
      description: "Across 5 locations",
    },
    {
      icon: <Globe className="h-8 w-8 text-red-500" />,
      number: "95%",
      label: "Placement Rate",
      description: "Industry ready graduates",
    },
    {
      icon: <Trophy className="h-8 w-8 text-orange-500" />,
      number: "A+",
      label: "NAAC Grade",
      description: "Quality assured",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-purple-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Achievements</h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Four decades of excellence in engineering education and research
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/10 backdrop-blur-lg border-white/20 hover:bg-white/20 transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${100 + index * 100}ms` }}
            >
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <div className="text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-xl font-semibold text-purple-100 mb-2">{stat.label}</div>
                <div className="text-sm text-purple-200">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
