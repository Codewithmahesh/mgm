import { Button } from "@/components/ui/button"
import { CATEGORIES } from "@/types/Achievement"

interface CategoryFilterProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 mb-12">
      {CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
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
  )
}