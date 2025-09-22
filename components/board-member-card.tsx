"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Linkedin } from "lucide-react"

interface BoardMember {
  id: number
  name: string
  title: string
  image: string
  bio: string
  transferredTo: string
  linkedin: string
  year: string
  achievements: string[]
}

interface BoardMemberCardProps {
  member: BoardMember
}

export function BoardMemberCard({ member }: BoardMemberCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group relative overflow-hidden border-border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardContent className="p-0">
        {/* Profile Image */}
        <div className="relative h-64 overflow-hidden">
          <Image
            src={member.image || "/placeholder.svg"}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          {/* Hover Overlay */}
          <div
            className={`absolute inset-0 bg-primary/90 flex items-center justify-center transition-opacity duration-300 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          >
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
                  View Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="flex items-center gap-3">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden">
                      <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-serif text-xl font-bold">{member.name}</h3>
                      <p className="text-primary font-medium">{member.title}</p>
                      <Badge variant="outline" className="mt-1">
                        {member.year}
                      </Badge>
                    </div>
                  </DialogTitle>
                </DialogHeader>

                {/* Only LinkedIn */}
                <div className="pt-4">
                  <Button asChild variant="outline" className="w-full bg-transparent">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-4 w-4" />
                      Connect on LinkedIn
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>

        {/* Member Info */}
        <div className="p-4">
          <h3 className="font-serif font-bold text-lg text-foreground mb-1">{member.name}</h3>
          <p className="text-primary font-medium mb-2">{member.title}</p>
          <Badge variant="secondary" className="text-xs">
            {member.year}
          </Badge>
        </div>
      </CardContent>
    </Card>
  )
}
