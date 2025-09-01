import { BlogCard } from "./blog-card"
import { blogPosts } from "@/lib/blog-data"
import { Badge } from "@/components/ui/badge"

const categories = ["All", "Machine Learning", "Deep Learning", "Computer Vision", "NLP", "Ethics", "Tutorials"]

export function BlogGrid() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={category === "All" ? "default" : "outline"}
              className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              {category}
            </Badge>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
