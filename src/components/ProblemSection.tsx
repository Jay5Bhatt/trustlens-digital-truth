import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { AlertTriangle, X } from "lucide-react";

const stats = [
  { value: 17, suffix: "M+", label: "fake UPI transactions annually in India" },
  { value: 73, suffix: "%", label: "of students can't identify fake screenshots" },
  { value: 12000, suffix: " Cr", prefix: "₹", label: "lost to digital fraud in 2024" },
  { value: 89, suffix: "%", label: "of AI-generated content goes undetected" },
];

function AnimatedCounter({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-gradient">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const fakeExamples = [
  { type: "UPI Slip", status: "FAKE" },
  { type: "WhatsApp Chat", status: "MANIPULATED" },
  { type: "AI Image", status: "GENERATED" },
];

export function ProblemSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/30 to-background" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div ref={containerRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card">
              <AlertTriangle className="w-4 h-4 text-destructive" />
              <span className="text-sm text-muted-foreground">The Problem</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              Digital Truth is{" "}
              <span className="text-destructive">Disappearing</span>
            </h2>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass-card rounded-xl p-4 md:p-5"
                >
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  <p className="text-xs md:text-sm text-muted-foreground mt-2">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Problem narrative */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="glass-card rounded-2xl p-6 md:p-8 space-y-6">
              <p className="text-muted-foreground leading-relaxed">
                AI has made manipulation effortless. <span className="text-foreground font-medium">Fake UPI slips.</span>{" "}
                <span className="text-foreground font-medium">Forged school notices.</span>{" "}
                <span className="text-foreground font-medium">Edited WhatsApp chats.</span>{" "}
                <span className="text-foreground font-medium">Deepfake videos.</span>{" "}
                Everyone is vulnerable—students, teachers, parents, small businesses.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Existing AI detectors only catch obvious fakes. They can't detect fake screenshots, 
                altered documents, or sophisticated manipulation. They can't tell you{" "}
                <span className="text-cyan font-medium">HOW</span> content was created or{" "}
                <span className="text-cyan font-medium">WHAT</span> risks it poses.
              </p>

              <div className="pt-4 border-t border-border/50">
                <p className="text-lg font-semibold text-foreground">
                  The world desperately needs a <span className="text-gradient">shield</span>.
                </p>
              </div>
            </div>

            {/* Fake examples grid */}
            <div className="grid grid-cols-3 gap-3">
              {fakeExamples.map((example, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="glass-card rounded-xl p-3 relative group"
                >
                  <div className="aspect-square rounded-lg bg-muted/50 flex items-center justify-center mb-2 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-destructive/20 to-transparent" />
                    <X className="w-8 h-8 text-destructive" />
                  </div>
                  <p className="text-xs font-medium text-center">{example.type}</p>
                  <p className="text-[10px] text-destructive text-center">{example.status}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
