import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import { useState } from "react";
import { 
  Send, 
  Mail, 
  MapPin, 
  Clock,
  CheckCircle2,
  MessageSquare,
  Phone,
} from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  business: z.string().min(1, "Business name is required"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().optional(),
  budget: z.string().min(1, "Please select a budget range"),
  automationNeeds: z.string().min(10, "Please describe your needs in at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    value: "support@aurexauto.com",
    href: "mailto:support@aurexauto.com",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Remote — Worldwide",
  },
  {
    icon: Clock,
    title: "Response Time",
    value: "Within 24 hours",
  },
];

export default function ContactPage() {
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      business: "",
      automationNeeds: "",
      email: "",
      phone: "",
      budget: "",
    },
  });

  const onSubmit = (data: ContactFormData) => {
    console.log("Form submitted:", data);
    setIsSubmitted(true);
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    form.reset();
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div>
      <section className="relative py-16 sm:py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 left-1/4 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">Talk</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ready to automate your business? Tell us about your needs and we'll create a custom plan for you.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="lg:col-span-2">
              <Card className="bg-card/50 border-border/50">
                <CardContent className="p-6 sm:p-8">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Your Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="John Smith" 
                                  {...field} 
                                  data-testid="input-contact-name"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="business"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Business Name</FormLabel>
                              <FormControl>
                                <Input 
                                  placeholder="Your Company" 
                                  {...field} 
                                  data-testid="input-contact-business"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Email Address</FormLabel>
                              <FormControl>
                                <Input 
                                  type="email" 
                                  placeholder="john@company.com" 
                                  {...field} 
                                  data-testid="input-contact-email"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Phone (Optional)</FormLabel>
                              <FormControl>
                                <Input 
                                  type="tel" 
                                  placeholder="+1 (555) 000-0000" 
                                  {...field} 
                                  data-testid="input-contact-phone"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      <FormField
                        control={form.control}
                        name="budget"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Monthly Budget</FormLabel>
                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                              <FormControl>
                                <SelectTrigger data-testid="select-contact-budget">
                                  <SelectValue placeholder="Select your budget range" />
                                </SelectTrigger>
                              </FormControl>
                              <SelectContent>
                                <SelectItem value="starter">$497/mo - Starter</SelectItem>
                                <SelectItem value="growth">$997/mo - Growth</SelectItem>
                                <SelectItem value="enterprise">Custom - Enterprise</SelectItem>
                                <SelectItem value="unsure">Not sure yet</SelectItem>
                              </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="automationNeeds"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>What would you like to automate?</FormLabel>
                            <FormControl>
                              <Textarea 
                                placeholder="Tell us about the tasks you want to automate, your current pain points, or any specific features you're looking for..."
                                className="min-h-[120px] resize-none"
                                {...field}
                                data-testid="textarea-contact-needs"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitted}
                        data-testid="button-contact-submit"
                      >
                        {isSubmitted ? (
                          <>
                            <CheckCircle2 className="w-4 h-4 mr-2" />
                            Sent!
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <Card key={index} className="bg-card/50 border-border/50" data-testid={`card-contact-method-${index}`}>
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0">
                      <method.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">{method.title}</h3>
                      {method.href ? (
                        <a 
                          href={method.href} 
                          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                          data-testid={`link-contact-${method.title.toLowerCase().replace(' ', '-')}`}
                        >
                          {method.value}
                        </a>
                      ) : (
                        <p className="text-sm text-muted-foreground">{method.value}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}

              <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border-purple-500/20">
                <CardContent className="p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                    <h3 className="font-medium">Quick Consultation</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Prefer to talk? Book a free 15-minute strategy call.
                  </p>
                  <Button variant="outline" className="w-full" data-testid="button-book-call">
                    <Phone className="w-4 h-4 mr-2" />
                    Book a Call
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
