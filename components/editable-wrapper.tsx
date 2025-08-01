"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Save, X } from "lucide-react"
import { useEditMode } from "./edit-mode-provider"

interface EditableWrapperProps {
  id: string
  children: React.ReactNode
  editableContent?: {
    [key: string]: string
  }
  onSave?: (content: { [key: string]: string }) => void
  className?: string
}

export default function EditableWrapper({
  id,
  children,
  editableContent = {},
  onSave,
  className = "",
}: EditableWrapperProps) {
  const { isEditMode, editingComponent, setEditingComponent } = useEditMode()
  const [editContent, setEditContent] = useState(editableContent)
  const isEditing = editingComponent === id

  const handleEdit = () => {
    setEditingComponent(id)
    setEditContent(editableContent)
  }

  const handleSave = () => {
    if (onSave) {
      onSave(editContent)
    }
    setEditingComponent(null)
  }

  const handleCancel = () => {
    setEditContent(editableContent)
    setEditingComponent(null)
  }

  const handleContentChange = (key: string, value: string) => {
    setEditContent((prev) => ({ ...prev, [key]: value }))
  }

  if (isEditing) {
    return (
      <div className={`relative border-2 border-blue-500 rounded-lg p-4 bg-blue-50 ${className}`}>
        <div className="space-y-4">
          {Object.entries(editableContent).map(([key, value]) => (
            <div key={key}>
              <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                {key.replace(/([A-Z])/g, " $1").trim()}
              </label>
              {value.length > 100 ? (
                <Textarea
                  value={editContent[key] || ""}
                  onChange={(e) => handleContentChange(key, e.target.value)}
                  rows={4}
                  className="w-full"
                />
              ) : (
                <Input
                  value={editContent[key] || ""}
                  onChange={(e) => handleContentChange(key, e.target.value)}
                  className="w-full"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-4">
          <Button onClick={handleSave} size="sm" className="bg-green-600 hover:bg-green-700">
            <Save className="mr-1 h-4 w-4" />
            Save
          </Button>
          <Button onClick={handleCancel} size="sm" variant="outline">
            <X className="mr-1 h-4 w-4" />
            Cancel
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`relative group ${className} ${
        isEditMode ? "cursor-pointer hover:bg-blue-50 border-2 border-dashed border-blue-300 rounded-lg p-2" : ""
      }`}
      onClick={isEditMode ? handleEdit : undefined}
    >
      {isEditMode && (
        <>
          <div className="absolute inset-0 border-2 border-blue-400 rounded-lg pointer-events-none animate-pulse"></div>
          <div className="absolute -top-2 -left-2 z-10 bg-blue-500 text-white text-xs px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
            Click to edit
          </div>
        </>
      )}
      {children}
    </div>
  )
}
