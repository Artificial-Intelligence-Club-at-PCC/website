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
    linkedin: "https://linkedin.com/in/shin-htet",
    year: "2025-2026",
  },
  {
    id: 2,
    name: "Vivian Nguyen",
    title: "Vice President",
    image: "/placeholder.svg?height=300&width=300&text=Emily+Johnson",
    linkedin: "https://linkedin.com/in/vivian-nguyen-826986319",
    year: "2025-2026",
  },
  {
    id: 3,
    name: "Rehaan Shaw",
    title: "Secretary",
    image: "/placeholder.svg?height=300&width=300&text=Alex+Thompson",
    linkedin: "https://linkedin.com/in/alexthompson",
    year: "2025-2026",
  },
  {
    id: 4,
    name: "Nyan Lynn Phyoe Zaw",
    title: "Events Coordinator",
    image: "/placeholder.svg?height=300&width=300&text=Alex+Thompson",
    linkedin: "https://linkedin.com/in/alexthompson",
    year: "2025-2026",
  },
  {
    id: 5,
    name: "Jian Wang",
    title: "Social Media Manager",
    image: "/placeholder.svg?height=300&width=300&text=Alex+Thompson",
    linkedin: "https://linkedin.com/in/alexthompson",
    year: "2025-2026",
  },
  {
    id: 6,
    name: "Tuan Dien Tran",
    title: "ICC Representative",
    image: "/placeholder.svg?height=300&width=300&text=Alex+Thompson",
    linkedin: "https://linkedin.com/in/alexthompson",
    year: "2025-2026",
  },
  {
    id: 7,
    name: "Yu-Wen Wang",
    title: "ICC Representative",
    image: "/placeholder.svg?height=300&width=300&text=Alex+Thompson",
    linkedin: "https://linkedin.com/in/alexthompson",
    year: "2025-2026",
  },
  {
    id: 8,
    name: "Jeremy Lin",
    title: "Public Relations",
    image: "/placeholder.svg?height=300&width=300&text=Alex+Thompson",
    linkedin: "https://linkedin.com/in/alexthompson",
    year: "2025-2026",
  },
  {
    id: 9,
    name: "Isaac Cheng",
    title: "Project Manager",
    image: "/placeholder.svg?height=300&width=300&text=Alex+Thompson",
    linkedin: "https://linkedin.com/in/alexthompson",
    year: "2025-2026",
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
        linkedin: "https://linkedin.com/in/evanjchou",
        year: "2024-2025",
      },
      {
        id: 11,
        name: "Shin Aung",
        title: "Vice President and Co-Founder",
        image: "/placeholder.svg?height=300&width=300&text=Marcus+Rodriguez",
        linkedin: "https://linkedin.com/in/marcusrodriguez",
        year: "2024-2025",
      },
      {
        id: 12,
        name: "Akshit Singh",
        title: "Secretary and Co-Founder",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        transferredTo: "UC Irvine - BS in Computer Science",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
      },
      {
        id: 13,
        name: "Jordan Marcelo",
        title: "Treasurer",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
      },
      {
        id: 14,
        name: "Vivian Nguyen",
        title: "Treasurer",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
      },
      {
        id: 15,
        name: "Nyan Lynn Phyoe Zaw",
        title: "Events Coordinator and Co-Founder",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
      },
      {
        id: 16,
        name: "Jian Wang",
        title: "Social Media Manager",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
      },
      {
        id: 17,
        name: "Tuan Dien Tran",
        title: "ICC Representative and Co-Founder",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
      },
      {
        id: 18,
        name: "Timothy DeLange",
        title: "Project Manager",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
      },
      {
        id: 19,
        name: "David Alcala",
        title: "Public Relations",
        image: "/placeholder.svg?height=300&width=300&text=Aisha+Patel",
        linkedin: "https://linkedin.com/in/aishapatel",
        year: "2024-2025",
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
            ? "Honoring the leaders who helped build our community"
            : "Meet our current leadership team driving innovation and growth"}
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
