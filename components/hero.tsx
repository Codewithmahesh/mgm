"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Award, Users, BookOpen } from "lucide-react"
import Link from "next/link"
import EditableWrapper from "./editable-wrapper"

export default function Hero() {
  const [content, setContent] = useState({
    title: "MGM's College of Engineering",
    subtitle: "Nanded, Maharashtra",
    description:
      "Affiliated to Dr. BATU, Lonere • Accredited by NAAC(2024) • NBA Accredited(2024-2027) • Approved by AICTE, New Delhi",
    stat1Number: "40+",
    stat1Label: "Years of Excellence",
    stat2Number: "5000+",
    stat2Label: "Alumni Worldwide",
    stat3Number: "11",
    stat3Label: "Programs Offered",
  })

  const handleSave = (newContent: { [key: string]: string }) => {
    setContent((prev) => ({ ...prev, ...newContent }))
    // Here you would typically save to a backend/database
    console.log("Saved content:", newContent)
  }

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          <div className="text-white space-y-8 animate-slide-in-left">
            <div className="space-y-4">
              <EditableWrapper
                id="hero-title"
                editableContent={{
                  title: content.title,
                }}
                onSave={handleSave}
              >
                <h1 className="text-4xl md:text-6xl font-bold leading-tight animate-fade-in">
                  {content.title.split(" ").slice(0, -1).join(" ")}
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400">
                    {content.title.split(" ").slice(-1)}
                  </span>
                </h1>
              </EditableWrapper>

              <EditableWrapper
                id="hero-subtitle"
                editableContent={{
                  subtitle: content.subtitle,
                }}
                onSave={handleSave}
              >
                <p className="text-xl md:text-2xl text-purple-100 animate-fade-in animation-delay-200">
                  {content.subtitle}
                </p>
              </EditableWrapper>

              <EditableWrapper
                id="hero-description"
                editableContent={{
                  description: content.description,
                }}
                onSave={handleSave}
              >
                <p className="text-lg text-purple-200 max-w-2xl animate-fade-in animation-delay-400">
                  {content.description}
                </p>
              </EditableWrapper>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in animation-delay-600">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                <Link href="/academics" className="flex items-center">
                  Explore Programs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-900 bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>

            <EditableWrapper
              id="hero-stats"
              editableContent={{
                stat1Number: content.stat1Number,
                stat1Label: content.stat1Label,
                stat2Number: content.stat2Number,
                stat2Label: content.stat2Label,
                stat3Number: content.stat3Number,
                stat3Label: content.stat3Label,
              }}
              onSave={handleSave}
            >
              <div className="grid grid-cols-3 gap-8 pt-8 animate-fade-in animation-delay-800">
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Award className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold">{content.stat1Number}</div>
                  <div className="text-sm text-purple-200">{content.stat1Label}</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <Users className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold">{content.stat2Number}</div>
                  <div className="text-sm text-purple-200">{content.stat2Label}</div>
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-2">
                    <BookOpen className="h-8 w-8 text-yellow-400" />
                  </div>
                  <div className="text-2xl font-bold">{content.stat3Number}</div>
                  <div className="text-sm text-purple-200">{content.stat3Label}</div>
                </div>
              </div>
            </EditableWrapper>
          </div>

          <div className="relative animate-slide-in-right">
            <div className="relative bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
              <div className="space-y-6">
                <EditableWrapper
                  id="hero-quicklinks-title"
                  editableContent={{
                    quickLinksTitle: "Quick Links",
                  }}
                  onSave={handleSave}
                >
                  <h3 className="text-2xl font-bold text-white mb-4">Quick Links</h3>
                </EditableWrapper>
                <div className="space-y-3">
                  {[
                    "Admissions 2025-26",
                    "Placement Records",
                    "Research & Innovation",
                    "Student Activities",
                    "Campus Facilities",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors cursor-pointer animate-fade-in"
                      style={{ animationDelay: `${1200 + index * 100}ms` }}
                    >
                      <ArrowRight className="h-4 w-4 text-yellow-400 mr-3" />
                      <span className="text-white">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
