import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-center">
      <div className="space-y-4">
        <h1 className="text-4xl md:text-6xl font-bold">Hi, I'm Sai Tejaswar Reddy Dalli</h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Senior Software Engineer specializing in SAP, Cloud & AI
        </p>
        <p className="max-w-2xl text-muted-foreground">
          With expertise in SAP Basis Administration, Cloud Engineering, and AI/ML, I build robust enterprise solutions
          and innovative applications.
        </p>
        <div className="flex gap-4">
          <Button>
            <Mail className="mr-2 h-4 w-4" />
            Contact Me
          </Button>
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </Button>
          <Button variant="outline">
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </div>
    </section>
  )
}

