import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Bot,
  Mail,
  Users,
  Clock,
  Shield,
  TrendingUp,
  Star,
  Play,
} from "lucide-react";
import heroImage from "@assets/generated_images/ai_dashboard_interface_mockup.png";

const stats = [
  { value: "500+", label: "Businesses" },
  { value: "99.9%", label: "Uptime" },
  { value: "50M+", label: "Messages" },
  { value: "24/7", label: "Support" },
];

const features = [
  {
    icon: Bot,
    title: "AI Receptionist",
    description: "24/7 intelligent voice and chat support that never sleeps",
  },
  {
    icon: Users,
    title: "CRM Automation",
    description: "Streamline customer relationships with smart automation",
  },
  {
    icon: Mail,
    title: "Email & SMS Workflows",
    description: "Automated messaging that engages at the right time",
  },
];

const benefits = [
  { icon: Zap, title: "10x Faster", description: "Automate repetitive tasks" },
  {
    icon: TrendingUp,
    title: "Boost Revenue",
    description: "Never miss a lead",
  },
  { icon: Shield, title: "Enterprise-Grade", description: "Secure & reliable" },
];

const testimonials = [
  {
    quote:
      "AurexAuto transformed our practice. We're saving 20 hours per week.",
    author: "Dr. Sarah Chen",
    company: "Elite Dental",
  },
  {
    quote: "The automation alone paid for itself in the first month.",
    author: "James Liu",
    company: "TechGear Founder",
  },
];

export default function HomePage() {
  return (
    <div>
      <section className="relative h-[calc(100vh-4rem)] flex flex-col overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 flex-1 flex flex-col justify-center -mt-8">
          <div className="text-center mb-6">
            <Badge
              variant="secondary"
              className="px-5 py-2 text-sm font-medium border border-border/50"
            >
              Trusted by 500+ Businesses
            </Badge>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-4 leading-tight">
            Automate. Optimize.{" "}
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Scale.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-6">
            Transform your business operations with AI-powered automation. Save
            time, reduce costs, and never miss an opportunity.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
            <Link href="/contact" data-testid="link-hero-cta">
              <Button
                size="lg"
                className="w-full sm:w-auto"
                data-testid="button-hero-cta"
              >
                Get Started Free
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/portfolio" data-testid="link-hero-portfolio">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                data-testid="button-hero-portfolio"
              >
                View Case Studies
              </Button>
            </Link>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              No Credit Card
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-purple-400" />
              48hr Setup
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan-400" />
              Cancel Anytime
            </div>
          </div>
        </div>

        <div className="py-8 border-t border-border/50 bg-card/30">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                  data-testid={`stat-${index}`}
                >
                  <div className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Automation Solutions
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Powerful AI tools to streamline your business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="bg-card/50 border-border/50 hover-elevate"
                data-testid={`card-feature-${index}`}
              >
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/services" data-testid="link-view-services">
              <Button variant="outline" data-testid="button-view-services">
                View All Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground">
              Results that transform your bottom line
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center"
                data-testid={`benefit-${index}`}
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Client Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-card/50 border-border/50"
                data-testid={`testimonial-${index}`}
              >
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                  <p className="text-foreground/90 mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold text-sm">
                      {testimonial.author}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {testimonial.company}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-24 bg-gradient-to-b from-card/50 to-background border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Join hundreds of businesses saving time and money with our
            automation solutions
          </p>
          <Link href="/contact" data-testid="link-cta-bottom">
            <Button size="lg" data-testid="button-cta-bottom">
              Schedule Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
