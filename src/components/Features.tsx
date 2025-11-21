import { Clock, Award, HeadphonesIcon, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Clock,
    title: "Fast Processing",
    description: "Quick turnaround time for all registration and licensing services",
  },
  {
    icon: Award,
    title: "Expert Team",
    description: "Experienced professionals with deep industry knowledge",
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 Support",
    description: "Dedicated customer support available round the clock",
  },
  {
    icon: CheckCircle,
    title: "100% Compliance",
    description: "Guaranteed compliance with all legal and regulatory requirements",
  },
];

const Features = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Why Choose GEMEASY?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We simplify the complex process of government procurement and business registration,
              making it easy for you to focus on what matters most - growing your business.
            </p>
            <div className="space-y-6">
              {features.slice(0, 2).map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4">
                    <div className="bg-accent/10 rounded-lg p-3 h-fit">
                      <Icon className="h-6 w-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {features.slice(2).map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-card border border-border rounded-xl p-6 hover:shadow-lg-custom transition-shadow"
                >
                  <div className="bg-primary/10 rounded-lg p-3 w-fit mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
