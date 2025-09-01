import { Code, Users, Award, Zap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    icon: Code,
    number: "25+",
    label: "Projects Completed",
    description: "Innovative AI solutions",
  },
  {
    icon: Users,
    number: "100+",
    label: "Contributors",
    description: "Students involved",
  },
  {
    icon: Award,
    number: "8",
    label: "Awards Won",
    description: "Competition victories",
  },
  {
    icon: Zap,
    number: "15+",
    label: "Technologies",
    description: "Frameworks mastered",
  },
]

export function ProjectsHero() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Our Projects</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover the innovative AI projects created by our talented members. From machine learning models to
            real-world applications, explore how we're pushing the boundaries of artificial intelligence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-4">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-primary mb-1">{stat.number}</div>
                <div className="font-serif font-semibold text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
