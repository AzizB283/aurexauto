import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Wrench, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Essential",
    description: "Perfect starting point for businesses entering the digital space",
    price: "$2,000",
    period: "one-time",
    features: [
      "Modern, responsive website design",
      "Contact forms with email integration",
      "AI chat agent for customer inquiries",
      "Single booking calendar system",
      "Mobile-optimized interface",
      "Basic SEO setup",
      "SSL certificate & security",
    ],
    highlight: false,
  },
  {
    name: "Professional",
    description: "Advanced automation for growing businesses",
    price: "$3,500",
    period: "one-time",
    features: [
      "Everything in Essential, plus:",
      "Advanced AI integration (chat + voice)",
      "Custom admin panel",
      "Multiple booking calendars",
      "Customer data management",
      "Analytics dashboard",
      "Email & SMS automation",
      "15 days support",
      "Advanced SEO optimization",
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    description: "Complete business automation suite with ongoing growth support",
    price: "$4,500",
    period: "one-time",
    features: [
      "Everything in Professional, plus:",
      "CRM system integration",
      "Marketing automation suite",
      "Advanced SEO & content strategy",
      "Social media integration",
      "Performance analytics & reporting",
      "30 days support",
    ],
    highlight: false,
  },
];

const maintenanceFeatures = [
  "Unlimited technical support",
  "Third-party integration maintenance",
  "Regular software updates",
  "Security patches & monitoring",
  "Feature enhancements",
  "Performance optimization",
  "Priority bug fixes",
  "Monthly strategy consultations",
];

export default function PricingPage() {
  return (
    <div>
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl p-6 sm:p-8 ${
                  plan.highlight
                    ? "bg-zinc-900/80 dark:bg-zinc-900/80 border border-zinc-700/50"
                    : "bg-zinc-900/50 dark:bg-zinc-900/50 border border-zinc-800/50"
                }`}
                data-testid={`card-pricing-${index}`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex items-center gap-1.5 bg-orange-500 text-white text-sm font-medium px-4 py-1.5 rounded-full">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl sm:text-5xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-2">{plan.period}</span>
                </div>

                <Link href="/contact" className="block mb-8" data-testid={`link-pricing-${index}`}>
                  <Button
                    className={`w-full ${
                      plan.highlight
                        ? "bg-orange-500 hover:bg-orange-600 text-white border-0"
                        : "bg-transparent border border-zinc-600 hover:bg-zinc-800 text-foreground"
                    }`}
                    data-testid={`button-pricing-${index}`}
                  >
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <ul className="space-y-3">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-orange-500 flex-shrink-0 mt-0.5" />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto bg-zinc-900/50 dark:bg-zinc-900/50 border border-zinc-800/50 rounded-xl p-8 sm:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-orange-500/10 mb-6">
                <Wrench className="w-7 h-7 text-orange-500" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-3">
                Monthly Maintenance Plans Available
              </h2>
              <p className="text-muted-foreground">
                Keep your automation running smoothly with optional ongoing support
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 mb-10">
              {maintenanceFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check className="w-4 h-4 text-orange-500 flex-shrink-0" />
                  <span className="text-foreground/80 text-sm">{feature}</span>
                </div>
              ))}
            </div>

            <div className="bg-zinc-800/50 dark:bg-zinc-800/50 rounded-lg py-4 px-6 text-center">
              <p className="text-muted-foreground text-sm">
                Custom maintenance pricing based on your package and needs.{" "}
                <Link href="/contact" className="text-orange-500 hover:underline" data-testid="link-maintenance-contact">
                  Contact us for details.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Schedule a free consultation call and we'll help you find the right solution for your business.
          </p>
          <Link href="/contact" data-testid="link-pricing-consultation">
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white" data-testid="button-pricing-consultation">
              Request Free Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
