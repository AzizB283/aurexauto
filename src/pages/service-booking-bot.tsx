import { Link } from "wouter";
import Seo from "@/components/seo";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CheckCircle2, Users, Globe, Bot, Calendar } from "lucide-react";

export default function ServiceBookingBotPage() {
  return (
    <div>
      <Seo
        title={"Embedded Booking Bot & Admin — AurexAuto"}
        description={"Accept bookings via an embeddable chat or voice bot and manage staff, services and logs with a hosted or self-hosted admin panel."}
        pathname="/service-booking-bot"
      />

      <section className="py-20 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Booking bot + Admin — In-place bookings on your website</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Let customers book without leaving your site. We provide a chat + voice booking widget plus an admin panel to view logs, manage staff, and control services.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Link href="/contact"><Button>Start a Pilot</Button></Link>
            <Link href="/services"><Button variant="ghost">Back to Services</Button></Link>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Overview</CardTitle>
              <CardDescription>How it works and why it helps</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Our embeddable widget (script or SDK) sits on your site and handles bookings via conversational chat or voice. Bookings are recorded in an admin panel where you can manage staff, services, view logs, and export data.</p>
              <ul className="mt-4 space-y-2 text-sm">
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1"/> No redirects — customers finish on your site</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1"/> Fast setup — embed snippet or SDK</li>
                <li className="flex items-start gap-3"><CheckCircle2 className="w-5 h-5 text-cyan-400 mt-1"/> Admin to manage staff, services, and view logs</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Delivery Models</CardTitle>
              <CardDescription>Choose the approach that fits your business</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Hosted (SaaS)</CardTitle>
                    <CardDescription>We host the admin on our platform and provide a subdomain for your team. Includes updates, backups and support.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mt-2 text-sm list-disc list-inside text-muted-foreground">
                      <li>Fast onboarding and continuous improvements</li>
                      <li>Monthly billing; data export available</li>
                      <li>Ideal for small teams or rapid launch</li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Custom (One-time)</CardTitle>
                    <CardDescription>We build a custom admin and hand over the source for you to host. Includes integration and deployment instructions.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="mt-2 text-sm list-disc list-inside text-muted-foreground">
                      <li>Full ownership and on-prem control</li>
                      <li>One-time development fee + optional support SLA</li>
                      <li>Ideal for enterprise and compliance needs</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent>
                <div className="flex items-start gap-3">
                  <Bot className="w-6 h-6 text-purple-500"/>
                  <div>
                    <h3 className="font-semibold">Chat & Voice Booking</h3>
                    <p className="text-sm text-muted-foreground">Conversational flows that capture service, staff choice, date/time and contact details.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="flex items-start gap-3">
                  <Users className="w-6 h-6 text-purple-500"/>
                  <div>
                    <h3 className="font-semibold">Admin & Staff Management</h3>
                    <p className="text-sm text-muted-foreground">Create staff, assign services, view booking logs and export CSV.</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent>
                <div className="flex items-start gap-3">
                  <Calendar className="w-6 h-6 text-purple-500"/>
                  <div>
                    <h3 className="font-semibold">Integrations</h3>
                    <p className="text-sm text-muted-foreground">Calendar sync (Google/Outlook), webhooks for CRM, optional payment integration.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-card/30 border-t border-border/50">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl font-bold mb-4">Pricing Examples</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent>
                <h3 className="font-semibold">Hosted — Starter</h3>
                <p className="text-sm text-muted-foreground">$99/mo — basic bot, admin access, single staff, email support.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="font-semibold">Hosted — Business</h3>
                <p className="text-sm text-muted-foreground">$249/mo — multi-staff, calendar integrations, priority support.</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent>
                <h3 className="font-semibold">Custom Build</h3>
                <p className="text-sm text-muted-foreground">$3k+ one-time — custom admin, source handover, optional SLA.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <h2 className="text-2xl font-bold mb-4">FAQ</h2>
          <div className="space-y-4 text-sm text-muted-foreground">
            <div>
              <strong>Who owns the data?</strong>
              <p className="mt-1">Hosted: you can export data anytime. Custom: you own everything and host it yourself.</p>
            </div>
            <div>
              <strong>How long to integrate?</strong>
              <p className="mt-1">Typical embed setup is 1–3 days; full custom builds depend on scope (1–4+ weeks).</p>
            </div>
            <div>
              <strong>Do you support payments and calendar sync?</strong>
              <p className="mt-1">Yes — optional payment gateways and Google/Outlook calendar sync are supported.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gradient-to-r from-purple-50 to-cyan-50">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h3 className="text-xl font-semibold">Ready to stop losing bookings?</h3>
          <p className="text-muted-foreground mt-2">Start a pilot or request a tailored quote.</p>
          <div className="mt-6 flex justify-center gap-3">
            <Link href="/contact"><Button>Start Pilot</Button></Link>
            <Link href="/contact"><Button variant="ghost">Request Quote</Button></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
