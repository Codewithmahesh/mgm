import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Award,
  Trophy,
  Medal,
  Star,
  Calendar,
  MapPin,
  Users,
  Edit3,
  Trash2,
} from "lucide-react"
import ImageCarousel from "./ImageCarousel"
import { Achievement } from "@/types/Achievement"

interface AchievementCardProps {
  achievement: Achievement
  onEdit?: (achievement: Achievement) => void
  onDelete?: (id: string) => void
  onImageClick: (images: string[], index: number) => void
  isEditMode?: boolean
}

export default function AchievementCard({ 
  achievement, 
  onEdit, 
  onDelete, 
  onImageClick,
  isEditMode = false 
}: AchievementCardProps) {
  
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
                onClick={() => onEdit?.(achievement)}
                className="text-white hover:bg-white/20 transform hover:scale-110 transition-all duration-300"
              >
                <Edit3 className="h-4 w-4" />
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => onDelete?.(achievement.id)}
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

        {/* Images Carousel */}
        <ImageCarousel
          images={achievement.images}
          title={achievement.title}
          onImageClick={onImageClick}
        />

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
  )
}