"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, User, BookOpen, Award, GraduationCap, Calendar, MapPin } from "lucide-react"
import Link from "next/link"
import EditableWrapper from "@/components/editable-wrapper"
import FadeInSection from "@/components/fade-in-section"

export default function CSEFacultyPage() {
  const [pageContent, setPageContent] = useState({
    title: "Computer Science & Engineering Faculty",
    subtitle:
      "Meet our distinguished faculty members who are committed to excellence in teaching, research, and innovation",
    backButtonText: "← Back to Department",
  })

  const [departmentStats, setDepartmentStats] = useState([
    { label: "Total Faculty", value: "8", icon: <User className="h-6 w-6" /> },
    { label: "Ph.D. Holders", value: "4", icon: <GraduationCap className="h-6 w-6" /> },
    { label: "Research Papers", value: "221+", icon: <BookOpen className="h-6 w-6" /> },
    { label: "Active Projects", value: "43", icon: <Award className="h-6 w-6" /> },
  ])

  const [facultyMembers, setFacultyMembers] = useState([
    {
      id: "faculty-1",
      name: "Dr. Rajesh Kumar",
      designation: "Head of Department & Professor",
      qualification: "Ph.D. in Computer Science, M.Tech CSE, B.Tech CSE",
      experience: "15+ years",
      specialization: ["Artificial Intelligence", "Machine Learning", "Data Science", "Deep Learning"],
      email: "rajesh.kumar@mgmcen.ac.in",
      phone: "+91-9876-543210",
      publications: "45+ Research Papers",
      projects: "12 Funded Projects",
      image: "/placeholder.svg?height=200&width=200&text=Dr.RK",
      achievements: ["Best Teacher Award 2023", "Research Excellence Award 2022", "IEEE Senior Member"],
    },
    {
      id: "faculty-2",
      name: "Dr. Priya Sharma",
      designation: "Professor",
      qualification: "Ph.D. in Software Engineering, M.Tech IT, B.Tech CSE",
      experience: "12+ years",
      specialization: ["Software Engineering", "Web Technologies", "Database Systems", "Cloud Computing"],
      email: "priya.sharma@mgmcen.ac.in",
      phone: "+91-9876-543211",
      publications: "38+ Research Papers",
      projects: "8 Industry Projects",
      image: "/placeholder.svg?height=200&width=200&text=Dr.PS",
      achievements: ["Outstanding Faculty Award 2023", "Google Cloud Certified", "ACM Professional Member"],
    },
    {
      id: "faculty-3",
      name: "Dr. Amit Patel",
      designation: "Associate Professor",
      qualification: "Ph.D. in Computer Networks, M.Tech CSE, B.Tech IT",
      experience: "10+ years",
      specialization: ["Computer Networks", "Cybersecurity", "IoT", "Wireless Communication"],
      email: "amit.patel@mgmcen.ac.in",
      phone: "+91-9876-543212",
      publications: "32+ Research Papers",
      projects: "6 Research Projects",
      image: "/placeholder.svg?height=200&width=200&text=Dr.AP",
      achievements: [
        "Young Researcher Award 2022",
        "CISCO Certified Network Professional",
        "Patent Holder - 2 Patents",
      ],
    },
    {
      id: "faculty-4",
      name: "Prof. Sunita Desai",
      designation: "Associate Professor",
      qualification: "M.Tech in Computer Science, B.Tech CSE",
      experience: "8+ years",
      specialization: ["Data Structures", "Algorithms", "Programming Languages", "Compiler Design"],
      email: "sunita.desai@mgmcen.ac.in",
      phone: "+91-9876-543213",
      publications: "25+ Research Papers",
      projects: "4 Academic Projects",
      image: "/placeholder.svg?height=200&width=200&text=Prof.SD",
      achievements: [
        "Excellence in Teaching Award 2023",
        "Microsoft Certified Trainer",
        "Best Project Guide Award 2022",
      ],
    },
    {
      id: "faculty-5",
      name: "Dr. Vikram Singh",
      designation: "Assistant Professor",
      qualification: "Ph.D. in Artificial Intelligence, M.Tech CSE, B.Tech IT",
      experience: "6+ years",
      specialization: ["Computer Vision", "Natural Language Processing", "Robotics", "Pattern Recognition"],
      email: "vikram.singh@mgmcen.ac.in",
      phone: "+91-9876-543214",
      publications: "28+ Research Papers",
      projects: "5 AI Projects",
      image: "/placeholder.svg?height=200&width=200&text=Dr.VS",
      achievements: ["Rising Star Award 2023", "NVIDIA Deep Learning Certified", "Best Paper Award - ICML 2022"],
    },
    {
      id: "faculty-6",
      name: "Prof. Kavita Joshi",
      designation: "Assistant Professor",
      qualification: "M.Tech in Information Technology, B.Tech CSE",
      experience: "5+ years",
      specialization: ["Mobile App Development", "Human-Computer Interaction", "UI/UX Design", "Frontend Technologies"],
      email: "kavita.joshi@mgmcen.ac.in",
      phone: "+91-9876-543215",
      publications: "18+ Research Papers",
      projects: "3 Industry Collaborations",
      image: "/placeholder.svg?height=200&width=200&text=Prof.KJ",
      achievements: [
        "Innovation in Teaching Award 2023",
        "Google Developer Expert",
        "App Development Competition Judge",
      ],
    },
    {
      id: "faculty-7",
      name: "Prof. Rahul Mehta",
      designation: "Assistant Professor",
      qualification: "M.Tech in Computer Science, B.Tech CSE",
      experience: "4+ years",
      specialization: ["Operating Systems", "Distributed Systems", "System Programming", "Performance Analysis"],
      email: "rahul.mehta@mgmcen.ac.in",
      phone: "+91-9876-543216",
      publications: "15+ Research Papers",
      projects: "2 System Projects",
      image: "/placeholder.svg?height=200&width=200&text=Prof.RM",
      achievements: ["Young Faculty Award 2023", "Red Hat Certified Engineer", "Linux Foundation Certified"],
    },
    {
      id: "faculty-8",
      name: "Prof. Neha Gupta",
      designation: "Assistant Professor",
      qualification: "M.Tech in Information Security, B.Tech IT",
      experience: "4+ years",
      specialization: ["Information Security", "Cryptography", "Blockchain", "Digital Forensics"],
      email: "neha.gupta@mgmcen.ac.in",
      phone: "+91-9876-543217",
      publications: "20+ Research Papers",
      projects: "3 Security Projects",
      image: "/placeholder.svg?height=200&width=200&text=Prof.NG",
      achievements: [
        "Cybersecurity Excellence Award 2023",
        "Certified Ethical Hacker (CEH)",
        "Blockchain Developer Certified",
      ],
    },
  ])

  const [additionalContent, setAdditionalContent] = useState({
    researchAreasTitle: "Research Areas",
    departmentHighlightsTitle: "Department Highlights",
  })

  const handlePageContentSave = (newContent: { [key: string]: string }) => {
    setPageContent((prev) => ({ ...prev, ...newContent }))
  }

  const handleFacultySave = (facultyId: string, newContent: { [key: string]: string }) => {
    setFacultyMembers((prev) =>
      prev.map((faculty) =>
        faculty.id === facultyId
          ? {
              ...faculty,
              ...newContent,
              specialization: newContent.specialization
                ? newContent.specialization.split(",").map((s) => s.trim())
                : faculty.specialization,
              achievements: newContent.achievements
                ? newContent.achievements.split(",").map((s) => s.trim())
                : faculty.achievements,
            }
          : faculty,
      ),
    )
  }

  const handleStatSave = (index: number, newContent: { [key: string]: string }) => {
    setDepartmentStats((prev) => prev.map((stat, i) => (i === index ? { ...stat, ...newContent } : stat)))
  }

  const researchAreas = [
    "Artificial Intelligence",
    "Machine Learning",
    "Data Science",
    "Computer Networks",
    "Cybersecurity",
    "Software Engineering",
    "Cloud Computing",
    "IoT Systems",
    "Computer Vision",
    "Natural Language Processing",
    "Blockchain Technology",
    "Mobile Computing",
  ]

  const departmentHighlights = [
    "100% Ph.D. qualified faculty in core areas",
    "Active industry collaborations and consultancy",
    "Regular publication in top-tier journals",
    "Mentoring student research projects",
    "Professional development and training programs",
    "International conference participation",
    "Patent filing and technology transfer",
    "Guest lectures by industry experts",
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header with Floating Animation */}
        <FadeInSection className="text-center mb-12">
          <EditableWrapper
            id="faculty-page-header"
            editableContent={{
              title: pageContent.title,
              subtitle: pageContent.subtitle,
            }}
            onSave={handlePageContentSave}
          >
            <div className="animate-float">
              <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 animate-gradient-text">
                {pageContent.title}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
                {pageContent.subtitle}
              </p>
            </div>
          </EditableWrapper>
          <div className="mt-6 animate-bounce-in animation-delay-400">
            <Button
              variant="outline"
              className="border-blue-300 text-blue-700 bg-transparent hover:scale-105 transition-transform duration-300"
            >
              <Link href="/academics/computer-science" className="flex items-center">
                {pageContent.backButtonText}
              </Link>
            </Button>
          </div>
        </FadeInSection>

        {/* Department Statistics with Stagger Animation */}
        <FadeInSection delay={0.2} className="mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            {departmentStats.map((stat, index) => (
              <EditableWrapper
                key={index}
                id={`stat-${index}`}
                editableContent={{
                  label: stat.label,
                  value: stat.value,
                }}
                onSave={(newContent) => handleStatSave(index, newContent)}
              >
                <Card className="border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 animate-scale-in group">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-3 text-blue-600 group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold text-blue-800 mb-1 animate-counter" data-target={stat.value}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              </EditableWrapper>
            ))}
          </div>
        </FadeInSection>

        {/* Faculty Grid with Staggered Animations */}
        <FadeInSection delay={0.4} className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {facultyMembers.map((faculty, index) => (
              <EditableWrapper
                key={faculty.id}
                id={faculty.id}
                editableContent={{
                  name: faculty.name,
                  designation: faculty.designation,
                  qualification: faculty.qualification,
                  experience: faculty.experience,
                  specialization: faculty.specialization.join(", "),
                  email: faculty.email,
                  phone: faculty.phone,
                  publications: faculty.publications,
                  projects: faculty.projects,
                  achievements: faculty.achievements.join(", "),
                }}
                onSave={(newContent) => handleFacultySave(faculty.id, newContent)}
              >
                <Card className="border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-105 animate-slide-in-stagger group">
                  <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                    <div className="flex items-start space-x-4 relative z-10">
                      <div className="relative">
                        <img
                          src={faculty.image || "/placeholder.svg"}
                          alt={faculty.name}
                          className="w-20 h-20 rounded-full border-4 border-white object-cover group-hover:scale-110 transition-transform duration-500 animate-profile-float"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                      </div>
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
              </EditableWrapper>
            ))}
          </div>
        </FadeInSection>

        {/* Additional Information with Parallax Effect */}
        <FadeInSection delay={0.8} className="mt-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <EditableWrapper
              id="research-areas-section"
              editableContent={{
                researchAreasTitle: additionalContent.researchAreasTitle,
              }}
              onSave={(newContent) => setAdditionalContent((prev) => ({ ...prev, ...newContent }))}
            >
              <Card className="border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 animate-slide-in-left">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
                  <CardTitle className="text-xl relative z-10">{additionalContent.researchAreasTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="grid grid-cols-2 gap-3">
                    {researchAreas.map((area, index) => (
                      <div
                        key={index}
                        className="flex items-center p-2 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all duration-300 hover:scale-105 animate-fade-in-up"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                        <span className="text-sm text-gray-700">{area}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </EditableWrapper>

            <EditableWrapper
              id="department-highlights-section"
              editableContent={{
                departmentHighlightsTitle: additionalContent.departmentHighlightsTitle,
              }}
              onSave={(newContent) => setAdditionalContent((prev) => ({ ...prev, ...newContent }))}
            >
              <Card className="border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-2 animate-slide-in-right">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-teal-600 opacity-0 hover:opacity-20 transition-opacity duration-500"></div>
                  <CardTitle className="text-xl relative z-10">{additionalContent.departmentHighlightsTitle}</CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {departmentHighlights.map((highlight, index) => (
                      <li
                        key={index}
                        className="flex items-start hover:bg-blue-50 p-2 rounded-lg transition-all duration-300 hover:translate-x-2 animate-slide-in-left"
                        style={{ animationDelay: `${index * 100}ms` }}
                      >
                        <Award className="w-4 h-4 text-blue-600 mt-0.5 mr-3 flex-shrink-0 animate-bounce-subtle" />
                        <span className="text-gray-700 text-sm">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </EditableWrapper>
          </div>
        </FadeInSection>
      </div>
    </div>
  )
}
