import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import Layout from "@/components/layout";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import ServicesPage from "@/pages/services";
import PortfolioPage from "@/pages/portfolio";
import PricingPage from "@/pages/pricing";
import AboutPage from "@/pages/about";
import ContactPage from "@/pages/contact";
import BookingBotForWebsites from "@/pages/booking-bot-for-websites";
import BlogIndex from "@/pages/blog";
import BlogPost from "@/pages/blog-post";

function Router() {
  return (
    <Layout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/services" component={ServicesPage} />
        <Route path="/portfolio" component={PortfolioPage} />
        <Route path="/pricing" component={PricingPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/booking-bot-for-websites" component={BookingBotForWebsites} />
        <Route path="/blog" component={BlogIndex} />
        <Route path="/blog/:slug" component={BlogPost} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
