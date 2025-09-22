"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

const slides = [
  {
    id: 1,
    image: "/ai-club-rush-with-robot-dog.png",
    title: "Innovating the Future",
    subtitle: "Our members are building tomorrow's AI solutions today",
    description: "From neural networks to computer vision, we're pushing the boundaries of what's possible.",
  },
  {
    id: 2,
    image: "/ai-club-ai-horizons-group-pic.png",
    title: "Knowledge Sharing",
    subtitle: "Weekly presentations and workshops",
    description: "Learn and share your own discoveries with fellow AI enthusiasts.",
  },
  {
    id: 3,
    image: "/ai-club-ai-horizons-booth.png",
    title: "Collaborative Projects",
    subtitle: "Building AI solutions together",
    description: "Join forces with talented peers to create impactful AI applications and research.",
  },
  {
    id: 4,
    image: "/ai-club-members-at-tech-conference-networking-with.png",
    title: "Industry Connections",
    subtitle: "Networking with AI professionals",
    description: "Connect with leading companies and researchers in the artificial intelligence field.",
  },
]

export function HeroSlideshow() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (!isPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="relative h-[70vh] min-h-[500px] overflow-hidden bg-muted">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative h-full flex items-center justify-center">
                <div className="text-center text-white max-w-4xl px-4">
                  <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance">
                    {slide.title}
                  </h1>
                  <p className="text-xl md:text-2xl mb-6 text-balance opacity-90">{slide.subtitle}</p>
                  <p className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-80">{slide.description}</p>
                  <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button size="lg" className="bg-primary hover:bg-primary/90">
                      Join Our Club
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20"
                    >
                      View Projects
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Controls */}
      <div className="absolute inset-y-0 left-4 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={goToPrevious}
          className="bg-black/20 hover:bg-black/40 text-white border-white/20"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
      </div>

      <div className="absolute inset-y-0 right-4 flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={goToNext}
          className="bg-black/20 hover:bg-black/40 text-white border-white/20"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Play/Pause Control */}
      <div className="absolute top-4 right-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlayPause}
          className="bg-black/20 hover:bg-black/40 text-white border-white/20"
        >
          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
        </Button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2">
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white" : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
