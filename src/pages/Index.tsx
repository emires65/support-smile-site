import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageSquare, ShieldCheck, Clock, Star, HelpCircle, Headphones } from "lucide-react";

const Index = () => {
  const openChat = () => {
    // Open JivoChat if available
    // @ts-ignore
    if (window.jivo_api && typeof window.jivo_api.open === "function") {
      // @ts-ignore
      window.jivo_api.open();
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-10 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b">
        <div className="container flex h-16 items-center justify-between">
          <a href="/" className="font-bold tracking-tight text-xl">Customer Support Center</a>
          <nav className="hidden md:flex items-center gap-6" aria-label="Primary">
            <a href="#tools" className="hover:underline">Support Tools</a>
            <a href="#reviews" className="hover:underline">Reviews</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button className="btn-hero" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
              Contact Us
            </Button>
            <Button variant="secondary" onClick={openChat}>
              Live Chat
            </Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-16 md:py-24 bg-hero">
          <div className="container text-center">
            <div className="flex justify-center mb-4">
              <div className="badge-pill">50+ Currencies Supported</div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight max-w-3xl mx-auto">
              Fast, Friendly, and Reliable Customer Service
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mt-4 max-w-2xl mx-auto">
              We’re here 24/7 to help you with your multi-currency banking questions.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-hero" onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
                Contact Us
              </Button>
              <Button variant="outline" onClick={openChat}>
                Start Live Chat
              </Button>
            </div>

            {/* Quick highlights */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <Card className="card-elevated">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base font-medium">
                    <ShieldCheck className="w-5 h-5 text-primary" /> Verified Help
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Secure, accurate assistance from trained specialists.
                </CardContent>
              </Card>
              <Card className="card-elevated">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base font-medium">
                    <Clock className="w-5 h-5 text-primary" /> 24/7 Availability
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Reach us anytime. We respond in minutes, not hours.
                </CardContent>
              </Card>
              <Card className="card-elevated">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center gap-2 text-base font-medium">
                    <Headphones className="w-5 h-5 text-primary" /> Multi‑Channel Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground">
                  Chat, email, and knowledge base to fit your preference.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tools Section styled like reference cards */}
        <section id="tools" className="py-12 md:py-16">
          <div className="container">
            <h2 className="text-center text-2xl md:text-3xl font-semibold">Support Tools</h2>
            <p className="text-center text-muted-foreground mt-2 max-w-2xl mx-auto">
              Find quick answers or get guided help from our team.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <HelpCircle className="w-5 h-5 text-primary" /> Help Center
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Browse FAQs and step‑by‑step guides.
                </CardContent>
              </Card>

              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <MessageSquare className="w-5 h-5 text-primary" /> Billing & Payments
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Get help with charges, refunds, and receipts.
                </CardContent>
              </Card>

              <Card className="card-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <ShieldCheck className="w-5 h-5 text-primary" /> Account & Security
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-muted-foreground">
                  Resolve login, verification, and safety concerns.
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="py-12 md:py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-center text-2xl md:text-3xl font-semibold">What customers say</h2>
            <p className="text-center text-muted-foreground mt-2 max-w-2xl mx-auto">
              Our customer service is praised for speed, clarity, and care.
            </p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {["“Quick response and solved my issue in minutes.”", "“Super friendly and knowledgeable agents!”", "“Best support experience I’ve had—five stars.”"].map((quote, i) => (
                <Card key={i} className="card-elevated">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-1 text-primary mb-2" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, idx) => (
                        <Star key={idx} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-sm">{quote}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12 md:py-20">
          <div className="container">
            <Card className="card-elevated p-6 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold">Need help right now?</h2>
                  <p className="text-muted-foreground mt-3">
                    Our team is ready to assist. Start a chat or send us a message and we’ll get back quickly.
                  </p>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3">
                    <Button className="btn-hero" onClick={openChat}>Contact Us</Button>
                    <Button variant="secondary" asChild>
                      <a href="mailto:support@example.com" aria-label="Email support">Email Support</a>
                    </Button>
                  </div>
                </div>
                <div>
                  <div className="rounded-lg border p-4 bg-card">
                    <div className="flex items-center gap-3">
                      <MessageSquare className="w-6 h-6 text-primary" />
                      <div>
                        <p className="font-medium">Live Chat Powered by JivoChat</p>
                        <p className="text-sm text-muted-foreground">Click “Contact Us” to start chatting with an agent.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-10">
        <div className="container text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Customer Support Center. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
