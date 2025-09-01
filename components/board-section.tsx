"use client"

import { useState } from "react"
import { BoardMemberCard } from "./board-member-card"
import { Button } from "@/components/ui/button"

const currentBoard = [
  {
    id: 1,
    name: "Shin Aung",
    title: "President",
    image: "/placeholder.svg?height=300&width=300&text=David+Kim",
    bio: "David manages our club finances and coordinates fundraising efforts. He has a strong background in data science and financial modeling.",
    transferredTo: "USC - BS in Business Analytics",
    linkedin: "https://linkedin.com/in/davidkim",
    year: "2025-2026",
    achievements: ["Raised $10,000 in funding", "Managed club budget efficiently", "Secured equipment donations"],
  },
  {
    id: 2,
    name: "Emily Johnson",
    title: "Events Coordinator",
    image: "/placeholder.svg?height=300&width=300&text=Emily+Johnson",
    bio: "Emily organizes our social events and networking opportunities. She's passionate about building connections between students and industry professionals.",
    transferredTo: "Caltech - BS in Computer Science",
    linkedin: "https://linkedin.com/in/emilyjohnson",
    year: "2025-2026",
    achievements: [
      "Organized 25+ networking events",
      "Connected 50+ students with mentors",
      "Established alumni network",
    ],
  },
  {
    id: 3,
    name: "Alex Thompson",
    title: "Technical Lead",
    image: "/placeholder.svg?height=300&width=300&text=Alex+Thompson",
    bio: "Alex oversees our technical projects and maintains our club's infrastructure. He specializes in deep learning and cloud computing.",
    transferredTo: "MIT - MS in Artificial Intelligence",
    linkedin: "https://linkedin.com/in/alexthompson",
    year: "2025-2026",
    achievements: ["Led 10+ major projects", "Built club's tech infrastructure", "Mentored junior developers"],
  },
]

const previousBoards = [
  {
    // === 2024 to 2025 BOARD ===
    year: "2024-2025",
    members: [
      {
        id: 10,
        name: "Evan Chou",
        title: "President and Co-Founder",
        image: "/placeholder.svg?height=300&width=300&text=Sarah+Chen",
        bio: "Evan is one of the co-founders of the AI Club, passionate about applications of AI/ML and its positive impact in our world today. He is enthusiastic about fostering an open space for everyone to learn about AI.",
        transferredTo: "UC San Diego - BS in Electrical Engineering",
        linkedin: "https://linkedin.com/in/evanjchou",
        year: "2024-2025",
        achievements: ["Spearheaded club operations and traditions", "Lead organized the AI Horizons Convention", "Networked with other organizations for club partnerships"],
      },
      {
        id: 11,
        name: "Shin Aung",
        title: "Vice President and Co-Founder",
        image: "/placeholder.svg?height=300&width=300&text=Marcus+Rodriguez",
        bio: "TBD",
        transferredTo: "To Be Determined...",
        linkedin: "https://linkedin.com/in/marcusrodriguez",
        year: "2024-2025",
        achievements: ["Point 1", "Point 2", "Point 3"],
      },
      {
        id: 12,
        name: "Akshit Singh",
        title: "Secretary and Co-Founder",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        bio: "TBD",
        transferredTo: "UC Irvine - BS in Computer Science",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
        achievements: [
          "Point 1",
          "Point 2",
          "Point 3",
        ],
      },
      {
        id: 13,
        name: "Jordan Marcelo",
        title: "Treasurer",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        bio: "TBD",
        transferredTo: "UC Irvine - BS in Computer Science",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
        achievements: [
          "Point 1",
          "Point 2",
          "Point 3",
        ],
      },
      {
        id: 14,
        name: "Vivian Nguyen",
        title: "Treasurer",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        bio: "TBD",
        transferredTo: "To Be Determined...",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
        achievements: [
          "Point 1",
          "Point 2",
          "Point 3",
        ],
      },
      {
        id: 15,
        name: "Nyan Lynn Phyoe Zaw",
        title: "Events Coordinator and Co-Founder",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        bio: "TBD",
        transferredTo: "To Be Determined...",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
        achievements: [
          "Point 1",
          "Point 2",
          "Point 3",
        ],
      },
      {
        id: 16,
        name: "Jian Wang",
        title: "Social Media Manager",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        bio: "TBD",
        transferredTo: "To Be Determined",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
        achievements: [
          "Point 1",
          "Point 2",
          "Point 3",
        ],
      },
      {
        id: 17,
        name: "Tuan Dien Tran",
        title: "ICC Representative and Co-Founder",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        bio: "TBD",
        transferredTo: "To Be Determined...",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
        achievements: [
          "Point 1",
          "Point 2",
          "Point 3",
        ],
      },
      {
        id: 18,
        name: "Timothy DeLange",
        title: "Project Manager",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        bio: "TBD",
        transferredTo: "To Be Determined...",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
        achievements: [
          "Point 1",
          "Point 2",
          "Point 3",
        ],
      },
      {
        id: 19,
        name: "David Alcala",
        title: "Public Relations",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        bio: "TBD",
        transferredTo: "University of Southern California - BS in Computer Science",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
        achievements: [
          "Point 1",
          "Point 2",
          "Point 3",
        ],
      },
    ],
  },
]

export function BoardSection() {
  const [selectedYear, setSelectedYear] = useState("2025-2026")

  const getCurrentBoard = () => {
    if (selectedYear === "2025-2026") return currentBoard
    return previousBoards.find((board) => board.year === selectedYear)?.members || []
  }

  const allYears = ["2025-2026", ...previousBoards.map((board) => board.year)]

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
          {selectedYear === "2025-2026" ? "Current Board" : `Board ${selectedYear}`}
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
