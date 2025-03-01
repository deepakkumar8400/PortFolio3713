import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, BadgeIcon as Certificate } from "lucide-react"

export default function Education() {
  const education = [
    {
      institution: "Noida Institute of Engineering & Technology",
      degree: "Bachelor of Technology in Computer Science",
      period: "2022 - 2026",
      location: "Greater Noida, Uttar Pradesh",
      grade: "CGPA: 8.0",
    },
    {
      institution: "Shivam Intermediate College",
      degree: "Class XII, UP Board",
      period: "2020 - 2021",
      location: "Sonbhadra, Uttar Pradesh",
      grade: "Percentage: 84%",
    },
    {
      institution: "Jagdishwar Public School",
      degree: "Class X, UP Board",
      period: "2018 - 2019",
      location: "Sonbhadra, Uttar Pradesh",
      grade: "Percentage: 86%",
    },
  ]

  const certifications = [
    "Coursera - Web Development with React",
    "Infosys SpringBoard - Python Programming",
    "Forage - Software Engineering Virtual Experience",
    "IIT Kanpur - Machine Learning Fundamentals",
    "STP Computer Education - Full Stack Development",
  ]

  const achievements = [
    "Completed over 500+ problems on LeetCode and GeeksforGeeks",
    'Awarded "Best Project" in college for the AI-powered Trip Planning Portal',
    "Recognized as a top contributor in open-source projects on GitHub",
    "Active member of the college coding club",
    "Volunteered for NSS (National Service Scheme)",
  ]

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Education & Achievements</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            My academic background, certifications, and notable achievements.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            {education.map((edu, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">{edu.institution}</CardTitle>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.degree}</p>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline">{edu.period}</Badge>
                    <span className="text-sm text-primary font-medium">{edu.grade}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{edu.location}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <Certificate className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Certifications</h3>
            </div>

            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {certifications.map((cert, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-400">{cert}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="flex items-center mb-4">
              <Award className="h-6 w-6 text-primary mr-3" />
              <h3 className="text-xl font-semibold">Achievements</h3>
            </div>

            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="w-2 h-2 rounded-full bg-primary mt-2 mr-3"></div>
                      <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

