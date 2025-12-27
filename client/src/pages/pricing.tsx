import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, ArrowRight, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const plans = [
  {
    name: "Starter",
    subtitle: "Perfect for small businesses",
    price: "$497",
    period: "/month",
    description: "Essential automation to get started",
    features: [
      { text: "1 AI Chatbot", included: true },
      { text: "Basic CRM Integration", included: true },
      { text: "Email Support", included: true },
      { text: "500 conversations/mo", included: true },
      { text: "Voice Assistant", included: false },
      { text: "Custom Dashboard", included: false },
    ],
    highlight: false,
  },
  {
    name: "Growth",
    subtitle: "Most Popular",
    price: "$997",
    period: "/month",
    description: "Scale with advanced automations",
    features: [
      { text: "Multiple AI Chatbots", included: true },
      { text: "Full CRM + Email Workflows", included: true },
      { text: "Priority Support", included: true },
      { text: "5,000 conversations/mo", included: true },
      { text: "Voice Assistant", included: true },
      { text: "Custom Dashboard", included: true },
    ],
    highlight: true,
  },
  {
    name: "Enterprise",
    subtitle: "For large organizations",
    price: "Custom",
    period: "",
    description: "Tailored solutions for your needs",
    features: [
      { text: "Unlimited Chatbots", included: true },
      { text: "Advanced Integrations", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Unlimited conversations", included: true },
      { text: "Custom Voice AI", included: true },
      { text: "White-label Options", included: true },
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
    answer: "Absolutely! Our Enterprise plan is fully customizable. We'll work with you to create a solution that fits your exact needs.",
  },
  {
    question: "Is there a contract or commitment?",
    answer: "No long-term contracts. All plans are month-to-month and you can cancel anytime.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "We offer email support for Starter, priority support for Growth, and dedicated account managers for Enterprise clients.",
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
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {plan.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3 text-sm">
                        {feature.included ? (
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-4 h-4 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? "text-foreground/80" : "text-muted-foreground/50"}>
                          {feature.text}
                        </span>
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
                      {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="text-center text-muted-foreground text-sm mt-8">
            All plans include a 14-day free trial. No credit card required.
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
