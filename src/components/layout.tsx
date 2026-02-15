import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X, Linkedin, Github, Twitter, Mail, MapPin, Zap } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

const services = [
  "AI Automation",
  "Chatbots & Voice",
  "Web Development",
  "Dashboards",
  "CRM & Marketing",
];

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md border-b border-border/50' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2" data-testid="link-header-logo">
            <img src="/Aurex_auto.png" alt="Aurex Auto" className="w-10 h-10 object-contain" />
            <span className="font-bold text-lg hidden sm:inline">Aurex Auto</span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm rounded-lg transition-colors ${
                  location === link.href 
                    ? 'text-foreground bg-muted' 
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                }`}
                data-testid={`link-nav-${link.name.toLowerCase()}`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link href="/contact">
              <Button size="sm" className="hidden sm:flex" data-testid="button-header-cta">
                Get Started
              </Button>
            </Link>
            <Button 
              size="icon" 
              variant="ghost" 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 text-sm rounded-lg transition-colors ${
                    location === link.href 
                      ? 'text-foreground bg-muted' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid={`link-mobile-${link.name.toLowerCase()}`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Footer() {
  const quickLinks = [
    { name: "Portfolio", href: "/portfolio" },
    { name: "Blog", href: "/blog" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="py-16 bg-card/50 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4" data-testid="link-footer-logo">
              <img src="/Aurex_auto.png" alt="Aurex Auto" className="w-8 h-8 object-contain" />
              <span className="font-bold text-lg">AurexAuto</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              AI automation systems for businesses that want to save time, cut costs, and grow faster.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href="/services" 
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    data-testid={`link-footer-service-${index}`}
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href} 
                    className="text-sm text-foreground/80 hover:text-foreground transition-colors"
                    data-testid={`link-footer-quick-${index}`}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Connect</h4>
            <div className="flex gap-2 mb-6">
              <Button size="icon" variant="outline" className="rounded-lg" data-testid="button-social-linkedin">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-lg" data-testid="button-social-github">
                <Github className="w-4 h-4" />
              </Button>
              <Button size="icon" variant="outline" className="rounded-lg" data-testid="button-social-twitter">
                <Twitter className="w-4 h-4" />
              </Button>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <a href="mailto:contact@aurexauto.com" className="flex items-center gap-2 hover:text-foreground transition-colors" data-testid="link-email">
                <Mail className="w-4 h-4" />
                contact@aurexauto.com
              </a>
              <div className="flex items-center gap-2" data-testid="text-location">
                <MapPin className="w-4 h-4" />
                Remote — Worldwide
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border/50 pt-8">
          <p className="text-center text-muted-foreground text-sm">
            © {new Date().getFullYear()} AurexAuto. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <main className="flex-1 pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
