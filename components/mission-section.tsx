import { Brain, Users, Lightbulb, Target } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const values = [
  {
    icon: Brain,
    title: "Innovation",
    description: "Pushing the boundaries of artificial intelligence through cutting-edge research and experimentation.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Building a community where students learn from each other and work together on impactful projects.",
  },
  {
    icon: Lightbulb,
    title: "Learning",
    description: "Providing hands-on experience with the latest AI technologies and methodologies.",
  },
  {
    icon: Target,
    title: "Impact",
    description: "Creating AI solutions that make a positive difference in our community and beyond.",
  },
]

export function MissionSection() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Mission</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            To empower students at Pasadena City College with the knowledge, skills, and network needed to excel in the
            rapidly evolving field of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif font-semibold text-lg text-foreground mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
