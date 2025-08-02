import { Achievement } from "@/types/Achievement"
import AchievementCard from "./AchievementCard"
import EmptyState from "./EmptyState"
import FadeInSection from "@/components/fade-in-section"

interface AchievementsGridProps {
  achievements: Achievement[]
  selectedCategory: string
  onEdit?: (achievement: Achievement) => void
  onDelete?: (id: string) => void
  onImageClick: (images: string[], index: number) => void
  isEditMode?: boolean
}

export default function AchievementsGrid({ 
  achievements, 
  selectedCategory, 
  onEdit, 
  onDelete, 
  onImageClick,
  isEditMode = false 
}: AchievementsGridProps) {
  const filteredAchievements = 
    selectedCategory === "all"
      ? achievements
      : achievements.filter((achievement) => achievement.category === selectedCategory)

  if (filteredAchievements.length === 0) {
    return (
      <FadeInSection delay={0.4}>
        <EmptyState selectedCategory={selectedCategory} />
      </FadeInSection>
    )
  }

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {filteredAchievements.map((achievement, index) => (
        <FadeInSection key={achievement.id} delay={0.1 * (index % 4)}>
          <AchievementCard
            achievement={achievement}
            onEdit={onEdit}
            onDelete={onDelete}
            onImageClick={onImageClick}
            isEditMode={isEditMode}
          />
        </FadeInSection>
      ))}
    </div>
  )
}