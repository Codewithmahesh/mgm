import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, ImageIcon, X } from "lucide-react"
import ImageUploadDialog from "./lmageUploadDialog"
import { Achievement, CATEGORIES } from "@/types/Achievement"

interface AchievementFormProps {
  achievement?: Achievement | null
  onSubmit: (achievement: Partial<Achievement>) => void
  onCancel: () => void
  isEditing?: boolean
}

export default function AchievementForm({ achievement, onSubmit, onCancel, isEditing = false }: AchievementFormProps) {
  const [formData, setFormData] = useState<Partial<Achievement>>({
    title: achievement?.title || "",
    description: achievement?.description || "",
    category: achievement?.category || "",
    date: achievement?.date || "",
    location: achievement?.location || "",
    recipient: achievement?.recipient || "",
    images: achievement?.images ? [...achievement.images] : [],
    importance: achievement?.importance || "medium",
    tags: achievement?.tags ? [...achievement.tags] : [],
  })
  
  const [isImageUploadDialogOpen, setIsImageUploadDialogOpen] = useState(false)

  const handleSubmit = () => {
    if (formData.title && formData.description) {
      onSubmit(formData)
    }
  }

  const handleImagesAdd = (newImages: string[]) => {
    setFormData({
      ...formData,
      images: [...(formData.images || []), ...newImages],
    })
  }

  const removeImage = (index: number) => {
    if (formData.images) {
      setFormData({
        ...formData,
        images: formData.images.filter((_, i) => i !== index),
      })
    }
  }

  return (
    <div className="grid lg:grid-cols-2 gap-6 py-4">
      {/* Left Column - Form Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Title *</label>
          <Input
            value={formData.title || ""}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            placeholder="Achievement title"
            className="border-purple-200 focus:border-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description *</label>
          <Textarea
            value={formData.description || ""}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            placeholder="Detailed description of the achievement"
            rows={4}
            className="border-purple-200 focus:border-purple-500"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <Select
              value={formData.category || ""}
              onValueChange={(value) => setFormData({ ...formData, category: value })}
            >
              <SelectTrigger className="border-purple-200 focus:border-purple-500">
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES
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
              value={formData.importance || "medium"}
              onValueChange={(value: "high" | "medium" | "low") =>
                setFormData({ ...formData, importance: value })
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
              value={formData.date || ""}
              onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              className="border-purple-200 focus:border-purple-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
            <Input
              value={formData.location || ""}
              onChange={(e) => setFormData({ ...formData, location: e.target.value })}
              placeholder="Location"
              className="border-purple-200 focus:border-purple-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Recipient</label>
          <Input
            value={formData.recipient || ""}
            onChange={(e) => setFormData({ ...formData, recipient: e.target.value })}
            placeholder="Who received this achievement"
            className="border-purple-200 focus:border-purple-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Tags (comma-separated)</label>
          <Input
            value={formData.tags?.join(", ") || ""}
            onChange={(e) =>
              setFormData({
                ...formData,
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
            <Button 
              type="button" 
              size="sm" 
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => setIsImageUploadDialogOpen(true)}
            >
              <Upload className="mr-1 h-4 w-4" />
              Add Images
            </Button>
          </div>

          <div className="border-2 border-dashed border-purple-200 rounded-lg p-4 min-h-[300px]">
            {formData.images && formData.images.length > 0 ? (
              <div className="grid grid-cols-2 gap-4">
                {formData.images.map((image, index) => (
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
                      onClick={() => removeImage(index)}
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

          {formData.images && formData.images.length > 0 && (
            <p className="text-sm text-gray-500 text-center">
              {formData.images.length} image{formData.images.length !== 1 ? "s" : ""} added
            </p>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="lg:col-span-2 flex justify-end space-x-2 pt-4 border-t">
        <Button
          variant="outline"
          onClick={onCancel}
          className="border-purple-200 text-purple-700 bg-transparent"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          className="bg-purple-600 hover:bg-purple-700"
          disabled={!formData.title || !formData.description}
        >
          {isEditing ? "Update" : "Add"} Achievement
        </Button>
      </div>

      <ImageUploadDialog
        isOpen={isImageUploadDialogOpen}
        onClose={() => setIsImageUploadDialogOpen(false)}
        onImagesAdd={handleImagesAdd}
      />
    </div>
  )
}