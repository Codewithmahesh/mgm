"use client"

import { useState } from "react"
import { useEditMode } from "@/components/edit-mode-provider"
import FadeInSection from "@/components/fade-in-section"
import { Achievement } from "@/types/Achievement"
import CategoryFilter from "@/components/achievement/CategoryFilter"
import ImageModal from "@/components/achievement/ImageModal"
import AddAchievementDialog from "@/components/achievement/AddAchievementDialog"
import PageHeader from "@/components/achievement/PageHeader"
import AchievementsGrid from "@/components/achievement/AchievementsGrid"

export default function AchievementsPage() {
  const { isEditMode } = useEditMode()

  const [achievements, setAchievements] = useState<Achievement[]>([
    {
      id: "1",
      title: "NAAC A+ Grade Accreditation",
      description:
        "MGM's College of Engineering has been awarded the prestigious NAAC A+ Grade accreditation, recognizing our commitment to quality education and institutional excellence. This achievement reflects our dedication to maintaining the highest standards in academic delivery, infrastructure, and student support services.",
      category: "Institutional",
      date: "2024-03-15",
      location: "NAAC, Bangalore",
      recipient: "MGM's College of Engineering",
      images: [
      "https://images.unsplash.com/photo-1562774053-701939374585?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D",
      "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29sbGVnZXxlbnwwfHwwfHx8MA%3D%3D"
    ],
      importance: "high",
      tags: ["Accreditation", "Quality", "Excellence", "NAAC"],
    },
    {
      id: "2",
      title: "NBA Accreditation for Engineering Programs",
      description:
        "All major engineering programs including Computer Science, Mechanical, Civil, and Electronics & Telecommunication have received NBA accreditation for the period 2024-2027. This recognition validates our curriculum quality, faculty expertise, and industry-aligned education approach.",
      category: "Academic",
      date: "2024-01-20",
      location: "NBA, New Delhi",
      recipient: "Engineering Departments",
      images: [
        "/placeholder.svg?height=400&width=600&text=NBA+Accreditation+Certificate",
        "/placeholder.svg?height=400&width=600&text=Department+Heads+Meeting",
        "/placeholder.svg?height=400&width=600&text=NBA+Evaluation+Process",
      ],
      importance: "high",
      tags: ["NBA", "Engineering", "Accreditation", "Quality"],
    },
    {
      id: "3",
      title: "Best Engineering College Award - Maharashtra",
      description:
        "Recognized as the Best Private Engineering College in Maharashtra for outstanding academic performance, exceptional placement records, state-of-the-art infrastructure development, and innovative teaching methodologies that prepare students for global challenges.",
      category: "Recognition",
      date: "2023-12-10",
      location: "Mumbai, Maharashtra",
      recipient: "MGM's College of Engineering",
      images: [
        "/placeholder.svg?height=400&width=600&text=Best+College+Trophy",
        "/placeholder.svg?height=400&width=600&text=Award+Ceremony+Stage",
        "/placeholder.svg?height=400&width=600&text=Principal+Receiving+Award",
      ],
      importance: "high",
      tags: ["Best College", "Maharashtra", "Excellence", "Recognition"],
    },
    {
      id: "4",
      title: "Research Excellence Award 2023",
      description:
        "Our faculty members published over 200 research papers in international journals and conferences, earning the Research Excellence Award from the Maharashtra State Government. This achievement highlights our commitment to advancing knowledge and innovation in engineering fields.",
      category: "Research",
      date: "2023-11-05",
      location: "Pune, Maharashtra",
      recipient: "Research Faculty Team",
      images: [
        "/placeholder.svg?height=400&width=600&text=Research+Excellence+Award",
        "/placeholder.svg?height=400&width=600&text=Faculty+Research+Team",
      ],
      importance: "high",
      tags: ["Research", "Publications", "Faculty", "Innovation"],
    },
    {
      id: "5",
      title: "100% Placement Achievement - CSE Department",
      description:
        "Achieved remarkable 100% placement for the Computer Science and Engineering batch of 2023, with the highest package of ₹45 LPA from Google and an impressive average package of ₹8.5 LPA. This success demonstrates our industry-aligned curriculum and strong corporate partnerships.",
      category: "Placement",
      date: "2023-09-30",
      location: "MGM Campus, Nanded",
      recipient: "CSE Department & Students",
      images: [
        "/placeholder.svg?height=400&width=600&text=100%25+Placement+Banner",
        "/placeholder.svg?height=400&width=600&text=Top+Recruiters+Logos",
        "/placeholder.svg?height=400&width=600&text=Placement+Statistics+Chart",
      ],
      importance: "high",
      tags: ["Placement", "100%", "CSE", "Career"],
    },
    {
      id: "6",
      title: "Smart India Hackathon 2023 Winners",
      description:
        "Our brilliant student team 'TechInnovators' from the Computer Science department emerged victorious in the Smart India Hackathon 2023 with their groundbreaking IoT-based smart city solution. The project addresses urban challenges through innovative technology integration.",
      category: "Student Achievement",
      date: "2023-08-15",
      location: "IIT Bombay, Mumbai",
      recipient: "Student Team - TechInnovators",
      images: [
        "/placeholder.svg?height=400&width=600&text=Hackathon+Winners+Trophy",
        "/placeholder.svg?height=400&width=600&text=Project+Demonstration",
        "/placeholder.svg?height=400&width=600&text=Team+with+Judges",
      ],
      importance: "medium",
      tags: ["Hackathon", "Innovation", "Students", "IoT"],
    },
    {
      id: "7",
      title: "Green Campus Certification",
      description:
        "Awarded the prestigious Green Campus Certification for implementing comprehensive sustainable practices, renewable energy systems, waste management programs, and environmental conservation initiatives that serve as a model for other institutions.",
      category: "Environmental",
      date: "2023-06-20",
      location: "MGM Campus, Nanded",
      recipient: "MGM's College of Engineering",
      images: [
        "/placeholder.svg?height=400&width=600&text=Green+Campus+Certificate",
        "/placeholder.svg?height=400&width=600&text=Solar+Panel+Installation",
        "/placeholder.svg?height=400&width=600&text=Green+Campus+Initiatives",
      ],
      importance: "medium",
      tags: ["Green Campus", "Sustainability", "Environment", "Innovation"],
    },
    {
      id: "8",
      title: "Industry Partnership Excellence Award",
      description:
        "Recognized for establishing strategic partnerships with 50+ leading companies including TCS, Infosys, Microsoft, Google, and Amazon for internships, placements, collaborative research, and knowledge exchange programs that bridge academia and industry.",
      category: "Industry",
      date: "2023-05-10",
      location: "Various Corporate Offices",
      recipient: "Placement & Industry Relations Cell",
      images: [
        "/placeholder.svg?height=400&width=600&text=Industry+Partnership+Award",
        "/placeholder.svg?height=400&width=600&text=MOU+Signing+Ceremony",
        "/placeholder.svg?height=400&width=600&text=Corporate+Partners+Meet",
      ],
      importance: "medium",
      tags: ["Industry", "Partnership", "Collaboration", "Corporate"],
    },
  ])

  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [editingAchievement, setEditingAchievement] = useState<Achievement | null>(null)
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [initialImageIndex, setInitialImageIndex] = useState(0)

  const handleAddAchievement = (achievementData: Partial<Achievement>) => {
    if (achievementData.title && achievementData.description) {
      const achievement: Achievement = {
        id: Date.now().toString(),
        title: achievementData.title,
        description: achievementData.description,
        category: achievementData.category || "General",
        date: achievementData.date || new Date().toISOString().split("T")[0],
        location: achievementData.location || "",
        recipient: achievementData.recipient || "",
        images: achievementData.images || [],
        importance: achievementData.importance || "medium",
        tags: achievementData.tags || [],
      }

      setAchievements([achievement, ...achievements])
    }
  }

  const handleEditAchievement = (achievement: Achievement) => {
    setEditingAchievement(achievement)
    setIsAddDialogOpen(true)
  }

  const handleUpdateAchievement = (achievementData: Partial<Achievement>) => {
    if (editingAchievement && achievementData.title && achievementData.description) {
      const updatedAchievement: Achievement = {
        ...editingAchievement,
        ...(achievementData as Achievement),
      }

      setAchievements(achievements.map((a) => (a.id === editingAchievement.id ? updatedAchievement : a)))
      setEditingAchievement(null)
    }
  }

  const handleDeleteAchievement = (id: string) => {
    setAchievements(achievements.filter((a) => a.id !== id))
  }

  const handleDialogClose = () => {
    setIsAddDialogOpen(false)
    setEditingAchievement(null)
  }

  const openImageModal = (images: string[], startIndex = 0) => {
    setSelectedImages(images)
    setInitialImageIndex(startIndex)
    setIsImageModalOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-purple-25 to-white py-12 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <FadeInSection>
          <PageHeader>
            {isEditMode && (
              <AddAchievementDialog
                isOpen={isAddDialogOpen}
                onOpenChange={setIsAddDialogOpen}
                onAdd={handleAddAchievement}
                editingAchievement={editingAchievement}
                onEdit={handleUpdateAchievement}
              />
            )}
          </PageHeader>
        </FadeInSection>

        {/* Category Filter */}
        <FadeInSection delay={0.2}>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </FadeInSection>

        {/* Achievements Grid */}
        <AchievementsGrid
          achievements={achievements}
          selectedCategory={selectedCategory}
          onEdit={handleEditAchievement}
          onDelete={handleDeleteAchievement}
          onImageClick={openImageModal}
          isEditMode={isEditMode}
        />

        {/* Image Modal */}
        <ImageModal
          isOpen={isImageModalOpen}
          onClose={() => setIsImageModalOpen(false)}
          images={selectedImages}
          initialIndex={initialImageIndex}
        />
      </div>
    </div>
  )
}