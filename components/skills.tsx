import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming & Tools",
      skills: ["C", "C++", "Python", "SQL", "SAP ABAP", "Git", "GitHub", "VS Code", "Xcode"],
    },
    {
      title: "SAP & Cloud",
      skills: ["SAP Basis", "System Monitoring", "Kernel Upgrades", "AWS", "Cloud Management", "ETL"],
    },
    {
      title: "AI & Machine Learning",
      skills: ["U-Net", "SageMaker", "Gen AI", "LLM Fine-Tuning", "Amazon BedRock", "PartyRock"],
    },
    {
      title: "Soft Skills",
      skills: ["Problem Solving", "Adaptability", "Time Management", "Leadership", "Communication"],
    },
  ]

  return (
    <section id="skills" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Skills</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {skillCategories.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge key={skillIndex} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

