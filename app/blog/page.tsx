import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { BlogGrid } from "@/components/blog-grid"
import { BlogHero } from "@/components/blog-hero"

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <BlogHero />
        <BlogGrid />
      </main>
      <Footer />
    </div>
  )
}
