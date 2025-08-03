"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Save, X, Upload, User } from "lucide-react"
import ImageUploadDialog from "./achievement/lmageUploadDialog"

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

interface FacultyFormDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onSave: (faculty: Faculty) => void
  editingFaculty?: Faculty | null
  title?: string
}

export default function FacultyFormDialog({
  isOpen,
  onOpenChange,
  onSave,
  editingFaculty,
  title = "Add New Faculty",
}: FacultyFormDialogProps) {
  const [isImageUploadOpen, setIsImageUploadOpen] = useState(false)
  const [formData, setFormData] = useState<Partial<Faculty>>(() => {
    if (editingFaculty) {
      return { ...editingFaculty }
    }
    return {
      name: "",
      designation: "",
      qualification: "",
      experience: "",
      specialization: [],
      email: "",
      phone: "",
      publications: "",
      projects: "",
      image: "",
      achievements: [],
    }
  })

  const handleInputChange = (field: keyof Faculty, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleArrayInputChange = (field: "specialization" | "achievements", value: string) => {
    const arrayValue = value
      .split(",")
      .map((item) => item.trim())
      .filter((item) => item)
    setFormData((prev) => ({ ...prev, [field]: arrayValue }))
  }

  const handleImageAdd = (images: string[]) => {
    if (images.length > 0) {
      setFormData((prev) => ({ ...prev, image: images[0] }))
    }
  }

  const removeImage = () => {
    setFormData((prev) => ({ ...prev, image: "" }))
  }

  const handleSave = () => {
    if (formData.name && formData.designation && formData.email) {
      const faculty: Faculty = {
        id: editingFaculty?.id || Date.now().toString(),
        name: formData.name || "",
        designation: formData.designation || "",
        qualification: formData.qualification || "",
        experience: formData.experience || "",
        specialization: formData.specialization || [],
        email: formData.email || "",
        phone: formData.phone || "",
        publications: formData.publications || "",
        projects: formData.projects || "",
        image: formData.image || "",
        achievements: formData.achievements || [],
      }
      onSave(faculty)
      resetForm()
    }
  }

  const resetForm = () => {
    setFormData({
      name: "",
      designation: "",
      qualification: "",
      experience: "",
      specialization: [],
      email: "",
      phone: "",
      publications: "",
      projects: "",
      image: "",
      achievements: [],
    })
    onOpenChange(false)
  }

  const handleClose = () => {
    resetForm()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-blue-900 text-2xl flex items-center">
            <User className="mr-2 h-6 w-6" />
            {editingFaculty ? "Edit Faculty Member" : title}
          </DialogTitle>
        </DialogHeader>

        <div className="grid lg:grid-cols-3 gap-6 py-4">
          {/* Left Column - Profile Image */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Profile Image</label>
              <div className="space-y-3">
                {formData.image ? (
                  <div className="relative group">
                    <div className="w-full h-64 bg-blue-50 rounded-lg overflow-hidden border-2 border-blue-200">
                      <img
                        src={formData.image || "/placeholder.svg"}
                        alt="Faculty Profile"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <Button
                      size="sm"
                      variant="destructive"
                      onClick={removeImage}
                      className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                    <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                      <div className="text-gray-500 mb-1">Image URL:</div>
                      <div className="text-gray-700 break-all leading-relaxed max-h-16 overflow-y-auto">
                        {formData.image}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="w-full h-64 bg-blue-50 rounded-lg border-2 border-dashed border-blue-300 flex flex-col items-center justify-center">
                    <User className="h-16 w-16 text-blue-300 mb-3" />
                    <p className="text-blue-600 font-medium">No image uploaded</p>
                    <p className="text-blue-500 text-sm">Click below to add image</p>
                  </div>
                )}

                <Button
                  type="button"
                  onClick={() => setIsImageUploadOpen(true)}
                  className="w-full bg-blue-600 hover:bg-blue-700"
                >
                  <Upload className="mr-2 h-4 w-4" />
                  {formData.image ? "Change Image" : "Upload Image"}
                </Button>
              </div>
            </div>

            {/* Quick Info Preview */}
            {formData.name && (
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <h4 className="font-semibold text-blue-800 mb-2">Preview</h4>
                <div className="space-y-1 text-sm">
                  <div className="font-medium text-gray-800">{formData.name}</div>
                  <div className="text-blue-600">{formData.designation}</div>
                  <div className="text-gray-600">{formData.experience}</div>
                </div>
              </div>
            )}
          </div>

          {/* Middle Column - Basic Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <Input
                value={formData.name || ""}
                onChange={(e) => handleInputChange("name", e.target.value)}
                placeholder="Dr. John Smith"
                className="border-blue-200 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Designation *</label>
              <Input
                value={formData.designation || ""}
                onChange={(e) => handleInputChange("designation", e.target.value)}
                placeholder="Professor / Associate Professor / Assistant Professor"
                className="border-blue-200 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Qualification</label>
              <Textarea
                value={formData.qualification || ""}
                onChange={(e) => handleInputChange("qualification", e.target.value)}
                placeholder="Ph.D. in Computer Science, M.Tech CSE, B.Tech CSE"
                rows={3}
                className="border-blue-200 focus:border-blue-500 resize-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
              <Input
                value={formData.experience || ""}
                onChange={(e) => handleInputChange("experience", e.target.value)}
                placeholder="15+ years"
                className="border-blue-200 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
              <Input
                type="email"
                value={formData.email || ""}
                onChange={(e) => handleInputChange("email", e.target.value)}
                placeholder="john.smith@mgmcen.ac.in"
                className="border-blue-200 focus:border-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
              <Input
                type="tel"
                value={formData.phone || ""}
                onChange={(e) => handleInputChange("phone", e.target.value)}
                placeholder="+91-9876-543210"
                className="border-blue-200 focus:border-blue-500"
              />
            </div>
          </div>

          {/* Right Column - Professional Information */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Areas of Specialization</label>
              <Textarea
                value={formData.specialization?.join(", ") || ""}
                onChange={(e) => handleArrayInputChange("specialization", e.target.value)}
                placeholder="Artificial Intelligence, Machine Learning, Data Science (comma-separated)"
                rows={3}
                className="border-blue-200 focus:border-blue-500 resize-none"
              />
              {formData.specialization && formData.specialization.length > 0 && (
                <div className="mt-2 flex flex-wrap gap-1">
                  {formData.specialization.map((area, idx) => (
                    <Badge key={idx} variant="outline" className="border-blue-300 text-blue-700 text-xs">
                      {area}
                    </Badge>
                  ))}
                </div>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Publications</label>
              <Input
                value={formData.publications || ""}
                onChange={(e) => handleInputChange("publications", e.target.value)}
                placeholder="45+ Research Papers"
                className="border-blue-200 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Projects</label>
              <Input
                value={formData.projects || ""}
                onChange={(e) => handleInputChange("projects", e.target.value)}
                placeholder="12 Funded Projects"
                className="border-blue-200 focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Key Achievements</label>
              <Textarea
                value={formData.achievements?.join(", ") || ""}
                onChange={(e) => handleArrayInputChange("achievements", e.target.value)}
                placeholder="Best Teacher Award 2023, Research Excellence Award 2022 (comma-separated)"
                rows={4}
                className="border-blue-200 focus:border-blue-500 resize-none"
              />
              {formData.achievements && formData.achievements.length > 0 && (
                <div className="mt-2 space-y-1">
                  {formData.achievements.map((achievement, idx) => (
                    <div key={idx} className="text-xs text-gray-600 flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 mr-2 flex-shrink-0"></span>
                      {achievement}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end space-x-3 pt-4 border-t">
          <Button variant="outline" onClick={handleClose} className="border-blue-200 text-blue-700 bg-transparent">
            <X className="mr-2 h-4 w-4" />
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            disabled={!formData.name || !formData.designation || !formData.email}
            className="bg-blue-600 hover:bg-blue-700"
          >
            <Save className="mr-2 h-4 w-4" />
            {editingFaculty ? "Update Faculty" : "Add Faculty"}
          </Button>
        </div>

        {/* Image Upload Dialog */}
        <ImageUploadDialog
          isOpen={isImageUploadOpen}
          onClose={() => setIsImageUploadOpen(false)}
          onImagesAdd={handleImageAdd}
        />
      </DialogContent>
    </Dialog>
  )
}
