import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Professional Experience</h2>
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle>Senior Software Engineer</CardTitle>
              <p className="text-muted-foreground">INFOSYS PVT LTD, India</p>
            </div>
            <Badge>Feb 2020 - Jan 2023</Badge>
          </div>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>
              Led SAP Infrastructure management, achieving 99.8% system availability and 20% reduction in downtime
            </li>
            <li>Implemented robust security measures through SAP roles and authorization configuration</li>
            <li>Executed critical maintenance tasks including kernel upgrades and system health checks</li>
            <li>Coordinated cross-functional issue resolution using advanced diagnostic tools</li>
          </ul>
        </CardContent>
      </Card>
    </section>
  )
}

