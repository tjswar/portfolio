"use client"

import { useState, useEffect } from "react"
import { Github, Linkedin, Mail, MoveDown, ExternalLink, FileText, Download, X, Menu, Smartphone, Cloud, Car, Brain, Award, CloudLightning, Code } from "lucide-react"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { SkillProgress } from "@/components/skill-progress"
import { AnimatedCard } from "@/components/animated-card"
import Image from "next/image"
import { cn } from "@/lib/utils"
import ParticlesBackground from "@/components/particles-background"
import type { LucideIcon } from "lucide-react"
import { AnimatedLink } from "@/components/animated-link"
import { VideoBackground } from "@/components/video-background"
import { GalaxianBackground } from "@/components/galaxian-background"

// Add this type definition near the top of your file
type Certification = {
  title: string
  description: string
  icon: LucideIcon
  link: string
}

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [isResumeOpen, setIsResumeOpen] = useState(false)
  const { scrollY } = useScroll()

  // Skills data with percentages
  const skills = {
    programming: [
      { name: "Python", percentage: 90 },
      { name: "C/C++", percentage: 75 },
      { name: "SQL", percentage: 88 },
      { name: "SAP ABAP", percentage: 92 },
      { name: "Docker/OpenGL", percentage: 85 },
      { name: "WebGL", percentage: 72 },
    ],
    cloud: [
      { name: "AWS Cloud", percentage: 90 },
      { name: "Hadoop/HDFS", percentage: 80 },
      { name: "ETL Processes", percentage: 78 },
      { name: "Data Analytics", percentage: 85 },
      { name: "System Monitoring", percentage: 92 },
    ],
    ai: [
      { name: "U-Net Architecture", percentage: 88 },
      { name: "SageMaker", percentage: 85 },
      { name: "LLM Fine-tuning", percentage: 86 },
      { name: "Computer Vision", percentage: 90 },
      { name: "Generative AI", percentage: 85 },
    ],
    softSkills: [
      { name: "Problem Solving", percentage: 95 },
      { name: "Leadership", percentage: 98 },
      { name: "Communication", percentage: 92 },
      { name: "Time Management", percentage: 98 },
      { name: "Adaptability", percentage: 90 },
    ],
  }

  const projects = [
    {
      title: "Medilook",
      description: `iOS application providing comprehensive medication information using Open FDA API. 
        Developed a user-friendly interface for accessing drug details, side effects, and interactions. 
        Implemented real-time search and offline data caching for better user experience.`,
      icon: Smartphone,
      gradient: "from-blue-500 to-purple-500",
      tags: ["iOS", "Swift", "REST API", "App Store", "FDA API"],
      link: "https://apps.apple.com/us/app/medilook/id6738562990",
    },
    {
      title: "Instancify",
      description: `Cloud cost optimization tool for AWS EC2 instances. Built a dashboard for tracking 
        and managing cloud resources, resulting in $50-100 monthly savings. Implemented automated 
        resource scheduling and cost analytics features.`,
      icon: Cloud,
      gradient: "from-purple-500 to-pink-500",
      tags: ["AWS", "React", "Node.js", "Cost Management", "Cloud"],
      link: "https://www.instancify.online",
    },
    {
      title: "Semantic Segmentation for Autonomous Vehicles",
      description: `Developed a U-Net-based semantic segmentation model for scene understanding in autonomous vehicles. 
        Implemented pixel-wise classification for road scenes in real-time, achieving high accuracy in detecting objects 
        like pedestrians, vehicles, and road signs. Optimized using GPU acceleration and Docker containerization.`,
      icon: Car,
      gradient: "from-green-500 to-blue-500",
      tags: ["U-Net", "Computer Vision", "GPU Acceleration", "Docker", "Python"],
      link: "https://github.com/tjswar/SelfDriving-Unet.git",
    },
    {
      title: "Domain Specific LLM",
      description: `Fine-tuned Llama 2 model for specialized domain knowledge in medical, finance, and IT sectors. 
        Leveraged AWS SageMaker for training and deployment, achieving enhanced accuracy in text classification tasks.
        Implemented efficient prompt engineering techniques for better results.`,
      icon: Brain,
      gradient: "from-orange-500 to-red-500",
      tags: ["LLM", "AWS SageMaker", "AI", "NLP", "Jupyter"],
      link: "https://github.com/tjswar/LLM-Training.git",
    },
  ]

  // Then update your certifications array declaration
  const certifications: Certification[] = [
    {
      title: "Introducing Generative AI with AWS",
      description: "Comprehensive knowledge of machine learning techniques and deployment using AWS SageMaker",
      icon: CloudLightning,
      link: "https://www.udacity.com/certificate/e/dbce36c2-7226-11ef-ba67-ef54d6f2015a"
    },
    {
      title: "AWS Academy Graduate - AWS Academy MLU",
      description: "Proficiency in machine learning applications and AWS implementation strategies",
      icon: Brain,
      link: "https://www.credly.com/badges/b4b20a52-8678-49fe-8042-53556a5624ad/linked_in_profile"
    },
    {
      title: "Google Cloud Professional",
      description: "Proficiency in cloud architecture and secure operations within Google Cloud",
      icon: Cloud,
      link: "https://partner.cloudskillsboost.google/public_profiles/8711e5dd-a488-48c7-8232-f30eab38f500"
    },
    {
      title: "Scientific Computing with Python",
      description: "Expertise in Python programming for scientific applications",
      icon: Code,
      link: "https://www.freecodecamp.org/certification/fcc92157f8a-aaff-419d-8776-9b0c3d6f56c0"
    },
  ]

  // Add these state variables at the top of your Home component
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  // Update the handleSubmit function
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')
    
    try {
      // Create a button to trigger the email client
      const emailContent = `Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`

      // Create a button element
      const emailButton = document.createElement('a')
      emailButton.href = `mailto:saitejaswar84@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${encodeURIComponent(emailContent)}`
      emailButton.style.display = 'none'
      document.body.appendChild(emailButton)
      
      // Trigger click after a short delay
      setTimeout(() => {
        emailButton.click()
        document.body.removeChild(emailButton)
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' })
      }, 500)

    } catch (error) {
      setFormStatus('error')
      console.error('Error sending message:', error)
    }
  }

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Parallax effects
  const y = useTransform(scrollY, [0, 1000], [0, 200])

  const sections = ["home", "about", "skills", "projects", "contact"]

  const handleScroll = (section: string) => {
    const element = document.getElementById(section)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <>
      {/* Navigation */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b"
      >
        <div className="container flex items-center justify-between h-16 px-6 mx-auto">
          <motion.span 
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            Sai's Portfolio
          </motion.span>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => handleScroll(section)}
                className={cn(
                  "capitalize hover:text-primary transition-colors",
                  activeSection === section && "text-purple-400",
                )}
              >
                {section}
              </button>
            ))}
            <div className="hidden md:flex items-center gap-4">
              <motion.a
                href="https://www.linkedin.com/in/tejaswar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Linkedin className="w-5 h-5 text-purple-400" />
              </motion.a>
              
              <motion.a
                href="https://github.com/tjswar"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-pink-500/10 hover:bg-pink-500/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Github className="w-5 h-5 text-pink-400" />
              </motion.a>
              
              <motion.a
                href="mailto:saitejaswar84@gmail.com"
                className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Mail className="w-5 h-5 text-purple-400" />
              </motion.a>
            </div>
            <Dialog open={isResumeOpen} onOpenChange={setIsResumeOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="gap-2">
                  <FileText className="w-4 h-4" />
                  Resume
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl h-[80vh]">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">Resume</h2>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      onClick={() => {
                        const resumePath = '/resume.pdf'
                        // Check if file exists
                        fetch(resumePath).then(response => {
                          if (response.ok) {
                            window.open(resumePath, '_blank')
                          } else {
                            // Show error message if file not found
                            alert('Resume file is currently being updated. Please try again later.')
                          }
                        })
                      }}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download PDF
                    </Button>
                    <Button variant="ghost" size="icon" onClick={() => setIsResumeOpen(false)}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                <div className="bg-card rounded-lg p-8 h-full overflow-y-auto">
                  <div className="space-y-6">
                    <div>
                      <h1 className="text-2xl font-bold">SAI TEJASWAR REDDY DALLI</h1>
                      <p className="text-muted-foreground">Los Angeles, CA, USA | +1 (562) 569-3720</p>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">EDUCATION</h2>
                      <div className="space-y-4">
                        <div>
                          <h3 className="font-semibold">California State University Dominguez Hills</h3>
                          <p className="text-sm text-muted-foreground">Master of Science in Computer Science</p>
                          <p className="text-xs text-muted-foreground">GPA: 3.50/4.00</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            Key courses: Advanced Programming, Software Engineering, HCI, Computer Graphics
                          </p>
                        </div>
                        <div>
                          <h3 className="font-semibold">Raghu Engineering College</h3>
                          <p className="text-sm text-muted-foreground">B.Tech in Computer Science Engineering</p>
                          <p className="text-xs text-muted-foreground">Jul 2015 - Jul 2019</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">PROFESSIONAL EXPERIENCE</h2>
                      <div>
                        <h3 className="font-semibold">Senior Software Engineer</h3>
                        <p className="text-muted-foreground">INFOSYS PVT LTD, India | Feb 2020-Jan 2023</p>
                        <ul className="list-disc list-inside mt-2 space-y-1 text-muted-foreground">
                          <li>Led SAP Infrastructure with 99.8% availability</li>
                          <li>Implemented security configurations and access controls</li>
                          <li>Executed maintenance and kernel upgrades</li>
                          <li>Directed support and issue resolution</li>
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">PROJECTS</h2>
                      <ul className="space-y-4">
                        {projects.map((project, index) => (
                          <li key={index}>
                            <span className="font-semibold">{project.title}</span>
                            <p className="text-muted-foreground">{project.description}</p>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h2 className="text-xl font-semibold mb-2">CERTIFICATIONS</h2>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {certifications.map((cert, index) => (
                          <li key={index}>
                            <AnimatedLink href={cert.link} className="block">
                              <AnimatedCard className="p-6 backdrop-blur-sm bg-card/50 tech-border glow">
                                <div className="flex items-start gap-4">
                                  <div className="p-3 rounded-lg bg-purple-500/10">
                                    <cert.icon className="w-6 h-6 text-purple-400" />
                                  </div>
                                  <div>
                                    <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                                    <p className="text-muted-foreground">{cert.description}</p>
                                  </div>
                                </div>
                              </AnimatedCard>
                            </AnimatedLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          </nav>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="w-5 h-5" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col h-full">
                <div className="flex-1">
                  {sections.map((section) => (
                    <button
                      key={section}
                      onClick={() => {
                        handleScroll(section)
                        // Close the sheet after clicking
                        const closeButton = document.querySelector('[data-radix-collection-item]')
                        if (closeButton instanceof HTMLElement) {
                          closeButton.click()
                        }
                      }}
                      className={cn(
                        "w-full text-left px-4 py-2 capitalize hover:bg-purple-500/10 transition-colors",
                        activeSection === section && "text-purple-400 bg-purple-500/5"
                      )}
                    >
                      {section}
                    </button>
                  ))}
                </div>
                
                {/* Social Icons in mobile menu */}
                <div className="flex justify-center gap-4 py-4 border-t">
                  <motion.a
                    href="https://www.linkedin.com/in/tejaswar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Linkedin className="w-5 h-5 text-purple-400" />
                  </motion.a>
                  
                  <motion.a
                    href="https://github.com/tjswar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-pink-500/10 hover:bg-pink-500/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github className="w-5 h-5 text-pink-400" />
                  </motion.a>
                  
                  <motion.a
                    href="mailto:saitejaswar84@gmail.com"
                    className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Mail className="w-5 h-5 text-purple-400" />
                  </motion.a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.header>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section
          id="home"
          className="relative min-h-screen flex flex-col justify-center items-center text-center p-4 overflow-hidden"
        >
          <div className="absolute inset-0">
            <ParticlesBackground />
          </div>
          <div className="relative space-y-8 max-w-3xl">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-7xl font-bold animate-gradient">
                Sai Tejaswar Reddy Dalli
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground glow-text">
                Master's Student at California State University Dominguez Hills
              </p>
              
              <div className="relative h-[200px] w-full my-8">
                <GalaxianBackground />
              </div>
              
              <p className="text-muted-foreground max-w-2xl mx-auto animate-fade-in opacity-0 [--animation-delay:400ms]">
                Crafting innovative solutions in SAP Infrastructure, Cloud Engineering, and AI/ML. Based in Los Angeles,
                CA.
              </p>
            </div>
            <div className="flex gap-4 justify-center pt-4 animate-fade-in opacity-0 [--animation-delay:600ms]">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" className="backdrop-blur-sm bg-background/30">
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </Button>
              <Button variant="outline" className="backdrop-blur-sm bg-background/30">
                <Linkedin className="mr-2 h-4 w-4" />
                LinkedIn
              </Button>
            </div>
          </div>
          <MoveDown className="w-6 h-6 absolute bottom-8 animate-bounce" />
        </section>

        {/* About Section */}
        <section id="about" className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-background to-purple-500/5" />
          <div className="container max-w-4xl mx-auto relative">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl font-bold">About Me</h2>
                <p className="text-muted-foreground">
                  Results-driven Software Engineer with expertise in SAP Basis Administration and 
                  emerging AI technologies. Proven track record of optimizing SAP infrastructure,
                  reducing system downtime by 20% while maintaining 99.8% availability. Skilled in
                  cloud engineering with AWS, machine learning implementation, and mobile
                  application development. Combines technical acumen in multiple programming
                  languages with practical experience in security configuration and system maintenance.
                  Passionate about leveraging AI for practical applications, with specialized knowledge in
                  U-Net architecture and LLM fine-tuning. Seeking to apply diverse technical expertise and
                  leadership capabilities to innovative technology solutions.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">3+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-pink-400">20+</div>
                    <div className="text-sm text-muted-foreground">Projects</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">2</div>
                    <div className="text-sm text-muted-foreground">iOS Apps</div>
                  </div>
                </div>
              </div>
              <Card className="backdrop-blur-sm bg-card/50 tech-border glow">
                <CardHeader>
                  <CardTitle>Education</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">California State University Dominguez Hills</h3>
                    <p className="text-sm text-muted-foreground">Master of Science in Computer Science</p>
                    <p className="text-xs text-muted-foreground">GPA: 3.50/4.00</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      Key courses: Advanced Programming, Software Engineering, HCI, Computer Graphics
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Raghu Engineering College</h3>
                    <p className="text-sm text-muted-foreground">B.Tech in Computer Science Engineering</p>
                    <p className="text-xs text-muted-foreground">Jul 2015 - Jul 2019</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="relative py-20 px-4 bg-grid-white/[0.02]">
          <div className="container max-w-4xl mx-auto relative">
            <h2 className="text-3xl font-bold mb-12 text-center">Skills & Expertise</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <AnimatedCard className="p-6 backdrop-blur-sm bg-card/50 tech-border glow">
                <h3 className="text-xl font-semibold mb-6 text-purple-400">Programming</h3>
                <div className="space-y-4">
                  {skills.programming.map((skill) => (
                    <SkillProgress key={skill.name} name={skill.name} percentage={skill.percentage} color="purple" />
                  ))}
                </div>
              </AnimatedCard>

              <AnimatedCard className="p-6 backdrop-blur-sm bg-card/50 tech-border glow">
                <h3 className="text-xl font-semibold mb-6 text-pink-400">Cloud & Data</h3>
                <div className="space-y-4">
                  {skills.cloud.map((skill) => (
                    <SkillProgress key={skill.name} name={skill.name} percentage={skill.percentage} color="pink" />
                  ))}
                </div>
              </AnimatedCard>

              <AnimatedCard className="p-6 backdrop-blur-sm bg-card/50 tech-border glow">
                <h3 className="text-xl font-semibold mb-6 text-purple-400">AI & ML</h3>
                <div className="space-y-4">
                  {skills.ai.map((skill) => (
                    <SkillProgress key={skill.name} name={skill.name} percentage={skill.percentage} color="purple" />
                  ))}
                </div>
              </AnimatedCard>

              <AnimatedCard className="p-6 backdrop-blur-sm bg-card/50 tech-border glow">
                <h3 className="text-xl font-semibold mb-6 text-pink-400">Soft Skills</h3>
                <div className="space-y-4">
                  {skills.softSkills.map((skill) => (
                    <SkillProgress key={skill.name} name={skill.name} percentage={skill.percentage} color="pink" />
                  ))}
                </div>
              </AnimatedCard>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="relative py-20 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/5 to-background" />
          <div className="container max-w-6xl mx-auto relative">
            <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="group overflow-hidden tech-border hover:glow transition-all duration-300">
                    <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient}`}>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <project.icon className="w-20 h-20 text-white/80" />
                      </div>
                      <div className="absolute inset-0 bg-black/20" />
                      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
                    </div>
                    <CardHeader>
                      <CardTitle className="flex items-center justify-between">
                        <AnimatedLink href={project.link} className="text-xl hover:text-purple-400 transition-colors">
                          {project.title}
                        </AnimatedLink>
                        <motion.a
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </motion.a>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <motion.div
                            key={tagIndex}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: index * 0.1 + tagIndex * 0.1 }}
                          >
                            <Badge
                              variant="secondary"
                              className="bg-purple-500/10 hover:bg-purple-500/20 transition-colors"
                            >
                              {tag}
                            </Badge>
                          </motion.div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="relative py-20 px-4">
          <div className="container max-w-4xl mx-auto relative">
            <h2 className="text-3xl font-bold mb-12 text-center animate-gradient">Certifications</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <AnimatedLink 
                  key={index}
                  href={cert.link}
                  className="block"
                >
                  <AnimatedCard className="p-6 backdrop-blur-sm bg-card/50 tech-border glow">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-purple-500/10">
                        <cert.icon className="w-6 h-6 text-purple-400" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                        <p className="text-muted-foreground">{cert.description}</p>
                      </div>
                    </div>
                  </AnimatedCard>
                </AnimatedLink>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section with interactive form */}
        <section id="contact" className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-grid-white/[0.02]" />
          <div className="container max-w-4xl mx-auto relative">
            <AnimatedCard className="backdrop-blur-sm bg-card/50 tech-border glow">
              <CardContent className="p-8">
                <h2 className="text-3xl font-bold mb-8 text-center animate-gradient">Get In Touch</h2>
                <form onSubmit={handleSubmit} className="grid gap-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <label className="text-sm font-medium">Name</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-background/50 border border-input focus:border-purple-500 transition-colors"
                        placeholder="Your name"
                      />
                    </motion.div>
                    <motion.div
                      className="space-y-2"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                    >
                      <label className="text-sm font-medium">Email</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="w-full px-4 py-2 rounded-lg bg-background/50 border border-input focus:border-purple-500 transition-colors"
                        placeholder="your@email.com"
                      />
                    </motion.div>
                  </div>
                  <motion.div
                    className="space-y-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <label className="text-sm font-medium">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                      required
                      className="w-full px-4 py-2 rounded-lg bg-background/50 border border-input focus:border-purple-500 transition-colors min-h-[150px]"
                      placeholder="Your message..."
                    />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                      disabled={formStatus === 'loading'}
                    >
                      {formStatus === 'loading' ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 border-2 border-white/50 border-t-white rounded-full animate-spin" />
                          Sending...
                        </span>
                      ) : 'Send Message'}
                    </Button>
                  </motion.div>
                  {formStatus === 'error' && (
                    <p className="text-red-500 text-center">
                      Failed to send message. Please try again or contact me directly.
                    </p>
                  )}
                  {formStatus === 'success' && (
                    <p className="text-green-500 text-center">
                      Message sent successfully! I'll get back to you soon.
                    </p>
                  )}
                </form>
              </CardContent>
            </AnimatedCard>
          </div>
        </section>
      </main>
    </>
  )
}

