import { GraduationCap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function About() {
  return (
    <section id="about" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">About Me</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold">California State University Dominguez Hills</h3>
              <p className="text-muted-foreground">Masters in Computer Science</p>
              <p className="text-sm text-muted-foreground">Advanced Software Engineering, Advanced Programming, HCI</p>
            </div>
            <div>
              <h3 className="font-semibold">Raghu Engineering College, India</h3>
              <p className="text-muted-foreground">Bachelor of Technology in Computer Science</p>
              <p className="text-sm text-muted-foreground">Python, Computer Organization, OOPS with Java</p>
            </div>
          </CardContent>
        </Card>
        <div className="space-y-4">
          <p>
            I'm a Senior Software Engineer based in Los Angeles, CA, with extensive experience in enterprise software
            development, cloud computing, and artificial intelligence.
          </p>
          <p>
            My journey in technology has led me from managing complex SAP infrastructures to developing innovative iOS
            applications and implementing cutting-edge AI solutions.
          </p>
          <p>
            I'm passionate about solving complex problems and creating efficient, scalable solutions that make a real
            impact.
          </p>
        </div>
      </div>
    </section>
  )
}

