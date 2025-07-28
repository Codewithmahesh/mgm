import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Trophy, BookOpen, Music, Camera, Gamepad2 } from "lucide-react"

export default function CampusLife() {
  const activities = [
    {
      icon: <Trophy className="h-8 w-8 text-yellow-500" />,
      title: "Sports & Athletics",
      description: "Cricket, Football, Basketball, Tennis, and more",
      image: "/placeholder.svg?height=200&width=300&text=Sports",
    },
    {
      icon: <Music className="h-8 w-8 text-pink-500" />,
      title: "Cultural Events",
      description: "Annual fest, music competitions, dance performances",
      image: "/placeholder.svg?height=200&width=300&text=Cultural",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-blue-500" />,
      title: "Technical Clubs",
      description: "Coding clubs, robotics, innovation labs",
      image: "/placeholder.svg?height=200&width=300&text=Technical",
    },
    {
      icon: <Camera className="h-8 w-8 text-green-500" />,
      title: "Photography Club",
      description: "Capture memories and develop creative skills",
      image: "/placeholder.svg?height=200&width=300&text=Photography",
    },
    {
      icon: <Users className="h-8 w-8 text-purple-500" />,
      title: "Student Council",
      description: "Leadership opportunities and student governance",
      image: "/placeholder.svg?height=200&width=300&text=Council",
    },
    {
      icon: <Gamepad2 className="h-8 w-8 text-red-500" />,
      title: "Gaming Club",
      description: "Esports tournaments and gaming competitions",
      image: "/placeholder.svg?height=200&width=300&text=Gaming",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">Campus Life</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience a vibrant campus life with diverse activities, clubs, and opportunities for personal growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="absolute top-4 left-4 p-2 bg-white rounded-lg shadow-md">{activity.icon}</div>
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-purple-800">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-600">{activity.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
