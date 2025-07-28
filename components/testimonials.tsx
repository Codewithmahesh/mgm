import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Mehta",
      batch: "CSE 2020",
      company: "Google",
      image: "/placeholder.svg?height=80&width=80&text=RM",
      rating: 5,
      text: "MGM College provided me with excellent technical foundation and industry exposure. The faculty support and placement assistance helped me secure my dream job at Google.",
    },
    {
      name: "Priya Singh",
      batch: "Mechanical 2019",
      company: "Tata Motors",
      image: "/placeholder.svg?height=80&width=80&text=PS",
      rating: 5,
      text: "The practical approach to learning and state-of-the-art labs at MGM prepared me well for the industry. I'm grateful for the opportunities and guidance I received.",
    },
    {
      name: "Arjun Patil",
      batch: "Civil 2021",
      company: "L&T Construction",
      image: "/placeholder.svg?height=80&width=80&text=AP",
      rating: 5,
      text: "The comprehensive curriculum and experienced faculty at MGM helped me build a strong foundation in civil engineering. The college's industry connections are excellent.",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">What Our Alumni Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our successful graduates who are making their mark in the industry
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-purple-400 mr-3" />
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 italic">"{testimonial.text}"</p>

                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-purple-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.batch}</p>
                    <p className="text-sm text-purple-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
