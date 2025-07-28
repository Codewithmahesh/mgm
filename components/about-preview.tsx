"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target, Lightbulb, Users, Award } from "lucide-react"
import Link from "next/link"
import EditableWrapper from "./editable-wrapper"

export default function AboutPreview() {
  const [content, setContent] = useState({
    title: "About Our Institution",
    subtitle:
      "Established in 1984, MGM's College of Engineering has been a beacon of excellence in technical education for over four decades.",
    sectionTitle: "Our Legacy of Excellence",
    description1:
      "MGM Institutions are built upon the extensive experience and high caliber of their trustees, who possess significant expertise in both education and health services. The Mahatma Gandhi Mission has expanded into a vast network encompassing over 50 educational institutions and healthcare centers.",
    description2:
      "We are committed to providing value-based education across diverse disciplines, supported by state-of-the-art technology and infrastructure, fostering globally competent engineers dedicated to serving mankind.",
  })

  const handleSave = (newContent: { [key: string]: string }) => {
    setContent((prev) => ({ ...prev, ...newContent }))
    console.log("Saved content:", newContent)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <EditableWrapper
          id="about-header"
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

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-up">
            <EditableWrapper
              id="about-content"
              editableContent={{
                sectionTitle: content.sectionTitle,
                description1: content.description1,
                description2: content.description2,
              }}
              onSave={handleSave}
            >
              <h3 className="text-3xl font-bold text-purple-800">{content.sectionTitle}</h3>
              <p className="text-gray-700 leading-relaxed">{content.description1}</p>
              <p className="text-gray-700 leading-relaxed">{content.description2}</p>
            </EditableWrapper>
            <Button className="bg-purple-600 hover:bg-purple-700">
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-6 animate-slide-up animation-delay-200">
            <Card className="border-purple-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold text-purple-800 mb-2">Vision</h4>
                <p className="text-sm text-gray-600">Leading provider of engineering education globally</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold text-purple-800 mb-2">Innovation</h4>
                <p className="text-sm text-gray-600">Fostering research and entrepreneurship</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold text-purple-800 mb-2">Community</h4>
                <p className="text-sm text-gray-600">Building global network of professionals</p>
              </CardContent>
            </Card>

            <Card className="border-purple-200 hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <Award className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <h4 className="font-semibold text-purple-800 mb-2">Excellence</h4>
                <p className="text-sm text-gray-600">NAAC & NBA accredited institution</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
