"use client"

import type React from "react"
import { createContext, useContext, useState } from "react"

interface EditModeContextType {
  isEditMode: boolean
  toggleEditMode: () => void
  editingComponent: string | null
  setEditingComponent: (id: string | null) => void
}

const EditModeContext = createContext<EditModeContextType | undefined>(undefined)

export function EditModeProvider({ children }: { children: React.ReactNode }) {
  const [isEditMode, setIsEditMode] = useState(false)
  const [editingComponent, setEditingComponent] = useState<string | null>(null)

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode)
    setEditingComponent(null)
  }

  return (
    <EditModeContext.Provider value={{ isEditMode, toggleEditMode, editingComponent, setEditingComponent }}>
      {children}
    </EditModeContext.Provider>
  )
}

export function useEditMode() {
  const context = useContext(EditModeContext)
  if (context === undefined) {
    throw new Error("useEditMode must be used within an EditModeProvider")
  }
  return context
}
