import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Code } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Freelance Developer",
      company: "Remote",
      period: "March 2023 - Present",
      type: "work",
      description: [
        "Developed and deployed web applications for clients, ensuring high-quality user experiences and scalable backend solutions.",
        "Collaborated with clients to gather requirements, design solutions, and deliver projects on time.",
        "Utilized modern technologies like React, Node.js, and MongoDB to build dynamic and responsive applications.",
      ],
      skills: ["React", "Node.js", "MongoDB", "Express", "Next.js"],
    },
    {
      title: "Open Source Contributor",
      company: "GitHub",
      period: "January 2023 - Present",
      type: "open-source",
      description: [
        "Contributed to open-source projects, including bug fixes, feature enhancements, and documentation improvements.",
        "Collaborated with global developers to improve project functionality and user experience.",
        "Actively participated in code reviews and provided constructive feedback to peers.",
      ],
      skills: ["Git", "GitHub", "Collaboration", "Code Review"],
    },
  ]

  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My professional journey and contributions to the tech community.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center">
                      {exp.type === "work" ? (
                        <Briefcase className="h-5 w-5 text-primary mr-3" />
                      ) : (
                        <Code className="h-5 w-5 text-primary mr-3" />
                      )}
                      <CardTitle className="text-xl">{exp.title}</CardTitle>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">{exp.company}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-600 dark:text-gray-400 flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

