import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight,
  CheckCircle2,
  Target,
  Heart,
  Zap,
  Users,
  Clock,
  MessageSquare,
  Shield,
  Award,
} from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Practical Solutions",
    description: "We focus on what works, not what's trendy. Every solution is designed for real-world impact.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Time is money. We deliver working solutions in days, not months.",
  },
  {
    icon: MessageSquare,
    title: "Clear Communication",
    description: "No jargon, no confusion. We explain everything in plain language.",
  },
  {
    icon: Heart,
    title: "Long-term Partnership",
    description: "We're not just vendors — we're partners invested in your success.",
  },
];

const team = [
  {
    name: "The Founders",
    role: "Building the Future of Business Automation",
    description: "A team of engineers, designers, and business strategists passionate about helping businesses thrive through intelligent automation.",
  },
];

const milestones = [
  { year: "2023", event: "Founded AurexAuto" },
  { year: "2023", event: "First 50 clients onboarded" },
  { year: "2024", event: "Launched voice AI solutions" },
  { year: "2024", event: "500+ businesses automated" },
];

export default function AboutPage() {
  return (
    <div>
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-1/4 right-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Built for businesses that don't want to{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">waste time.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              At AurexAuto, we believe software should work for you — not the other way around. We design automation systems that remove manual work, improve customer experience, and let teams focus on real growth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card 
                key={index} 
                className="bg-card/50 border-border/50 text-center"
                data-testid={`card-value-${index}`}
              >
                <CardContent className="pt-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="font-semibold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  AurexAuto was born from a simple observation: businesses everywhere were drowning in repetitive tasks. Phone calls going unanswered. Leads slipping through the cracks. Teams spending hours on work that machines could do in seconds.
                </p>
                <p>
                  We set out to change that. Our mission is to bring enterprise-grade AI automation to businesses of all sizes — without the enterprise price tag or complexity.
                </p>
                <p>
                  Today, we help hundreds of businesses save time, boost revenue, and deliver better customer experiences through intelligent automation.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              {milestones.map((milestone, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/30 border border-border/50"
                  data-testid={`milestone-${index}`}
                >
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-purple-400">{milestone.year}</span>
                  </div>
                  <div className="font-medium">{milestone.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">The Team</h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-card/50 border-border/50 text-center" data-testid="card-team">
              <CardContent className="pt-8 pb-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center mx-auto mb-6">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{team[0].name}</h3>
                <p className="text-purple-400 mb-4">{team[0].role}</p>
                <p className="text-muted-foreground max-w-md mx-auto">{team[0].description}</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-gradient-to-b from-card/50 to-background border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Work Together?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Let's discuss how we can help automate your business and free up your time for what matters most.
          </p>
          <Link href="/contact" data-testid="link-about-cta">
            <Button size="lg" data-testid="button-about-cta">
              Get in Touch
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
