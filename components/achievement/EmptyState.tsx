import { Award } from "lucide-react"

interface EmptyStateProps {
  selectedCategory: string
}

export default function EmptyState({ selectedCategory }: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <Award className="h-16 w-16 text-purple-300 mx-auto mb-4" />
      <h3 className="text-xl font-semibold text-gray-600 mb-2">No achievements found</h3>
      <p className="text-gray-500">
        {selectedCategory === "all"
          ? "Start by adding your first achievement!"
          : `No achievements found in the ${selectedCategory} category.`}
      </p>
    </div>
  )
}