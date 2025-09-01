"use client"

import { useState } from "react"
import { BoardMemberCard } from "./board-member-card"
import { Button } from "@/components/ui/button"

const currentBoard = [
  {
    id: 1,
    name: "Sarah Chen",
    title: "President",
    image: "/placeholder.svg?height=300&width=300&text=Sarah+Chen",
    bio: "Sarah is a Computer Science major with a passion for machine learning and neural networks. She has led the club to new heights with innovative workshops and industry partnerships.",
    transferredTo: "Stanford University - MS in Computer Science",
    linkedin: "https://linkedin.com/in/sarahchen",
    year: "2024-2025",
    achievements: ["Increased membership by 200%", "Secured 5 industry partnerships", "Organized first AI hackathon"],
  },
  {
    id: 2,
    name: "Marcus Rodriguez",
    title: "Vice President",
    image: "/placeholder.svg?height=300&width=300&text=Marcus+Rodriguez",
    bio: "Marcus specializes in computer vision and robotics. He coordinates our technical workshops and manages our project development initiatives.",
    transferredTo: "UC Berkeley - BS in Electrical Engineering",
    linkedin: "https://linkedin.com/in/marcusrodriguez",
    year: "2024-2025",
    achievements: ["Led 15+ technical workshops", "Mentored 30+ students", "Published 2 research papers"],
  },
  {
    id: 3,
    name: "Aisha Patel",
    title: "Secretary",
    image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
    bio: "Aisha focuses on natural language processing and AI ethics. She ensures our club maintains excellent communication and documentation.",
    transferredTo: "UCLA - BS in Cognitive Science",
    linkedin: "https://linkedin.com/in/aishapatel",
    year: "2024-2025",
    achievements: [
      "Organized 20+ club events",
      "Maintained 100% meeting attendance",
      "Created club documentation system",
    ],
  },
  {
    id: 4,
    name: "David Kim",
    title: "Treasurer",
    image: "/placeholder.svg?height=300&width=300&text=David+Kim",
    bio: "David manages our club finances and coordinates fundraising efforts. He has a strong background in data science and financial modeling.",
    transferredTo: "USC - BS in Business Analytics",
    linkedin: "https://linkedin.com/in/davidkim",
    year: "2024-2025",
    achievements: ["Raised $10,000 in funding", "Managed club budget efficiently", "Secured equipment donations"],
  },
  {
    id: 5,
    name: "Emily Johnson",
    title: "Events Coordinator",
    image: "/placeholder.svg?height=300&width=300&text=Emily+Johnson",
    bio: "Emily organizes our social events and networking opportunities. She's passionate about building connections between students and industry professionals.",
    transferredTo: "Caltech - BS in Computer Science",
    linkedin: "https://linkedin.com/in/emilyjohnson",
    year: "2024-2025",
    achievements: [
      "Organized 25+ networking events",
      "Connected 50+ students with mentors",
      "Established alumni network",
    ],
  },
  {
    id: 6,
    name: "Alex Thompson",
    title: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300&text=Alex+Thompson",
    bio: "Alex oversees our technical projects and maintains our club's infrastructure. He specializes in deep learning and cloud computing.",
    transferredTo: "MIT - MS in Artificial Intelligence",
    linkedin: "https://linkedin.com/in/alexthompson",
    year: "2024-2025",
    achievements: ["Led 10+ major projects", "Built club's tech infrastructure", "Mentored junior developers"],
  },
]

const previousBoards = [
  {
    year: "2023-2024",
    members: [
      {
        id: 7,
        name: "Jennifer Liu",
        title: "President",
        image: "/placeholder.svg?height=300&width=300&text=Jennifer+Liu",
        bio: "Jennifer founded the AI club and established its core mission. She pioneered our first industry partnerships and set the foundation for future growth.",
        transferredTo: "Carnegie Mellon University - MS in Machine Learning",
        linkedin: "https://linkedin.com/in/jenniferliu",
        year: "2023-2024",
        achievements: ["Founded the AI club", "Established club constitution", "Recruited first 50 members"],
      },
      {
        id: 8,
        name: "Robert Garcia",
        title: "Vice President",
        image: "/placeholder.svg?height=300&width=300&text=Robert+Garcia",
        bio: "Robert focused on curriculum development and created our structured learning path for new members interested in AI and machine learning.",
        transferredTo: "Georgia Tech - MS in Computer Science",
        linkedin: "https://linkedin.com/in/robertgarcia",
        year: "2023-2024",
        achievements: ["Developed learning curriculum", "Created mentorship program", "Organized study groups"],
      },
      {
        id: 9,
        name: "Priya Sharma",
        title: "Secretary",
        image: "/placeholder.svg?height=300&width=300&text=Priya+Sharma",
        bio: "Priya established our documentation standards and created the systems we still use today for meeting notes and project tracking.",
        transferredTo: "UC San Diego - BS in Data Science",
        linkedin: "https://linkedin.com/in/priyasharma",
        year: "2023-2024",
        achievements: ["Created documentation system", "Established meeting protocols", "Built member database"],
      },
    ],
  },
  {
    year: "2022-2023",
    members: [
      {
        id: 10,
        name: "Michael Chang",
        title: "President",
        image: "/placeholder.svg?height=300&width=300&text=Michael+Chang",
        bio: "Michael was instrumental in the early formation of the club, focusing on building a strong community of AI enthusiasts at PCC.",
        transferredTo: "University of Washington - BS in Computer Engineering",
        linkedin: "https://linkedin.com/in/michaelchang",
        year: "2022-2023",
        achievements: ["Co-founded AI club", "Organized first workshops", "Built initial community"],
      },
      {
        id: 11,
        name: "Lisa Wang",
        title: "Vice President",
        image: "/placeholder.svg?height=300&width=300&text=Lisa+Wang",
        bio: "Lisa focused on academic partnerships and helped establish relationships with faculty members in the computer science department.",
        transferredTo: "UC Irvine - BS in Information & Computer Science",
        linkedin: "https://linkedin.com/in/lisawang",
        year: "2022-2023",
        achievements: ["Built faculty partnerships", "Secured meeting space", "Created academic resources"],
      },
    ],
  },
]

export function BoardSection() {
  const [selectedYear, setSelectedYear] = useState("2024-2025")

  const getCurrentBoard = () => {
    if (selectedYear === "2024-2025") return currentBoard
    return previousBoards.find((board) => board.year === selectedYear)?.members || []
  }

  const allYears = ["2024-2025", ...previousBoards.map((board) => board.year)]

  return (
    <div className="space-y-8">
      {/* Year Selection */}
      <div className="flex flex-wrap justify-center gap-2">
        {allYears.map((year) => (
          <Button
            key={year}
            variant={selectedYear === year ? "default" : "outline"}
            onClick={() => setSelectedYear(year)}
            className="mb-2"
          >
            {year}
          </Button>
        ))}
      </div>

      {/* Current/Selected Year Header */}
      <div className="text-center">
        <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-2">
          {selectedYear === "2024-2025" ? "Current Board" : `Board ${selectedYear}`}
        </h2>
        <p className="text-muted-foreground">
          {selectedYear === "2024-2025"
            ? "Meet our current leadership team driving innovation and growth"
            : "Honoring the leaders who helped build our community"}
        </p>
      </div>

      {/* Board Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {getCurrentBoard().map((member) => (
          <BoardMemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}
