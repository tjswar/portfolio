import { AppWindow, Cloud, Database, Brain } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  const projects = [
    {
      title: "Semantic Segmentation for Autonomous Vehicles",
      description:
        "Built an AI system for self-driving cars using U-Net architecture, optimized with GPU acceleration for real-time object detection.",
      icon: Brain,
      tags: ["AI", "Computer Vision", "GPU", "U-Net"],
    },
    {
      title: "Big Data Using Hadoop",
      description:
        "Implemented data analysis solutions using Hadoop ecosystem tools including Hive and Spark for large-scale data processing.",
      icon: Database,
      tags: ["Hadoop", "Big Data", "Hive", "Spark"],
    },
    {
      title: "Medilook iOS App",
      description: "Developed and published an iOS application providing medication information using Open FDA API.",
      icon: AppWindow,
      tags: ["iOS", "Swift", "REST API", "App Store"],
    },
    {
      title: "Instancify iOS App",
      description:
        "Created an AWS EC2 instance management app helping users save $50-100 monthly through better resource visibility.",
      icon: Cloud,
      tags: ["iOS", "AWS", "Cloud", "App Store"],
    },
  ]

  return (
    <section id="projects" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <project.icon className="h-5 w-5" />
                {project.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
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

