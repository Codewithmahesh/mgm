"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import {
  Award,
  Trophy,
  Medal,
  Star,
  Calendar,
  MapPin,
  Users,
  Plus,
  Edit3,
  Trash2,
  ChevronLeft,
  ChevronRight,
  X,
  Upload,
  ImageIcon,
  FolderOpen,
  Check,
} from "lucide-react"
import FadeInSection from "@/components/fade-in-section"
import { useEditMode } from "@/components/edit-mode-provider"

interface Achievement {
  id: string
  title: string
  description: string
  category: string
  date: string
  location: string
  recipient: string
  images: string[]
  importance: "high" | "medium" | "low"
  tags: string[]
}

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
        "/placeholder.svg?height=400&width=600&text=NAAC+A%2B+Certificate",
        "/placeholder.svg?height=400&width=600&text=NAAC+Assessment+Team",
        "/placeholder.svg?height=400&width=600&text=Award+Ceremony+Moment",
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
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({})
  const [selectedImages, setSelectedImages] = useState<string[]>([])
  const [isImageModalOpen, setIsImageModalOpen] = useState(false)
  const [isImageUploadDialogOpen, setIsImageUploadDialogOpen] = useState(false)
  const [urlInput, setUrlInput] = useState("")
  const [urlsToAdd, setUrlsToAdd] = useState<string[]>([])

  const [newAchievement, setNewAchievement] = useState<Partial<Achievement>>({
    title: "",
    description: "",
    category: "",
    date: "",
    location: "",
    recipient: "",
    images: [],
    importance: "medium",
    tags: [],
  })

  const categories = [
    "all",
    "Institutional",
    "Academic",
    "Research",
    "Placement",
    "Student Achievement",
    "Environmental",
    "Industry",
    "Recognition",
  ]

  const filteredAchievements =
    selectedCategory === "all"
      ? achievements
      : achievements.filter((achievement) => achievement.category === selectedCategory)

  const handleAddAchievement = () => {
    if (newAchievement.title && newAchievement.description) {
      const achievement: Achievement = {
        id: Date.now().toString(),
        title: newAchievement.title || "",
        description: newAchievement.description || "",
        category: newAchievement.category || "General",
        date: newAchievement.date || new Date().toISOString().split("T")[0],
        location: newAchievement.location || "",
        recipient: newAchievement.recipient || "",
        images: newAchievement.images || [],
        importance: newAchievement.importance || "medium",
        tags: newAchievement.tags || [],
      }

      setAchievements([achievement, ...achievements])
      resetForm()
    }
  }

  const handleEditAchievement = (achievement: Achievement) => {
    setEditingAchievement(achievement)
    setNewAchievement({
      ...achievement,
      tags: [...achievement.tags],
      images: [...achievement.images],
    })
    setIsAddDialogOpen(true)
  }

  const handleUpdateAchievement = () => {
    if (editingAchievement && newAchievement.title && newAchievement.description) {
      const updatedAchievement: Achievement = {
        ...editingAchievement,
        ...(newAchievement as Achievement),
      }

      setAchievements(achievements.map((a) => (a.id === editingAchievement.id ? updatedAchievement : a)))
      resetForm()
    }
  }

  const handleDeleteAchievement = (id: string) => {
    setAchievements(achievements.filter((a) => a.id !== id))
  }

  const resetForm = () => {
    setEditingAchievement(null)
    setNewAchievement({
      title: "",
      description: "",
      category: "",
      date: "",
      location: "",
      recipient: "",
      images: [],
      importance: "medium",
      tags: [],
    })
    setIsAddDialogOpen(false)
    setUrlInput("")
    setUrlsToAdd([])
  }

  const addUrlToList = () => {
    if (urlInput.trim()) {
      setUrlsToAdd([...urlsToAdd, urlInput.trim()])
      setUrlInput("")
    }
  }

  const removeUrlFromList = (index: number) => {
    setUrlsToAdd(urlsToAdd.filter((_, i) => i !== index))
  }

  const addUrlsToAchievement = () => {
    if (urlsToAdd.length > 0 && newAchievement.images) {
      setNewAchievement({
        ...newAchievement,
        images: [...newAchievement.images, ...urlsToAdd],
      })
      setUrlsToAdd([])
    }
    setIsImageUploadDialogOpen(false)
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const filePromises = Array.from(files).map((file) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onload = (e) => {
            resolve(e.target?.result as string)
          }
          reader.readAsDataURL(file)
        })
      })

      Promise.all(filePromises).then((results) => {
        if (newAchievement.images) {
          setNewAchievement({
            ...newAchievement,
            images: [...newAchievement.images, ...results],
          })
        }
      })
    }
    setIsImageUploadDialogOpen(false)
    // Reset the input value so the same files can be selected again
    event.target.value = ""
  }

  const removeImageFromAchievement = (index: number) => {
    if (newAchievement.images) {
      setNewAchievement({
        ...newAchievement,
        images: newAchievement.images.filter((_, i) => i !== index),
      })
    }
  }

  const nextImage = (achievementId: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [achievementId]: ((prev[achievementId] || 0) + 1) % totalImages,
    }))
  }

  const prevImage = (achievementId: string, totalImages: number) => {
    setCurrentImageIndex((prev) => ({
      ...prev,
      [achievementId]: ((prev[achievementId] || 0) - 1 + totalImages) % totalImages,
    }))
  }

  const openImageModal = (images: string[], startIndex = 0) => {
    setSelectedImages(images)
    setCurrentImageIndex({ modal: startIndex })
    setIsImageModalOpen(true)
  }

  const getImportanceColor = (importance: string) => {
    switch (importance) {
      case "high":
        return "bg-purple-100 text-purple-800 border-purple-300"
      case "medium":
        return "bg-purple-50 text-purple-700 border-purple-200"
      case "low":
        return "bg-purple-25 text-purple-600 border-purple-100"
      default:
        return "bg-purple-50 text-purple-700 border-purple-200"
    }
  }

  const getImportanceIcon = (importance: string) => {
    switch (importance) {
      case "high":
        return <Trophy className="h-5 w-5 text-purple-600" />
      case "medium":
        return <Medal className="h-5 w-5 text-purple-600" />
      case "low":
        return <Star className="h-5 w-5 text-purple-600" />
      default:
        return <Award className="h-5 w-5 text-purple-600" />
    }
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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 bg-clip-text text-transparent mb-6 animate-gradient-text">
              Our Achievements
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
              Celebrating excellence, innovation, and success across all dimensions of our institution. Each achievement
              represents our commitment to quality education and continuous improvement.
            </p>

            {/* Add Achievement Button - Only visible in edit mode */}
            {isEditMode && (
              <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
                <DialogTrigger asChild>
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                    <Plus className="mr-2 h-5 w-5" />
                    Add Achievement
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle className="text-purple-900 text-2xl">
                      {editingAchievement ? "Edit Achievement" : "Add New Achievement"}
                    </DialogTitle>
                  </DialogHeader>
                  <div className="grid lg:grid-cols-2 gap-6 py-4">
                    {/* Left Column - Form Fields */}
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
                        <Input
                          value={newAchievement.title || ""}
                          onChange={(e) => setNewAchievement({ ...newAchievement, title: e.target.value })}
                          placeholder="Achievement title"
                          className="border-purple-200 focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
                        <Textarea
                          value={newAchievement.description || ""}
                          onChange={(e) => setNewAchievement({ ...newAchievement, description: e.target.value })}
                          placeholder="Detailed description of the achievement"
                          rows={4}
                          className="border-purple-200 focus:border-purple-500"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                          <Select
                            value={newAchievement.category || ""}
                            onValueChange={(value) => setNewAchievement({ ...newAchievement, category: value })}
                          >
                            <SelectTrigger className="border-purple-200 focus:border-purple-500">
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              {categories
                                .filter((cat) => cat !== "all")
                                .map((category) => (
                                  <SelectItem key={category} value={category}>
                                    {category}
                                  </SelectItem>
                                ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Importance</label>
                          <Select
                            value={newAchievement.importance || "medium"}
                            onValueChange={(value: "high" | "medium" | "low") =>
                              setNewAchievement({ ...newAchievement, importance: value })
                            }
                          >
                            <SelectTrigger className="border-purple-200 focus:border-purple-500">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="low">Low</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Date</label>
                          <Input
                            type="date"
                            value={newAchievement.date || ""}
                            onChange={(e) => setNewAchievement({ ...newAchievement, date: e.target.value })}
                            className="border-purple-200 focus:border-purple-500"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                          <Input
                            value={newAchievement.location || ""}
                            onChange={(e) => setNewAchievement({ ...newAchievement, location: e.target.value })}
                            placeholder="Location"
                            className="border-purple-200 focus:border-purple-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Recipient</label>
                        <Input
                          value={newAchievement.recipient || ""}
                          onChange={(e) => setNewAchievement({ ...newAchievement, recipient: e.target.value })}
                          placeholder="Who received this achievement"
                          className="border-purple-200 focus:border-purple-500"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
                        <Input
                          value={newAchievement.tags?.join(", ") || ""}
                          onChange={(e) =>
                            setNewAchievement({
                              ...newAchievement,
                              tags: e.target.value
                                .split(",")
                                .map((tag) => tag.trim())
                                .filter((tag) => tag),
                            })
                          }
                          placeholder="excellence, innovation, award"
                          className="border-purple-200 focus:border-purple-500"
                        />
                      </div>
                    </div>

                    {/* Right Column - Image Management */}
                    <div className="space-y-4">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="block text-sm font-medium text-gray-700">Images</label>
                          <Dialog open={isImageUploadDialogOpen} onOpenChange={setIsImageUploadDialogOpen}>
                            <DialogTrigger asChild>
                              <Button type="button" size="sm" className="bg-purple-600 hover:bg-purple-700">
                                <Upload className="mr-1 h-4 w-4" />
                                Add Images
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
                              <DialogHeader>
                                <DialogTitle className="text-purple-900">Add Images</DialogTitle>
                              </DialogHeader>
                              <div className="space-y-6 py-4">
                                <p className="text-sm text-gray-600">Choose how you want to add images:</p>

                                {/* Upload from Device */}
                                <div className="space-y-3">
                                  <label className="block text-sm font-medium text-gray-700">Upload from Device</label>
                                  <div className="flex items-center space-x-2">
                                    <Input
                                      type="file"
                                      accept="image/*"
                                      multiple
                                      onChange={handleFileUpload}
                                      className="hidden"
                                      id="file-upload"
                                    />
                                    <label htmlFor="file-upload" className="flex-1 cursor-pointer">
                                      <div className="flex items-center justify-center px-6 py-4 border-2 border-dashed border-purple-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
                                        <FolderOpen className="h-6 w-6 text-purple-600 mr-3" />
                                        <div className="text-center">
                                          <span className="text-sm font-medium text-purple-700">
                                            Choose Multiple Files
                                          </span>
                                          <p className="text-xs text-gray-500 mt-1">Select multiple images at once</p>
                                        </div>
                                      </div>
                                    </label>
                                  </div>
                                  <p className="text-xs text-gray-500">
                                    Supports: JPG, PNG, GIF, WebP (Max 10MB each) • Hold Ctrl/Cmd to select multiple
                                    files
                                  </p>
                                </div>

                                <div className="flex items-center">
                                  <div className="flex-1 border-t border-gray-200"></div>
                                  <span className="px-3 text-sm text-gray-500">OR</span>
                                  <div className="flex-1 border-t border-gray-200"></div>
                                </div>

                                {/* Add from URLs */}
                                <div className="space-y-3">
                                  <label className="block text-sm font-medium text-gray-700">Add from URLs</label>
                                  <div className="space-y-3">
                                    <div className="flex space-x-2">
                                      <Input
                                        value={urlInput}
                                        onChange={(e) => setUrlInput(e.target.value)}
                                        placeholder="Enter image URL"
                                        className="flex-1 border-purple-200 focus:border-purple-500"
                                        onKeyPress={(e) => {
                                          if (e.key === "Enter") {
                                            e.preventDefault()
                                            addUrlToList()
                                          }
                                        }}
                                      />
                                      <Button
                                        type="button"
                                        onClick={addUrlToList}
                                        disabled={!urlInput.trim()}
                                        className="bg-purple-600 hover:bg-purple-700"
                                      >
                                        <Plus className="h-4 w-4" />
                                      </Button>
                                    </div>

                                    {/* URLs to be added */}
                                    {urlsToAdd.length > 0 && (
                                      <div className="space-y-2 max-h-32 overflow-y-auto">
                                        <p className="text-sm font-medium text-gray-700">
                                          URLs to add ({urlsToAdd.length}):
                                        </p>
                                        {urlsToAdd.map((url, index) => (
                                          <div
                                            key={index}
                                            className="flex items-center justify-between p-2 bg-purple-50 rounded-lg"
                                          >
                                            <span className="text-sm text-gray-700 truncate flex-1 mr-2">{url}</span>
                                            <Button
                                              type="button"
                                              size="sm"
                                              variant="ghost"
                                              onClick={() => removeUrlFromList(index)}
                                              className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                                            >
                                              <X className="h-3 w-3" />
                                            </Button>
                                          </div>
                                        ))}
                                      </div>
                                    )}

                                    <p className="text-xs text-gray-500">
                                      Add multiple URLs one by one, then click "Add All URLs" to add them all at once
                                    </p>
                                  </div>
                                </div>

                                {/* Action Buttons */}
                                <div className="flex justify-end space-x-2 pt-4 border-t">
                                  <Button
                                    variant="outline"
                                    onClick={() => {
                                      setIsImageUploadDialogOpen(false)
                                      setUrlInput("")
                                      setUrlsToAdd([])
                                    }}
                                    className="border-purple-200 text-purple-700 bg-transparent"
                                  >
                                    Cancel
                                  </Button>
                                  {urlsToAdd.length > 0 && (
                                    <Button
                                      onClick={addUrlsToAchievement}
                                      className="bg-purple-600 hover:bg-purple-700"
                                    >
                                      <Check className="mr-1 h-4 w-4" />
                                      Add All URLs ({urlsToAdd.length})
                                    </Button>
                                  )}
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </div>

                        <div className="border-2 border-dashed border-purple-200 rounded-lg p-4 min-h-[300px]">
                          {newAchievement.images && newAchievement.images.length > 0 ? (
                            <div className="grid grid-cols-2 gap-4">
                              {newAchievement.images.map((image, index) => (
                                <div key={index} className="relative group">
                                  <img
                                    src={image || "/placeholder.svg"}
                                    alt={`Achievement ${index + 1}`}
                                    className="w-full h-32 object-cover rounded-lg border border-purple-200 hover:scale-105 transition-transform duration-300"
                                  />
                                  <Button
                                    size="sm"
                                    variant="destructive"
                                    className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                                    onClick={() => removeImageFromAchievement(index)}
                                  >
                                    <X className="h-3 w-3" />
                                  </Button>
                                  <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {index + 1}
                                  </div>
                                </div>
                              ))}
                            </div>
                          ) : (
                            <div className="flex flex-col items-center justify-center h-full text-gray-400">
                              <ImageIcon className="h-16 w-16 mb-3" />
                              <p className="text-lg font-medium">No images added yet</p>
                              <p className="text-sm">Click "Add Images" to upload multiple images at once</p>
                            </div>
                          )}
                        </div>

                        {newAchievement.images && newAchievement.images.length > 0 && (
                          <p className="text-sm text-gray-500 text-center">
                            {newAchievement.images.length} image{newAchievement.images.length !== 1 ? "s" : ""} added
                          </p>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end space-x-2 pt-4 border-t">
                    <Button
                      variant="outline"
                      onClick={resetForm}
                      className="border-purple-200 text-purple-700 bg-transparent"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={editingAchievement ? handleUpdateAchievement : handleAddAchievement}
                      className="bg-purple-600 hover:bg-purple-700"
                    >
                      {editingAchievement ? "Update" : "Add"} Achievement
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </FadeInSection>

        {/* Category Filter */}
        <FadeInSection delay={0.2}>
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`transition-all duration-300 transform hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-purple-600 hover:bg-purple-700 text-white shadow-lg"
                    : "border-purple-200 text-purple-700 hover:bg-purple-50 hover:border-purple-300"
                }`}
              >
                {category === "all" ? "All Categories" : category}
              </Button>
            ))}
          </div>
        </FadeInSection>

        {/* Achievements Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredAchievements.map((achievement, index) => (
            <FadeInSection key={achievement.id} delay={0.1 * (index % 4)}>
              <Card className="border-purple-200 shadow-xl hover:shadow-2xl transition-all duration-700 transform hover:-translate-y-3 hover:scale-[1.02] bg-white/90 backdrop-blur-sm group overflow-hidden">
                <CardHeader className="bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-transparent animate-pulse"></div>
                  <div className="flex justify-between items-start relative z-10">
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-white/20 rounded-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                          {getImportanceIcon(achievement.importance)}
                        </div>
                        <Badge className={`${getImportanceColor(achievement.importance)} animate-pulse-subtle`}>
                          {achievement.importance.toUpperCase()}
                        </Badge>
                      </div>
                      <CardTitle className="text-xl mb-3 group-hover:text-purple-100 transition-colors duration-300 leading-tight">
                        {achievement.title}
                      </CardTitle>
                      <div className="flex items-center text-purple-100 text-sm space-x-4">
                        <div className="flex items-center hover:text-white transition-colors duration-300">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(achievement.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center hover:text-white transition-colors duration-300">
                          <MapPin className="w-4 h-4 mr-1" />
                          {achievement.location}
                        </div>
                      </div>
                    </div>
                    {isEditMode && (
                      <div className="flex space-x-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleEditAchievement(achievement)}
                          className="text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
                        >
                          <Edit3 className="h-4 w-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => handleDeleteAchievement(achievement.id)}
                          className="text-white hover:bg-red-500/20 transform hover:scale-110 transition-all duration-300"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="p-6 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-100 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-50"></div>

                  {/* Images Slider */}
                  {achievement.images.length > 0 && (
                    <div className="relative mb-6 group/slider">
                      <div className="relative h-56 rounded-xl overflow-hidden bg-purple-50 shadow-inner">
                        <img
                          src={achievement.images[currentImageIndex[achievement.id] || 0]}
                          alt={achievement.title}
                          className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-500"
                          onClick={() => openImageModal(achievement.images, currentImageIndex[achievement.id] || 0)}
                        />

                        {achievement.images.length > 1 && (
                          <>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 backdrop-blur-sm"
                              onClick={() => prevImage(achievement.id, achievement.images.length)}
                            >
                              <ChevronLeft className="h-5 w-5" />
                            </Button>
                            <Button
                              size="sm"
                              variant="ghost"
                              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 backdrop-blur-sm"
                              onClick={() => nextImage(achievement.id, achievement.images.length)}
                            >
                              <ChevronRight className="h-5 w-5" />
                            </Button>

                            {/* Image indicators */}
                            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
                              {achievement.images.map((_, idx) => (
                                <div
                                  key={idx}
                                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                                    idx === (currentImageIndex[achievement.id] || 0)
                                      ? "bg-white scale-125"
                                      : "bg-white/50 hover:bg-white/75"
                                  }`}
                                  onClick={() => setCurrentImageIndex((prev) => ({ ...prev, [achievement.id]: idx }))}
                                />
                              ))}
                            </div>

                            {/* Image counter */}
                            <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
                              {(currentImageIndex[achievement.id] || 0) + 1} / {achievement.images.length}
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Content */}
                  <div className="space-y-4 relative z-10">
                    <p className="text-gray-700 leading-relaxed text-justify">{achievement.description}</p>

                    <div className="flex items-center text-sm text-gray-600 bg-purple-50 p-3 rounded-lg">
                      <Users className="w-4 h-4 mr-2 text-purple-600" />
                      <span className="font-medium">Recipient:</span>
                      <span className="ml-1 text-purple-800 font-medium">{achievement.recipient}</span>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                      <Badge
                        variant="outline"
                        className="border-purple-300 text-purple-700 bg-purple-50 hover:bg-purple-100 transition-colors duration-300"
                      >
                        {achievement.category}
                      </Badge>
                      {achievement.tags.map((tag, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-all duration-300 transform hover:scale-105"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeInSection>
          ))}
        </div>

        {/* Image Modal */}
        <Dialog open={isImageModalOpen} onOpenChange={setIsImageModalOpen}>
          <DialogContent className="max-w-6xl max-h-[95vh] p-0 bg-black/90">
            <div className="relative">
              <Button
                variant="ghost"
                size="sm"
                className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
                onClick={() => setIsImageModalOpen(false)}
              >
                <X className="h-5 w-5" />
              </Button>

              {selectedImages.length > 0 && (
                <div className="relative">
                  <img
                    src={selectedImages[currentImageIndex.modal || 0]}
                    alt="Achievement"
                    className="w-full h-auto max-h-[90vh] object-contain"
                  />

                  {selectedImages.length > 1 && (
                    <>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
                        onClick={() =>
                          setCurrentImageIndex((prev) => ({
                            ...prev,
                            modal: ((prev.modal || 0) - 1 + selectedImages.length) % selectedImages.length,
                          }))
                        }
                      >
                        <ChevronLeft className="h-6 w-6" />
                      </Button>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
                        onClick={() =>
                          setCurrentImageIndex((prev) => ({
                            ...prev,
                            modal: ((prev.modal || 0) + 1) % selectedImages.length,
                          }))
                        }
                      >
                        <ChevronRight className="h-6 w-6" />
                      </Button>

                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                        {selectedImages.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                              idx === (currentImageIndex.modal || 0) ? "bg-white" : "bg-white/50"
                            }`}
                            onClick={() => setCurrentImageIndex((prev) => ({ ...prev, modal: idx }))}
                          />
                        ))}
                      </div>

                      {/* Image counter in modal */}
                      <div className="absolute top-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                        {(currentImageIndex.modal || 0) + 1} of {selectedImages.length}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          </DialogContent>
        </Dialog>

        {/* Empty State */}
        {filteredAchievements.length === 0 && (
          <FadeInSection delay={0.4}>
            <div className="text-center py-12">
              <Award className="h-16 w-16 text-purple-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No achievements found</h3>
              <p className="text-gray-500">
                {selectedCategory === "all"
                  ? "Start by adding your first achievement!"
                  : `No achievements found in the ${selectedCategory} category.`}
              </p>
            </div>
          </FadeInSection>
        )}
      </div>
    </div>
  )
}
