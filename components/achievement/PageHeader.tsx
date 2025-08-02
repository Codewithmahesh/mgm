import { ReactNode } from "react"

interface PageHeaderProps {
  children?: ReactNode
}

export default function PageHeader({ children }: PageHeaderProps) {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-900 via-purple-700 to-purple-500 bg-clip-text text-transparent mb-6 animate-gradient-text">
        Our Achievements
      </h1>
      <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8">
        Celebrating excellence, innovation, and success across all dimensions of our institution. Each achievement
        represents our commitment to quality education and continuous improvement.
      </p>
      {children}
    </div>
  )
}