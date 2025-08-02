import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import AchievementForm from "./AchievementForm"
import { Achievement } from "@/types/Achievement"

interface AddAchievementDialogProps {
  isOpen: boolean
  onOpenChange: (open: boolean) => void
  onAdd: (achievement: Partial<Achievement>) => void
  editingAchievement?: Achievement | null
  onEdit?: (achievement: Partial<Achievement>) => void
}

export default function AddAchievementDialog({ 
  isOpen, 
  onOpenChange, 
  onAdd, 
  editingAchievement,
  onEdit 
}: AddAchievementDialogProps) {
  const handleSubmit = (achievement: Partial<Achievement>) => {
    if (editingAchievement) {
      onEdit?.(achievement)
    } else {
      onAdd(achievement)
    }
    onOpenChange(false)
  }

  const handleCancel = () => {
    onOpenChange(false)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {!editingAchievement && (
        <DialogTrigger asChild>
          <Button className="bg-purple-600 hover:bg-purple-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Plus className="mr-2 h-5 w-5" />
            Add Achievement
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-purple-900 text-2xl">
            {editingAchievement ? "Edit Achievement" : "Add New Achievement"}
          </DialogTitle>
        </DialogHeader>
        <AchievementForm
          achievement={editingAchievement}
          onSubmit={handleSubmit}
          onCancel={handleCancel}
          isEditing={!!editingAchievement}
        />
      </DialogContent>
    </Dialog>
  )
}