"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Github, ExternalLink, Calendar, Users, Star, Play } from "lucide-react"
import type { Project } from "@/lib/projects-data"

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Status Badge */}
        <div className="absolute top-4 left-4">
          <Badge
            variant={
              project.status === "Completed" ? "default" : project.status === "In Progress" ? "secondary" : "outline"
            }
            className="bg-background/90 backdrop-blur"
          >
            {project.status}
          </Badge>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 right-4">
          <Badge variant="outline" className="bg-background/90 backdrop-blur">
            {project.category}
          </Badge>
        </div>

        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-primary/90 flex items-center justify-center transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="secondary" size="sm" className="bg-white text-primary hover:bg-white/90">
                View Details
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="flex items-center gap-3 text-xl">
                  <div className="relative w-12 h-12 rounded-lg overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold">{project.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline">{project.category}</Badge>
                      <Badge variant={project.status === "Completed" ? "default" : "secondary"}>{project.status}</Badge>
                    </div>
                  </div>
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-6 mt-6">
                {/* Project Image */}
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>

                {/* Description */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2">About This Project</h4>
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                </div>

                {/* Technical Details */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technical Implementation</h4>
                  <div className="space-y-3">
                    {project.technicalDetails.map((detail, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Team & Timeline */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-card rounded-lg border">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold text-foreground">Team</h4>
                    </div>
                    <div className="space-y-1">
                      {project.team.map((member, index) => (
                        <p key={index} className="text-sm text-muted-foreground">
                          {member}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="p-4 bg-card rounded-lg border">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <h4 className="font-semibold text-foreground">Timeline</h4>
                    </div>
                    <p className="text-sm text-muted-foreground">{project.timeline}</p>
                    {project.achievements && (
                      <div className="mt-3">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="h-4 w-4 text-primary" />
                          <span className="font-medium text-foreground text-sm">Achievements</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{project.achievements}</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-3 pt-4 border-t">
                  {project.githubUrl && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <Play className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                  {project.paperUrl && (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.paperUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Research Paper
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <CardContent className="p-6">
        <h3 className="font-serif text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3 mb-4">{project.description}</p>

        <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{project.team.length} members</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            <span>{project.timeline}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{project.technologies.length - 3} more
            </Badge>
          )}
        </div>

        <div className="flex gap-2">
          {project.githubUrl && (
            <Button asChild variant="outline" size="sm" className="flex-1 bg-transparent">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-3 w-3" />
                Code
              </a>
            </Button>
          )}
          {project.demoUrl && (
            <Button asChild variant="default" size="sm" className="flex-1">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <Play className="mr-2 h-3 w-3" />
                Demo
              </a>
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
