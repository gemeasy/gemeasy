import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { FileCheck, Building2, Shield, TrendingUp, FileText, Users } from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "GeM Registration & Tender Participation",
    description:
      "Quick & easy GeM registration services to help your business secure government contracts through the Government e-Marketplace platform.",
  },
  {
    icon: Shield,
    title: "PSARA License Application",
    description:
      "Fast & budget-friendly PSARA License application services in Kerala for private security agencies with complete legal compliance.",
  },
  {
    icon: Building2,
    title: "Company & Partnership Registration",
    description:
      "Seamless company and partnership firm registration services ensuring legal compliance and a strong foundation for business growth.",
  },
  {
    icon: TrendingUp,
    title: "Digital Promotion Services",
    description:
      "Enhance brand visibility and drive business growth through effective online marketing strategies and digital identity creation.",
  },
  {
    icon: FileText,
    title: "GST Registration & Filing",
    description:
      "Comprehensive GST registration and filing services, simplifying tax compliance, returns, invoicing, and tax management.",
  },
  {
    icon: Users,
    title: "ESI & EPF Registration",
    description:
      "Professional ESI & EPF registration and filing services ensuring complete compliance with employee welfare regulations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive business development solutions tailored to your needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="border-border hover:shadow-lg-custom transition-all duration-300 hover:scale-105"
              >
                <CardHeader>
                  <div className="bg-primary/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
