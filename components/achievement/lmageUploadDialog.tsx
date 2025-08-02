import React, { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Plus, X, Check, Upload, FolderOpen } from "lucide-react"

interface ImageUploadDialogProps {
  isOpen: boolean
  onClose: () => void
  onImagesAdd: (images: string[]) => void
}

export default function ImageUploadDialog({ isOpen, onClose, onImagesAdd }: ImageUploadDialogProps) {
  const [urlInput, setUrlInput] = useState("")
  const [urlsToAdd, setUrlsToAdd] = useState<string[]>([])

  const addUrlToList = () => {
    if (urlInput.trim()) {
      setUrlsToAdd([...urlsToAdd, urlInput.trim()])
      setUrlInput("")
    }
  }

  const removeUrlFromList = (index: number) => {
    setUrlsToAdd(urlsToAdd.filter((_, i) => i !== index))
  }

  const addUrlsToAchievement = () => {
    if (urlsToAdd.length > 0) {
      onImagesAdd(urlsToAdd)
      setUrlsToAdd([])
    }
    handleClose()
  }

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files
    if (files && files.length > 0) {
      const filePromises = Array.from(files).map((file) => {
        return new Promise<string>((resolve) => {
          const reader = new FileReader()
          reader.onload = (e) => {
            resolve(e.target?.result as string)
          }
          reader.readAsDataURL(file)
        })
      })

      Promise.all(filePromises).then((results) => {
        onImagesAdd(results)
      })
    }
    handleClose()
    // Reset the input value so the same files can be selected again
    event.target.value = ""
  }

  const handleClose = () => {
    setUrlInput("")
    setUrlsToAdd([])
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-purple-900">Add Images</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <p className="text-sm text-gray-600">Choose how you want to add images:</p>

          {/* Upload from Device */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Upload from Device</label>
            <div className="flex items-center space-x-2">
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="flex-1 cursor-pointer">
                <div className="flex items-center justify-center px-6 py-4 border-2 border-dashed border-purple-300 rounded-lg hover:border-purple-500 hover:bg-purple-50 transition-colors">
                  <FolderOpen className="h-6 w-6 text-purple-600 mr-3" />
                  <div className="text-center">
                    <span className="text-sm font-medium text-purple-700">
                      Choose Multiple Files
                    </span>
                    <p className="text-xs text-gray-500 mt-1">Select multiple images at once</p>
                  </div>
                </div>
              </label>
            </div>
            <p className="text-xs text-gray-500">
              Supports: JPG, PNG, GIF, WebP (Max 10MB each) • Hold Ctrl/Cmd to select multiple files
            </p>
          </div>

          <div className="flex items-center">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-3 text-sm text-gray-500">OR</span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Add from URLs */}
          <div className="space-y-3">
            <label className="block text-sm font-medium text-gray-700">Add from URLs</label>
            <div className="space-y-3">
              <div className="flex space-x-2">
                <Input
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="Enter image URL"
                  className="flex-1 border-purple-200 focus:border-purple-500"
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      e.preventDefault()
                      addUrlToList()
                    }
                  }}
                />
                <Button
                  type="button"
                  onClick={addUrlToList}
                  disabled={!urlInput.trim()}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>

              {/* URLs to be added */}
              {urlsToAdd.length > 0 && (
                <div className="space-y-2 max-h-32 overflow-y-auto">
                  <p className="text-sm font-medium text-gray-700">
                    URLs to add ({urlsToAdd.length}):
                  </p>
                  {urlsToAdd.map((url, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-2 bg-purple-50 rounded-lg"
                    >
                      <span className="text-sm text-gray-700 truncate flex-1 mr-2">{url}</span>
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        onClick={() => removeUrlFromList(index)}
                        className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}

              <p className="text-xs text-gray-500">
                Add multiple URLs one by one, then click "Add All URLs" to add them all at once
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-2 pt-4 border-t">
            <Button
              variant="outline"
              onClick={handleClose}
              className="border-purple-200 text-purple-700 bg-transparent"
            >
              Cancel
            </Button>
            {urlsToAdd.length > 0 && (
              <Button
                onClick={addUrlsToAchievement}
                className="bg-purple-600 hover:bg-purple-700"
              >
                <Check className="mr-1 h-4 w-4" />
                Add All URLs ({urlsToAdd.length})
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}