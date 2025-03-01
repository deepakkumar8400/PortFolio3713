import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, MapPin, Mail, Phone } from "lucide-react"

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm a passionate software developer with a focus on web development and AI solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Who I Am</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm a Computer Science student at Noida Institute of Engineering & Technology with a passion for building
              innovative web applications and AI-powered solutions. I enjoy solving complex problems and creating
              user-friendly experiences.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Currently, I'm focused on expanding my knowledge in cloud technologies and machine learning while working
              on freelance projects and contributing to open-source communities.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <Card>
                <CardContent className="p-4 flex items-center">
                  <MapPin className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">Greater Noida, Delhi NCR</span>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center">
                  <Mail className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700 dark:text-gray-300 text-sm">0221cs135@niet.co.in</span>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 flex items-center">
                  <Phone className="h-5 w-5 text-primary mr-3" />
                  <span className="text-gray-700 dark:text-gray-300">+91-8400663713</span>
                </CardContent>
              </Card>
            </div>

            <Button className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Download Resume
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="bg-primary/10 rounded-lg p-6 text-center">
                <h4 className="text-4xl font-bold text-primary mb-2">1+</h4>
                <p className="text-gray-600 dark:text-gray-400">Years of Experience</p>
              </div>

              <div className="bg-primary/10 rounded-lg p-6 text-center">
                <h4 className="text-4xl font-bold text-primary mb-2">500+</h4>
                <p className="text-gray-600 dark:text-gray-400">Problems Solved</p>
              </div>
            </div>

            <div className="space-y-4 mt-8">
              <div className="bg-primary/10 rounded-lg p-6 text-center">
                <h4 className="text-4xl font-bold text-primary mb-2">3+</h4>
                <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
              </div>

              <div className="bg-primary/10 rounded-lg p-6 text-center">
                <h4 className="text-4xl font-bold text-primary mb-2">20+</h4>
                <p className="text-gray-600 dark:text-gray-400">Certifications</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

