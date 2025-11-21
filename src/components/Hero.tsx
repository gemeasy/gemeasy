import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import heroImage from "@/assets/hero-illustration.jpg";

const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              THE MOST TRUSTED PARTNER IN{" "}
              <span className="text-primary">BUSINESS DEVELOPMENT</span> SERVICES
            </h1>
            <p className="text-lg text-muted-foreground">
              Streamline your government procurement journey with expert GeM registration,
              tender participation, and comprehensive business services.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-foreground">Fast Processing & Quick Approval</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-foreground">Expert Guidance at Every Step</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                <span className="text-foreground">100% Compliance Guaranteed</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline">
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-lg-custom">
              <img
                src={heroImage}
                alt="Government e-Marketplace and tender services illustration"
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground px-6 py-4 rounded-lg shadow-glow hidden md:block">
              <p className="text-sm font-semibold">Trusted by 1000+ Businesses</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
