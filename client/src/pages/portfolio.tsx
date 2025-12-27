import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  TrendingUp,
  Scissors,
  Stethoscope,
  Home as HomeIcon,
  ShoppingCart,
  Clock,
  DollarSign,
  Users,
} from "lucide-react";

const projects = [
  {
    icon: Scissors,
    title: "Salon Booking Assistant",
    industry: "Beauty & Wellness",
    description: "Automated website bookings + WhatsApp reminders for a busy hair salon.",
    results: [
      { label: "No-shows reduced", value: "75%" },
      { label: "Hours saved weekly", value: "6+" },
      { label: "Customer satisfaction", value: "98%" },
    ],
    technologies: ["WhatsApp API", "Booking System", "SMS Reminders"],
  },
  {
    icon: Stethoscope,
    title: "Dental Appointment Bot",
    industry: "Healthcare",
    description: "Voice + chatbot scheduling system with auto confirmations and recalls.",
    results: [
      { label: "Booking rate", value: "+40%" },
      { label: "Staff time saved", value: "15hrs/wk" },
      { label: "Patient recalls", value: "2x" },
    ],
    technologies: ["Voice AI", "Chatbot", "CRM Integration"],
  },
  {
    icon: HomeIcon,
    title: "Real Estate Lead Assistant",
    industry: "Real Estate",
    description: "Chatbot that qualifies leads & books property viewings automatically.",
    results: [
      { label: "Lead response time", value: "<1min" },
      { label: "Qualified leads", value: "+60%" },
      { label: "Viewings booked", value: "3x" },
    ],
    technologies: ["Lead Qualification", "Chatbot", "CRM Sync"],
  },
  {
    icon: ShoppingCart,
    title: "Ecommerce Support & Recovery",
    industry: "E-commerce",
    description: "AI support + abandoned cart emails to recover lost sales.",
    results: [
      { label: "Cart recovery", value: "25%" },
      { label: "Support tickets", value: "-50%" },
      { label: "Revenue increase", value: "+18%" },
    ],
    technologies: ["Email Automation", "AI Support", "Analytics"],
  },
];

const metrics = [
  { icon: Clock, value: "500+", label: "Hours Saved Monthly" },
  { icon: DollarSign, value: "$2M+", label: "Revenue Generated" },
  { icon: Users, value: "50K+", label: "Customers Served" },
];

export default function PortfolioPage() {
  return (
    <div>
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Real Solutions.{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Real Results.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              See how we've helped businesses automate operations, save time, and increase revenue with AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-12 border-y border-border/50 bg-card/30">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center" data-testid={`metric-${index}`}>
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-3">
                  <metric.icon className="w-6 h-6 text-purple-400" />
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  {metric.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border/50 hover-elevate transition-all duration-300"
                data-testid={`card-portfolio-${index}`}
              >
                <CardHeader>
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                      <project.icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {project.industry}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4 mb-4">
                    {project.results.map((result, rIndex) => (
                      <div key={rIndex} className="text-center p-3 rounded-lg bg-muted/50">
                        <div className="text-lg font-bold text-cyan-400">{result.value}</div>
                        <div className="text-xs text-muted-foreground">{result.label}</div>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, tIndex) => (
                      <Badge key={tIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Be Our Next Success Story?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Let's discuss how we can automate your business and achieve similar results.
          </p>
          <Link href="/contact" data-testid="link-portfolio-cta">
            <Button size="lg" data-testid="button-portfolio-cta">
              Start Your Project
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
