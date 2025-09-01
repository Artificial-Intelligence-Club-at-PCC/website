import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    number: "150+",
    label: "Active Members",
    description: "Students passionate about AI",
  },
  {
    number: "25+",
    label: "Projects Completed",
    description: "Real-world AI applications",
  },
  {
    number: "50+",
    label: "Workshops Held",
    description: "Learning opportunities",
  },
  {
    number: "15+",
    label: "Industry Partners",
    description: "Professional connections",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Our Impact</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Building the largest AI community at Pasadena City College
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="border-border text-center">
              <CardContent className="p-6">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="font-serif font-semibold text-lg text-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
