import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <Card>
        <CardHeader>
          <CardTitle>Let's Connect</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6">
            <Button variant="outline" className="h-auto flex-col py-4">
              <Mail className="h-6 w-6 mb-2" />
              <span className="font-semibold">Email</span>
              <span className="text-sm text-muted-foreground">Get in touch</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col py-4">
              <Phone className="h-6 w-6 mb-2" />
              <span className="font-semibold">Phone</span>
              <span className="text-sm text-muted-foreground">+1 (562) 569-3720</span>
            </Button>
            <Button variant="outline" className="h-auto flex-col py-4">
              <MapPin className="h-6 w-6 mb-2" />
              <span className="font-semibold">Location</span>
              <span className="text-sm text-muted-foreground">Los Angeles, CA</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </section>
  )
}

