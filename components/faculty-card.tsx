"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { User, GraduationCap, Calendar, MapPin, Mail, Phone, BookOpen, Award, Edit3, Trash2 } from "lucide-react"
import { useEditMode } from "./edit-mode-provider"

interface Faculty {
  id: string
  name: string
  designation: string
  qualification: string
  experience: string
  specialization: string[]
  email: string
  phone: string
  publications: string
  projects: string
  image: string
  achievements: string[]
}

interface FacultyCardProps {
  faculty: Faculty
  index: number
  onEdit?: (faculty: Faculty) => void
  onDelete?: (id: string) => void
}

export default function FacultyCard({ faculty, index, onEdit, onDelete }: FacultyCardProps) {
  const { isEditMode } = useEditMode()

  return (
    <Card className="border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 animate-slide-in-stagger group">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
        <div className="flex items-start space-x-4 relative z-10">
          <div className="relative">
            <div className="w-20 h-20 rounded-full border border-white overflow-hidden bg-blue-100">
              {faculty.image ? (
                <img
                  src={faculty.image || "/placeholder.svg"}
                  alt={faculty.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 animate-profile-float"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <User className="h-10 w-10 text-blue-600" />
                </div>
              )}
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <CardTitle className="text-xl mb-1 group-hover:text-yellow-200 transition-colors duration-300">
                  {faculty.name}
                </CardTitle>
                <p className="text-blue-100 text-sm font-medium animate-fade-in-right animation-delay-200">
                  {faculty.designation}
                </p>
                <div className="flex items-center mt-2 text-blue-100 text-sm animate-fade-in-right animation-delay-400">
                  <Calendar className="w-4 h-4 mr-1" />
                  {faculty.experience}
                </div>
              </div>
              {isEditMode && (
                <div className="flex space-x-2">
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onEdit?.(faculty)}
                    className="text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
                  >
                    <Edit3 className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    onClick={() => onDelete?.(faculty.id)}
                    className="text-white hover:bg-red-500/20 transform hover:scale-110 transition-all duration-300"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50"></div>
        <div className="space-y-4 relative z-10">
          {/* Qualification */}
          <div className="animate-fade-in-up animation-delay-200">
            <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
              <GraduationCap className="w-4 h-4 mr-2 animate-bounce-subtle" />
              Qualification
            </h4>
            <p className="text-gray-700 text-sm">{faculty.qualification}</p>
          </div>

          {/* Specialization */}
          <div className="animate-fade-in-up animation-delay-400">
            <h4 className="font-semibold text-blue-800 mb-2">Areas of Specialization</h4>
            <div className="flex flex-wrap gap-2">
              {faculty.specialization.map((area, idx) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-100 transition-all duration-300 hover:scale-105 animate-badge-float"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  {area}
                </Badge>
              ))}
            </div>
          </div>

          {/* Research & Projects */}
          <div className="grid md:grid-cols-2 gap-4 animate-fade-in-up animation-delay-600">
            <div className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <BookOpen className="w-4 h-4 mr-2 text-blue-600 animate-pulse-subtle" />
              {faculty.publications}
            </div>
            <div className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-colors duration-300">
              <Award className="w-4 h-4 mr-2 text-blue-600 animate-pulse-subtle animation-delay-200" />
              {faculty.projects}
            </div>
          </div>

          {/* Achievements */}
          <div className="animate-fade-in-up animation-delay-800">
            <h4 className="font-semibold text-blue-800 mb-2">Key Achievements</h4>
            <ul className="space-y-1">
              {faculty.achievements.map((achievement, idx) => (
                <li
                  key={idx}
                  className="text-sm text-gray-700 flex items-start hover:text-blue-700 transition-colors duration-300 animate-slide-in-left"
                  style={{ animationDelay: `${800 + idx * 100}ms` }}
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0 animate-pulse"></span>
                  {achievement}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="border-t pt-4 animate-fade-in-up animation-delay-1000">
            <h4 className="font-semibold text-blue-800 mb-2">Contact Information</h4>
            <div className="space-y-2">
              <div className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2">
                <Mail className="w-4 h-4 mr-2 text-blue-600" />
                <a href={`mailto:${faculty.email}`} className="hover:underline">
                  {faculty.email}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2">
                <Phone className="w-4 h-4 mr-2 text-blue-600" />
                <a href={`tel:${faculty.phone}`} className="hover:underline">
                  {faculty.phone}
                </a>
              </div>
              <div className="flex items-center text-sm text-gray-600 hover:text-blue-600 transition-all duration-300 hover:translate-x-2">
                <MapPin className="w-4 h-4 mr-2 text-blue-600" />
                CSE Department, MGM College
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
