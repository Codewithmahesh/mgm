export interface Achievement {
  id: string
  title: string
  description: string
  category: string
  date: string
  location: string
  recipient: string
  images: string[]
  importance: "high" | "medium" | "low"
  tags: string[]
}

export const CATEGORIES = [
  "all",
  "Institutional",
  "Academic",
  "Research",
  "Placement",
  "Student Achievement",
  "Environmental",
  "Industry",
  "Recognition",
]