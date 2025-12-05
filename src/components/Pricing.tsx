import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check, Sparkles, Building, CreditCard } from "lucide-react";
import { Button } from "./ui/button";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "/month",
    description: "Get started with basic verification",
    features: [
      "10 scans per month",
      "Basic authenticity detection",
      "Image support only",
      "Email support",
    ],
    cta: "Start Free",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Premium",
    price: "₹99",
    period: "/month",
    description: "Complete forensic analysis for professionals",
    features: [
      "Unlimited scans",
      "Full forensic analysis",
      "All file types (images, videos, docs)",
      "Reality Trace™",
      "TruthScore+ risk assessment",
      "Source Match Shield",
      "Priority processing",
      "Export detailed reports",
    ],
    cta: "Get Premium",
    variant: "glow" as const,
    popular: true,
  },
  {
    name: "Business",
    price: "Custom",
    period: "",
    description: "Enterprise solutions for organizations",
    features: [
      "Everything in Premium",
      "API access",
      "Team accounts",
      "Custom integrations",
      "Bulk processing",
      "Dedicated support",
      "White-label options",
    ],
    examples: [
      "Schools: ₹499/month per 100 students",
      "Sellers: ₹299/month",
    ],
    cta: "Contact Sales",
    variant: "outline" as const,
    popular: false,
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/20 to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/3 rounded-full blur-[150px]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6">
            <CreditCard className="w-4 h-4 text-cyan" />
            <span className="text-sm text-muted-foreground">Pricing</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient">Plan</span>
          </h2>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${plan.popular ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="px-4 py-1 rounded-full bg-gradient-to-r from-cyan to-purple text-xs font-semibold text-background flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={`glass-card rounded-2xl p-6 lg:p-8 h-full flex flex-col ${
                  plan.popular
                    ? "border-cyan/50 shadow-glow-sm"
                    : "hover:border-cyan/30"
                } transition-all duration-300 hover:shadow-lg`}
              >
                {/* Plan header */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-gradient">
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    {plan.description}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <Check className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Examples for business plan */}
                {plan.examples && (
                  <div className="mb-6 p-4 rounded-xl bg-muted/30 space-y-2">
                    <p className="text-xs font-medium text-muted-foreground">
                      Example pricing:
                    </p>
                    {plan.examples.map((example, i) => (
                      <p key={i} className="text-xs text-muted-foreground">
                        {example}
                      </p>
                    ))}
                  </div>
                )}

                {/* CTA */}
                <Button
                  variant={plan.variant}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-8"
        >
          <Building className="w-4 h-4 inline-block mr-2" />
          Special pricing for educational institutions and NGOs
        </motion.p>
      </div>
    </section>
  );
}
