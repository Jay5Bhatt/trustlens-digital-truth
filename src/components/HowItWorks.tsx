import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Upload, Cpu, FileCheck, Lock } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload",
    description: "Drag & drop any image, video, screenshot, or document",
    details: ["Images: JPG, PNG, WebP", "Videos: MP4, MOV", "Documents: PDF"],
  },
  {
    icon: Cpu,
    title: "Analyze",
    description: "Multi-layer forensic engine examines 47+ manipulation indicators",
    details: [
      "Computer vision algorithms (ELA, FFT, chromatic aberration)",
      "AI artifact detection (CNN models, transformers)",
      "Template matching & structural analysis",
      "Metadata & file signature forensics",
    ],
  },
  {
    icon: FileCheck,
    title: "Understand",
    description: "Get clear, actionable results",
    details: [
      "Authenticity score",
      "Visual anomaly highlights",
      "Creation pathway reconstruction",
      "Risk assessment & recommendation",
    ],
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[150px]" />
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
            <Cpu className="w-4 h-4 text-cyan" />
            <span className="text-sm text-muted-foreground">How It Works</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Forensic-Grade Analysis,{" "}
            <span className="text-gradient">Simple Interface</span>
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-gradient-to-r from-cyan/50 to-purple/50" />
              )}

              <div className="glass-card rounded-2xl p-6 h-full relative">
                {/* Step number */}
                <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-gradient-to-br from-cyan to-purple flex items-center justify-center text-sm font-bold text-background">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center mb-5">
                  <step.icon className="w-8 h-8 text-cyan" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-muted-foreground mb-4">{step.description}</p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, i) => (
                    <li key={i} className="text-sm text-muted-foreground/80 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-1.5 shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security note */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full glass-card">
            <Lock className="w-5 h-5 text-cyan" />
            <span className="text-sm text-muted-foreground">
              All processing happens securely. Your content is never stored.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
