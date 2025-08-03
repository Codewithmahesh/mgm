"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { User, BookOpen, Award, GraduationCap, Plus } from "lucide-react"
import Link from "next/link"
import FadeInSection from "@/components/fade-in-section"
import { useEditMode } from "@/components/edit-mode-provider"
import FacultyCard from "@/components/faculty-card"
import FacultyFormDialog from "@/components/faculty-form-dialog"

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

export default function CSEFacultyPage() {
  const { isEditMode } = useEditMode()
  const [isAddFacultyOpen, setIsAddFacultyOpen] = useState(false)
  const [editingFaculty, setEditingFaculty] = useState<Faculty | null>(null)

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

  const [facultyMembers, setFacultyMembers] = useState<Faculty[]>([
    {
      id: "faculty-1",
      name: "Dr. Rajurkar A.M.",
      designation: "Head of Department & Professor",
      qualification: "Ph.D. in Computer Science, M.Tech CSE, B.Tech CSE",
      experience: "15+ years",
      specialization: ["Artificial Intelligence", "Machine Learning", "Image Processing & Computer Vision"],
      email: "rajurkar_am@mgmce.ac.in",
      phone: "+91-02462-224756",
      publications: "45+ Research Papers",
      projects: "12 Funded Projects",
      image: "/images/computer-department/hod-image.jpg",
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

  const handleAddFaculty = (faculty: Faculty) => {
    setFacultyMembers([faculty, ...facultyMembers])
    // Update stats
    setDepartmentStats((prev) =>
      prev.map((stat) => {
        if (stat.label === "Total Faculty") {
          return { ...stat, value: (facultyMembers.length + 1).toString() }
        }
        if (stat.label === "Ph.D. Holders" && faculty.qualification.includes("Ph.D.")) {
          const currentPhD = Number.parseInt(stat.value) || 0
          return { ...stat, value: (currentPhD + 1).toString() }
        }
        return stat
      }),
    )
  }

  const handleEditFaculty = (faculty: Faculty) => {
    setEditingFaculty(faculty)
    setIsAddFacultyOpen(true)
  }

  const handleUpdateFaculty = (updatedFaculty: Faculty) => {
    setFacultyMembers((prev) => prev.map((f) => (f.id === updatedFaculty.id ? updatedFaculty : f)))
    setEditingFaculty(null)
  }

  const handleDeleteFaculty = (id: string) => {
    const facultyToDelete = facultyMembers.find((f) => f.id === id)
    setFacultyMembers((prev) => prev.filter((f) => f.id !== id))

    // Update stats
    setDepartmentStats((prev) =>
      prev.map((stat) => {
        if (stat.label === "Total Faculty") {
          return { ...stat, value: (facultyMembers.length - 1).toString() }
        }
        if (stat.label === "Ph.D. Holders" && facultyToDelete?.qualification.includes("Ph.D.")) {
          const currentPhD = Number.parseInt(stat.value) || 0
          return { ...stat, value: Math.max(0, currentPhD - 1).toString() }
        }
        return stat
      }),
    )
  }

  const handleFacultyFormSave = (faculty: Faculty) => {
    if (editingFaculty) {
      handleUpdateFaculty(faculty)
    } else {
      handleAddFaculty(faculty)
    }
  }

  const handleFormClose = () => {
    setIsAddFacultyOpen(false)
    setEditingFaculty(null)
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
        {/* Header with Add Faculty Button */}
        <FadeInSection className="text-center mb-12">
          <div className="animate-float">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 animate-gradient-text">
              {pageContent.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-up animation-delay-200">
              {pageContent.subtitle}
            </p>
          </div>
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 animate-bounce-in animation-delay-400">
            <Button
              variant="outline"
              className="border-blue-300 text-blue-700 bg-transparent hover:scale-105 transition-transform duration-300"
            >
              <Link href="/academics/computer-science" className="flex items-center">
                {pageContent.backButtonText}
              </Link>
            </Button>
            {isEditMode && (
              <Button
                onClick={() => setIsAddFacultyOpen(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                <Plus className="mr-2 h-5 w-5" />
                Add Faculty Member
              </Button>
            )}
          </div>
        </FadeInSection>

        {/* Department Statistics */}
        <FadeInSection delay={0.2} className="mb-12">
          <div className="grid md:grid-cols-4 gap-6">
            {departmentStats.map((stat, index) => (
              <Card
                key={index}
                className="border-blue-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 animate-scale-in group"
              >
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
            ))}
          </div>
        </FadeInSection>

        {/* Faculty Grid */}
        <FadeInSection delay={0.4} className="mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            {facultyMembers.map((faculty, index) => (
              <FacultyCard
                key={faculty.id}
                faculty={faculty}
                index={index}
                onEdit={handleEditFaculty}
                onDelete={handleDeleteFaculty}
              />
            ))}
          </div>
        </FadeInSection>

        {/* Additional Information */}
        <FadeInSection delay={0.8} className="mt-12">
          <div className="grid lg:grid-cols-2 gap-8">
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
          </div>
        </FadeInSection>

        {/* Faculty Form Dialog */}
        <FacultyFormDialog
          isOpen={isAddFacultyOpen}
          onOpenChange={handleFormClose}
          onSave={handleFacultyFormSave}
          editingFaculty={editingFaculty}
          title={editingFaculty ? "Edit Faculty Member" : "Add New Faculty Member"}
        />
      </div>
    </div>
  )
}
