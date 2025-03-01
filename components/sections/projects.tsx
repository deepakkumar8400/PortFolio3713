import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Job Portal with AI Recommendations",
      description:
        "A job portal with AI-driven recommendations to match candidates with suitable job openings. Integrated machine learning algorithms to analyze resumes and job descriptions for better matching.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Machine Learning", "AI"],
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
    {
      title: "Trip Planning Portal with AI",
      description:
        "An AI-powered trip planning portal that suggests personalized itineraries based on user preferences and budget. Integrated OpenAI API for natural language processing and recommendation systems.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "OpenAI API", "Tailwind CSS", "Firebase"],
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
    {
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce platform with product management, cart functionality, payment integration, and user authentication.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://demo-link.com",
    },
  ]

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and learning
            experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Link href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </Link>
                <Link href={project.demo} target="_blank" rel="noopener noreferrer">
                  <Button size="sm" className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" className="flex items-center gap-2 mx-auto">
              <Github className="h-4 w-4" />
              View More on GitHub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

