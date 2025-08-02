import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface ImageModalProps {
  isOpen: boolean
  onClose: () => void
  images: string[]
  initialIndex?: number
}

export default function ImageModal({ isOpen, onClose, images, initialIndex = 0 }: ImageModalProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToImage = (index: number) => {
    setCurrentIndex(index)
  }

  if (images.length === 0) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-full max-h-[95vh] p-0 bg-black/90">
        <div className="relative">
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-4 right-4 z-10 bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>

          <div className="relative">
            <img
              src={images[currentIndex]}
              alt="Achievement"
              className="w-full h-auto max-h-[90vh] object-contain"
            />

            {images.length > 1 && (
              <>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-6 w-6" />
                </Button>
                <Button
                  size="sm"
                  variant="ghost"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white hover:bg-black/70 backdrop-blur-sm"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-6 w-6" />
                </Button>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {images.map((_, idx) => (
                    <div
                      key={idx}
                      className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentIndex ? "bg-white" : "bg-white/50"
                      }`}
                      onClick={() => goToImage(idx)}
                    />
                  ))}
                </div>

                {/* Image counter in modal */}
                <div className="absolute top-4 left-4 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                  {currentIndex + 1} of {images.length}
                </div>
              </>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}