import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface ImageCarouselProps {
  images: string[]
  title: string
  onImageClick: (images: string[], index: number) => void
}

export default function ImageCarousel({ images, title, onImageClick }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)

  if (images.length === 0) return null

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className="relative mb-6 group/slider">
      <div className="relative h-56 rounded-xl overflow-hidden bg-purple-50 shadow-inner">
        <img
          src={images[currentIndex]}
          alt={title}
          className="w-full h-full object-cover cursor-pointer hover:scale-110 transition-transform duration-500"
          onClick={() => onImageClick(images, currentIndex)}
        />

        {images.length > 1 && (
          <>
            <Button
              size="sm"
              variant="ghost"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 backdrop-blur-sm"
              onClick={prevImage}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              size="sm"
              variant="ghost"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 opacity-0 group-hover/slider:opacity-100 transition-all duration-300 backdrop-blur-sm"
              onClick={nextImage}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>

            {/* Image indicators */}
            <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {images.map((_, idx) => (
                <div
                  key={idx}
                  className={`w-2 h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    idx === currentIndex
                      ? "bg-white scale-125"
                      : "bg-white/50 hover:bg-white/75"
                  }`}
                  onClick={() => goToImage(idx)}
                />
              ))}
            </div>

            {/* Image counter */}
            <div className="absolute top-3 right-3 bg-black/70 text-white text-xs px-2 py-1 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </>
        )}
      </div>
    </div>
  )
}