import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import Seo from "@/components/seo";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  CheckCircle2,
  Zap,
  Bot,
  Globe,
  Users,
  BarChart3,
  Mail,
} from "lucide-react";

const services = [
  {
    icon: Zap,
    title: "AI Automation Systems",
    description: "Automate repetitive tasks across tools — no human needed.",
    features: [
      "Booking & reservations",
      "Lead qualification",
      "Customer support",
      "Payment + CRM sync",
      "Workflow triggers & alerts",
    ],
    badge: "Most Popular",
  },
  {
    icon: Bot,
    title: "AI Chatbots & Voice Assistants",
    description: "Smart assistants that talk, understand, and convert.",
    features: [
      "WhatsApp / Website chatbot",
      "Phone call voice bot",
      "FAQ + support handling",
      "Multilingual support",
    ],
  },
  {
    icon: Globe,
    title: "Website Creation",
    description: "Fast, modern, conversion-focused websites.",
    features: [
      "Landing pages",
      "Business websites",
      "Booking websites",
      "Integrations with analytics + CRM",
    ],
  },
  {
    icon: Users,
    title: "CRM & Sales Automations",
    description: "Never lose a lead again.",
    features: [
      "Auto follow-ups",
      "Lead pipelines",
      "Status tracking",
      "Notifications & reminders",
    ],
  },
  {
    icon: BarChart3,
    title: "Admin Dashboards & Analytics",
    description: "See everything happening — in one clean dashboard.",
    features: [
      "Custom dashboards",
      "Sales analytics",
      "Funnel insights",
      "Automation monitoring",
    ],
  },
  {
    icon: Zap,
    title: "n8n Automation (n8n Expert)",
    description: "Custom n8n workflows to connect tools, automate bookings, payments, and CRM syncing.",
    features: [
      "Custom n8n workflow development",
      "Booking & reservation automation",
      "CRM & payment integrations",
      "Webhooks & trigger-based automations",
      "Monitoring & error handling",
    ],
    badge: "n8n Expert",
  },
  {
    icon: Mail,
    title: "Email & Marketing Workflows",
    description: "Nurture, convert, retain — automatically.",
    features: [
      "Drip email campaigns",
      "Abandoned cart workflows",
      "Client reminders",
      "Re-engagement sequences",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div>
      <Seo
        title={"AI Automation Services — Chatbots, Voice Assistants, Dashboards | AurexAuto"}
        description={"Premium AI solutions: chatbots, voice assistants, CRM automation, and admin dashboards built to streamline operations."}
        pathname="/services"
      />
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <Card className="p-8 sm:p-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Accept bookings on your site — <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">chat & voice</span></h2>
                <p className="text-muted-foreground mt-2">Embed a chat or voice bot that takes bookings in-place and an admin panel to manage staff, services and logs.</p>
                <ul className="mt-4 space-y-2 text-sm text-foreground/90">
                  <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1"/> <span className="font-medium">No redirects</span> — higher conversions</li>
                  <li className="flex items-start gap-3"><Users className="w-5 h-5 text-cyan-400 mt-1"/> <span className="font-medium">Admin panel</span> — manage staff & services</li>
                  <li className="flex items-start gap-3"><Globe className="w-5 h-5 text-cyan-400 mt-1"/> <span className="font-medium">Flexible ownership</span> — hosted SaaS or custom build</li>
                </ul>
                <div className="mt-6 flex gap-3">
                  <Link href="/booking-bot-for-websites">
                    <Button>Know more</Button>
                  </Link>
                  <Link href="/contact">
                    <Button variant="ghost">Request demo</Button>
                  </Link>
                </div>
              </div>

              <div className="w-full md:w-1/3">
                <div className="rounded-lg p-4 text-center bg-gradient-to-br from-purple-900/5 to-cyan-900/5 border border-border/40">
                  <Bot className="w-12 h-12 mx-auto text-purple-500"/>
                  <p className="mt-2 font-medium text-foreground">Booking bot + Admin</p>
                  <p className="text-sm text-muted-foreground mt-1">Quick setup — embed with a snippet</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/3 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/3 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              What We{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Build</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Premium AI solutions designed to transform your business operations. From chatbots to custom dashboards, we build systems that work for you 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="relative bg-card/50 border-border/50 hover-elevate transition-all duration-300"
                data-testid={`card-service-${index}`}
              >
                {service.badge && (
                  <Badge className="absolute -top-3 right-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0">
                    {service.badge}
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Need a Custom Solution?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Every business is unique. Let's discuss your specific needs and create a tailored automation plan.
          </p>
          <Link href="/contact" data-testid="link-services-cta">
            <Button size="lg" data-testid="button-services-cta">
              Get a Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
