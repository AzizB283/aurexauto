import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    subtitle: "For small businesses",
    price: "$99",
    period: "/month",
    features: [
      "1 Chatbot OR automation",
      "Basic setup & configuration",
      "Email support",
      "Monthly check-in",
    ],
    highlight: false,
  },
  {
    name: "Growth",
    subtitle: "Most Popular",
    price: "$299",
    period: "/month",
    features: [
      "Multiple automations",
      "CRM + email workflows",
      "Priority support",
      "Custom dashboard",
      "Weekly optimization",
    ],
    highlight: true,
  },
  {
    name: "Pro",
    subtitle: "Custom",
    price: "Custom",
    period: " pricing",
    features: [
      "Advanced integrations",
      "Voice bot + complex flows",
      "Dedicated support manager",
      "Strategy consulting",
      "Custom reporting",
    ],
    highlight: false,
  },
];

const faqs = [
  {
    question: "How long does setup take?",
    answer: "Most projects are up and running within 48-72 hours. Complex integrations may take 1-2 weeks depending on your requirements.",
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. Changes take effect on your next billing cycle.",
  },
  {
    question: "Do you offer custom solutions?",
    answer: "Absolutely! Our Pro plan is fully customizable. We'll work with you to create a solution that fits your exact needs.",
  },
  {
    question: "Is there a contract or commitment?",
    answer: "No long-term contracts. All plans are month-to-month and you can cancel anytime.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer email support for Starter, priority support for Growth, and dedicated support managers for Pro clients.",
  },
];

export default function PricingPage() {
  return (
    <div>
      <section className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Simple,{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Transparent</span>{" "}
              Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that fits your business. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative bg-card/50 border-border/50 ${plan.highlight ? 'border-purple-500/50 shadow-lg shadow-purple-500/10' : ''}`}
                data-testid={`card-pricing-${index}`}
              >
                {plan.highlight && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white border-0">
                    Most Popular
                  </Badge>
                )}
                <CardHeader className="text-center pb-2">
                  <CardTitle className="text-xl">{plan.name}</CardTitle>
                  <CardDescription>{plan.subtitle}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link href="/contact" className="w-full" data-testid={`link-pricing-${index}`}>
                    <Button 
                      className="w-full" 
                      variant={plan.highlight ? "default" : "outline"}
                      data-testid={`button-pricing-${index}`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8">
            Pricing depends on scope & tools — we'll suggest what makes sense for your business.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 bg-card/30 border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="bg-card/50 rounded-lg border border-border/50 px-4"
                  data-testid={`faq-${index}`}
                >
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Schedule a free consultation call and we'll help you find the right solution.
          </p>
          <Link href="/contact" data-testid="link-pricing-consultation">
            <Button size="lg" data-testid="button-pricing-consultation">
              Request Custom Quote
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
