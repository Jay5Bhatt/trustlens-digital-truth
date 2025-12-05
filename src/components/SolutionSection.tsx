import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  Gauge, 
  Search, 
  GitBranch, 
  ShieldAlert, 
  Database, 
  FileStack,
  Sparkles 
} from "lucide-react";

const features = [
  {
    icon: Gauge,
    title: "Authenticity Score",
    description: "Probability analysis: Real, partially edited, or fully manipulated",
    gradient: "from-cyan to-blue-500",
  },
  {
    icon: Search,
    title: "Anomaly Detection",
    description: "Visual markup of lighting errors, pixel artifacts, UI inconsistencies, shadow violations",
    gradient: "from-purple to-pink-500",
  },
  {
    icon: GitBranch,
    title: "Reality Trace™",
    description: "Reconstructs creation history: Camera → Edit → AI → Screenshot",
    gradient: "from-cyan-glow to-cyan",
  },
  {
    icon: ShieldAlert,
    title: "TruthScore+™",
    description: "Risk assessment: Financial, social, reputation, or institutional danger",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Database,
    title: "Source Match Shield",
    description: "Cross-verification against templates, formats, and known sources",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: FileStack,
    title: "Multi-Format Support",
    description: "Images, videos, screenshots, documents, payment proofs",
    gradient: "from-violet-500 to-purple",
  },
];

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[150px]" />
      </div>
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
            <Sparkles className="w-4 h-4 text-cyan" />
            <span className="text-sm text-muted-foreground">Our Solution</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            The Complete Digital{" "}
            <span className="text-gradient">Forensics Shield</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Not just detection. Complete truth verification.
          </p>
        </motion.div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:bg-muted/30 hover:border-cyan/30 hover:shadow-glow-sm">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} p-0.5 mb-5`}>
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <feature.icon className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-5`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
