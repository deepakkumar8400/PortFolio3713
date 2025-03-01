import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Server, Cloud, Terminal, GitBranch, Cpu } from "lucide-react"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-6 w-6 text-primary" />,
      skills: ["Python", "Java", "JavaScript", "TypeScript"],
    },
    {
      title: "Frontend Development",
      icon: <Globe className="h-6 w-6 text-primary" />,
      skills: ["HTML", "CSS", "React", "Next.js"],
    },
    {
      title: "Backend Development",
      icon: <Server className="h-6 w-6 text-primary" />,
      skills: ["Node.js", "Express", "RESTful APIs"],
    },
    {
      title: "Databases",
      icon: <Database className="h-6 w-6 text-primary" />,
      skills: ["MongoDB", "MySQL", "Firebase"],
    },
    {
      title: "Cloud Services",
      icon: <Cloud className="h-6 w-6 text-primary" />,
      skills: ["AWS", "Google Cloud", "Firebase"],
    },
    {
      title: "Tools & Others",
      icon: <Terminal className="h-6 w-6 text-primary" />,
      skills: ["Git", "GitHub", "VS Code", "Docker"],
    },
    {
      title: "Version Control",
      icon: <GitBranch className="h-6 w-6 text-primary" />,
      skills: ["Git", "GitHub", "GitLab"],
    },
    {
      title: "Core CS Subjects",
      icon: <Cpu className="h-6 w-6 text-primary" />,
      skills: ["Data Structures", "Algorithms", "DBMS", "OS"],
    },
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I've worked with a variety of technologies and tools throughout my journey as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {category.icon}
                  <h3 className="text-lg font-semibold ml-3">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="flex items-center text-gray-600 dark:text-gray-400">
                      <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

