import Link from "next/link"
import Image from "next/image" // Import the Next.js Image component
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

export default function Projects() {
  // Corrected: Personalized project data with placeholders for you to update
  const projects = [
    {
      title: "Enterprise Banking System",
      description:
        "A secure, full-stack banking platform with JWT authentication, RESTful APIs for fund transfers, and a real-time transaction dashboard built with React.",
      image: "/images/project-banking.jpg", // ⚠️ Update with your image path
      tags: ["React", "Node.js", "Express", "MySQL", "JWT"],
      github: "https://github.com/deepakkumar8400/YOUR-BANKING-REPO", // ⚠️ Update this link
      demo: "https://your-live-demo-link.com", // ⚠️ Update this link
    },
    {
      title: "Healthcare Management Platform",
      description:
        "A MERN stack application for patients to book appointments and manage schedules. Features a doctor portal, admin dashboard, and Stripe API for payment processing.",
      image: "/images/project-healthcare.jpg", // ⚠️ Update with your image path
      tags: ["Next.js", "MongoDB", "Stripe API", "Cloudinary", "Socket.io"],
      github: "https://github.com/deepakkumar8400/YOUR-HEALTHCARE-REPO", // ⚠️ Update this link
      demo: "https://your-live-demo-link.com", // ⚠️ Update this link
    },
    {
      title: "AI-Powered Job Portal",
      description:
        "An intelligent job portal that uses AI to match candidates with job openings. Features resume uploads via Cloudinary and role-based access for applicants and employers.",
      image: "/images/project-job-portal.jpg", // ⚠️ Update with your image path
      tags: ["React", "Node.js", "AI", "Machine Learning", "MongoDB"],
      github: "https://github.com/deepakkumar8400/YOUR-JOB-PORTAL-REPO", // ⚠️ Update this link
      demo: "https://your-live-demo-link.com", // ⚠️ Update this link
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've built. Each one was a unique challenge and a great learning experience.
          </p>
        </div>

        {/* Improved: Better responsive grid for 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            // Improved: Using a more stable key than index
            <Card key={project.title} className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 transition-shadow duration-300">
              {/* Improved: Using Next.js Image component for performance */}
              <div className="relative h-48 w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="flex flex-col flex-grow p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 flex-grow">
                  <CardDescription className="mb-4 line-clamp-3">{project.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-0 pt-6 flex justify-between">
                  {/* Improved: Using asChild prop for Button and Link */}
                  <Button variant="outline" size="sm" className="flex items-center gap-2" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" className="flex items-center gap-2" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          {/* Corrected: Link points to your GitHub profile */}
          <Button variant="outline" className="flex items-center gap-2 mx-auto" asChild>
            <a href="https://github.com/deepakkumar8400" target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
