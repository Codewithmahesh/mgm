"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, Award } from "lucide-react"
import EditableWrapper from "./editable-wrapper"

export default function NewsEvents() {
  const [content, setContent] = useState({
    title: "News & Events",
    subtitle: "Stay updated with the latest happenings, events, and announcements from our campus.",
    eventsTitle: "Latest Events",
  })

  const handleSave = (newContent: { [key: string]: string }) => {
    setContent((prev) => ({ ...prev, ...newContent }))
    console.log("Saved content:", newContent)
  }

  const news = [
    {
      title: "Third International Conference on Data Analysis and Learning (DAL'24)",
      date: "2024-12-15",
      type: "Conference",
      description: "Join us for the premier conference on data analysis and machine learning.",
      icon: <Users className="h-5 w-5" />,
    },
    {
      title: "VISIOTECH 2024 - Technical Festival",
      date: "2024-11-20",
      type: "Event",
      description: "Annual technical festival showcasing innovation and creativity.",
      icon: <Award className="h-5 w-5" />,
    },
    {
      title: "B.Tech Admission Round 2 - 2025-26",
      date: "2024-10-30",
      type: "Admission",
      description: "Second round of admissions for B.Tech programs now open.",
      icon: <Calendar className="h-5 w-5" />,
    },
    {
      title: "Placement Drive - Top MNCs",
      date: "2024-10-15",
      type: "Placement",
      description: "Major companies visiting campus for final year placements.",
      icon: <MapPin className="h-5 w-5" />,
    },
  ]

  const notices = [
    "Information Brochure Academic Year 2025-26 now available",
    "NIRF Ranking Report 2024 published",
    "New tender notices for infrastructure development",
    "SWAYAM-NPTEL course registrations open",
    "Internal Quality Assurance Cell (IQAC) meeting scheduled",
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 to-gray-50">
      <div className="container mx-auto px-4">
        <EditableWrapper
          id="news-header"
          editableContent={{
            title: content.title,
            subtitle: content.subtitle,
          }}
          onSave={handleSave}
        >
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-900 mb-6">{content.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{content.subtitle}</p>
          </div>
        </EditableWrapper>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <EditableWrapper
              id="events-title"
              editableContent={{
                eventsTitle: content.eventsTitle,
              }}
              onSave={handleSave}
            >
              <h3 className="text-2xl font-bold text-purple-800 mb-6 animate-slide-up">{content.eventsTitle}</h3>
            </EditableWrapper>
            <div className="space-y-6">
              {news.map((item, index) => (
                <EditableWrapper
                  key={index}
                  id={`news-item-${index}`}
                  editableContent={{
                    title: item.title,
                    description: item.description,
                    type: item.type,
                  }}
                  onSave={(newContent) => {
                    // Handle individual news item updates
                    console.log("Updated news item:", newContent)
                  }}
                >
                  <Card
                    className="border-purple-200 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-slide-up"
                    style={{ animationDelay: `${200 + index * 100}ms` }}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center space-x-3">
                          <div className="p-2 bg-purple-100 rounded-lg text-purple-600">{item.icon}</div>
                          <div>
                            <CardTitle className="text-lg text-purple-900">{item.title}</CardTitle>
                            <div className="flex items-center space-x-4 mt-1">
                              <span className="text-sm text-gray-500 flex items-center">
                                <Calendar className="w-4 h-4 mr-1" />
                                {new Date(item.date).toLocaleDateString()}
                              </span>
                              <Badge variant="outline" className="border-purple-300 text-purple-700">
                                {item.type}
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </EditableWrapper>
              ))}
            </div>
          </div>

          <div>
            <Card className="border-purple-200 shadow-lg sticky top-24 animate-slide-up animation-delay-400">
              <CardHeader className="bg-gradient-to-r from-purple-600 to-purple-700 text-white">
                <CardTitle className="text-xl">Notice Board</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {notices.map((notice, index) => (
                    <EditableWrapper
                      key={index}
                      id={`notice-${index}`}
                      editableContent={{
                        notice: notice,
                      }}
                      onSave={(newContent) => {
                        console.log("Updated notice:", newContent)
                      }}
                    >
                      <div className="flex items-start space-x-3 p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors cursor-pointer">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-sm text-gray-700">{notice}</p>
                      </div>
                    </EditableWrapper>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
