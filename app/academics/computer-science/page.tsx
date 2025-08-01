"use client"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Users,
  Clock,
  Award,
  BookOpen,
  User,
  Mail,
  Phone,
  ChevronDown,
} from "lucide-react"
import Image from "next/image"
import { useState } from "react"

export default function ComputerSciencePage() {
  const courseHighlights = [
    "Data Structures & Algorithms",
    "Software Engineering",
    "Database Management Systems",
    "Computer Networks",
    "Operating Systems",
    "Web Development",
    "Mobile App Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Cybersecurity",
    "Cloud Computing",
    "DevOps",
  ]

  const careerOpportunities = [
    "Software Developer",
    "Full Stack Developer",
    "Data Scientist",
    "System Analyst",
    "Database Administrator",
    "Network Engineer",
    "Cybersecurity Specialist",
    "AI/ML Engineer",
    "Cloud Architect",
    "Product Manager",
  ]

  const facilities = [
    "Advanced Computer Labs with latest hardware",
    "High-speed internet connectivity",
    "Licensed software for development",
    "Project development labs",
    "Research facilities",
    "Industry collaboration spaces",
  ]

  const vision = "To be one of the leading Departments for Computer Science & Engineering education, developing proficient Engineers with global acceptance in the service of mankind."

  const mission = [
    "Providing technical skills with strong fundamentals of Computer Science discipline with an emphasis on software development.",
    "Inculcating analytical, programming and multidisciplinary skills to enhance employability.",
    "Fostering problem-solving, team-building, and lifelong learning skills with societal, environmental and ethical sense.",
    "Developing researchers and entrepreneurs to solve real-life problems through industry interactions and collaborations.",
  ]

  const psos = [
    "Apply knowledge of core courses and emerging areas including Data Science, AI/ML, Cloud Computing, Information Security, Image Processing for solving real life problems.",
    "Design and develop software and hardware systems using latest technologies, programming languages, and open-source platforms.",
    "Apply standard software engineering principles and professional skills to create solutions that meet Industry needs.",
  ]

  const peos = [
    "Analyze Computer Science & Engineering techniques, relate them with real life problems and provide solutions that are technically sound, economically viable and socially acceptable.",
    "Utilize acquired programming, analytical, design and implementation skills to formulate and solve computational problems.",
    "Evolve as competent professionals, researchers and entrepreneurs having collaborative and leadership skills with effective communication abilities to pursue appropriate career options and become capable of working in multi-disciplinary environment.",
    "Excel as socially committed Computer Engineers having good ethical and human values.",
  ]

  const pos = [
    "Engineering Knowledge: Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.",
    "Problem Analysis: Identify, formulate, research literature, and analyze complex engineering problems using first principles of mathematics, natural sciences, and engineering sciences.",
    "Design/development of Solutions: Design solutions for complex engineering problems with consideration for health, safety, societal, and environmental aspects.",
    "Conduct Investigations: Use research-based knowledge and methods including experiment design, data interpretation, and synthesis of valid conclusions.",
    "Modern Tool Usage: Apply modern engineering tools and IT techniques to complex engineering tasks with an understanding of their limitations.",
    "The Engineer and Society: Apply contextual knowledge to assess societal, legal, health, and cultural responsibilities.",
    "Environment and Sustainability: Understand the impact of engineering solutions in societal and environmental contexts and demonstrate knowledge of sustainable development.",
    "Ethics: Apply ethical principles and commit to professional ethics and engineering responsibilities.",
    "Individual and Team Work: Function effectively as an individual, team member, or leader in multidisciplinary settings.",
    "Communication: Communicate effectively on complex engineering activities with engineering peers and society at large.",
    "Project Management and Finance: Apply engineering and management principles to one’s own work, as a member and leader in a team.",
    "Life-long Learning: Recognize the need for and engage in independent, lifelong learning in the context of technological change.",
  ]

  const CollapsibleSection = ({ title, items, ordered = false }: { title: string; items: string[]; ordered?: boolean }) => {
    const [open, setOpen] = useState(false)
    const ListTag = ordered ? "ol" : "ul"
    const listClass = ordered ? "list-decimal" : "list-disc"

    return (
      <div className="border-b border-gray-200 last:border-b-0">
        <button 
          onClick={() => setOpen(!open)}
          className="w-full flex justify-between items-center py-4 text-left text-blue-800 font-semibold
           hover:text-blue-900 transition-colors duration-200 focus:outline-none rounded-lg px-2"
        >
          <span className="text-lg">{title}</span>
          <ChevronDown 
            className={`w-5 h-5 transition-transform duration-300 ease-in-out ${
              open ? "rotate-180" : ""
            }`} 
          />
        </button>
        <div 
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className={`pb-4 transform transition-transform duration-300 ease-in-out ${
            open ? "translate-y-0" : "-translate-y-2"
          }`}>
            <ListTag className={`${listClass} list-inside space-y-3 text-gray-700 text-justify px-2`}>
              {items.map((item, index) => (
                <li 
                  key={index} 
                  className={`transform transition-all duration-300 ease-in-out ${
                    open 
                      ? "translate-x-0 opacity-100" 
                      : "translate-x-4 opacity-0"
                  }`}
                  style={{ 
                    transitionDelay: open ? `${index * 50}ms` : '0ms' 
                  }}
                >
                  {item}
                </li>
              ))}
            </ListTag>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">Computer Science & Engineering</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Shaping the future through innovative technology and computational thinking
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview */}
            <Card className="border-blue-200 shadow-lg animate-slide-up">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl flex items-center">
                  <BookOpen className="mr-3 h-6 w-6" />
                  Course Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6 mb-7">
                  <div className="text-center">
                    <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-800">4 Years</div>
                    <div className="text-sm text-gray-600">Duration</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-800">120</div>
                    <div className="text-sm text-gray-600">Intake</div>
                  </div>
                  <div className="text-center">
                    <Award className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-blue-800">1984</div>
                    <div className="text-sm text-gray-600">Established</div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed text-justify">
                  The Computer Science & Engineering Department at MGM's College of Engineering,
                  established in 1984, offers quality UG, PG, and Ph.D. programs. It has received ₹59.99 lakh
                  in research grants from BARC, AICTE, and AMUPMDC. Recognized research center under SRTMU
                  Nanded and DBATU Lonere. Modern infrastructure and industry collaborations prepare students
                  for success in the evolving tech landscape.
                </p>
              </CardContent>
            </Card>

            {/* Vision & Mission Collapsibles */}
            <Card className="border-blue-200 shadow-lg animate-slide-up animation-delay-200">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl">Vision, Mission & Outcomes</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-blue-700 mb-2">Vision</h3>
                  <p className="text-gray-700 text-justify">{vision}</p>
                </div>

                <CollapsibleSection title="Mission" items={mission} />
                <CollapsibleSection title="Program Specific Outcomes (PSOs)" items={psos} />
                <CollapsibleSection title="Program Educational Objectives (PEOs)" items={peos} />
                <CollapsibleSection title="Program Outcomes (POs)" items={pos} ordered />
              </CardContent>
            </Card>

            {/* Career Opportunities */}
            <Card className="border-blue-200 shadow-lg animate-slide-up animation-delay-400">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl">Career Opportunities</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  {careerOpportunities.map((career, index) => (
                    <div key={index} className="flex items-center p-3 bg-blue-50 rounded-lg">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{career}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Facilities */}
            <Card className="border-blue-200 shadow-lg animate-slide-up animation-delay-600">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                <CardTitle className="text-2xl">Facilities</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-3">
                  {facilities.map((facility, index) => (
                    <li key={index} className="flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      <span className="text-gray-700">{facility}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - HOD + Actions */}
          <div className="space-y-6">
            <Card className="animate-slide-up sticky top-24 border-none">
              <Card className="border-blue-200 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <CardTitle className="text-xl flex items-center">
                    <User className="mr-2 h-5 w-5" />
                    Head of Department
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 text-center">
                  <div className="w-32 h-32 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Image
                      src={"/images/computer-department/hod-image.jpg"}
                      alt="HOD"
                      width={200}
                      height={200}
                      className="w-full h-full rounded-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-blue-800 mb-2">Dr. Rajurkar A.M.</h3>
                  <p className="text-gray-600 mb-4">Ph.D. in Computer Science</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center">
                      <Mail className="h-4 w-4 text-blue-600 mr-2" />
                      <span>rajurkar_am@mgmce.ac.in</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Phone className="h-4 w-4 text-blue-600 mr-2" />
                      <span>+91-02462-224756</span>
                    </div>
                  </div>
                  <div className=" mt-4 p-2 bg-blue-50 rounded-lg">
                    <p className="text-sm text-gray-700">
                      15+ years of experience in Computer Science education and research. Specializes in AI, Machine
                      Learning, and Data Science.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-blue-200 mt-6 shadow-lg">
                <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
                  <CardTitle className="text-xl">Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="p-6 space-y-3">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">Download Syllabus</Button>
                  <Button variant="outline" className="w-full border-blue-300 text-blue-700 bg-transparent">
                    View Faculty
                  </Button>
                </CardContent>
              </Card>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
