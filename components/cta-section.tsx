import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Calendar, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <Card className="border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-8 md:p-12 text-center">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Join the AI Revolution?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Connect with like-minded students, work on cutting-edge projects, and prepare for a career in artificial
              intelligence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Mail className="mr-2 h-5 w-5" />
                Join Our Club
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline">
                <Calendar className="mr-2 h-5 w-5" />
                Attend Next Meeting
              </Button>
            </div>

            <div className="text-sm text-muted-foreground">
              <p className="mb-1">Weekly meetings: Fridays at 3:00 PM</p>
              <p>Location: Pasadena City College, Room TBA</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
