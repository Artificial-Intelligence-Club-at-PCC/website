import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BoardSection } from "@/components/board-section"

export default function BoardPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Board Members</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated leaders who drive our AI club forward, fostering innovation and building community at
              Pasadena City College.
            </p>
          </div>
          <BoardSection />
        </div>
      </main>
      <Footer />
    </div>
  )
}
