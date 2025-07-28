"use client"

import { Button } from "@/components/ui/button"
import { Edit3, X } from "lucide-react"
import { useEditMode } from "./edit-mode-provider"

export default function EditToggleButton() {
  const { isEditMode, toggleEditMode, editingComponent, setEditingComponent } = useEditMode()

  const handleToggle = () => {
    if (editingComponent) {
      setEditingComponent(null)
    }
    toggleEditMode()
  }

  return (
    <div className="fixed top-20 right-4 z-50">
      <Button
        onClick={handleToggle}
        className={`${isEditMode ? "bg-red-600 hover:bg-red-700" : "bg-blue-600 hover:bg-blue-700"} shadow-lg`}
        size="lg"
      >
        {isEditMode ? (
          <>
            <X className="mr-2 h-5 w-5" />
            Exit Edit
          </>
        ) : (
          <>
            <Edit3 className="mr-2 h-5 w-5" />
            Edit Page
          </>
        )}
      </Button>
    </div>
  )
}
