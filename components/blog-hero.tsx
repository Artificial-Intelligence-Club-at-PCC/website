import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function BlogHero() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-background to-accent/5 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">AI Club Blog</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed">
          Discover the latest insights, tutorials, and breakthroughs in artificial intelligence from our community of
          passionate students and researchers.
        </p>

        <div className="max-w-md mx-auto flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input placeholder="Search articles..." className="pl-10 bg-background/50 backdrop-blur" />
          </div>
          <Button variant="default">Search</Button>
        </div>
      </div>
    </section>
  )
}
