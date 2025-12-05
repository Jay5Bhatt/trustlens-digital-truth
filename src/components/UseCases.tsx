import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  Store,
  Users,
  ShoppingBag,
  Share2,
  Palette,
  Target,
} from "lucide-react";

const useCases = [
  {
    icon: GraduationCap,
    title: "Students & Teachers",
    description: "Verify assignment screenshots, school notices, exam materials",
    color: "from-blue-500 to-cyan",
  },
  {
    icon: Store,
    title: "Small Business Owners",
    description: "Authenticate UPI payment slips, transaction proofs, invoices",
    color: "from-green-500 to-emerald-400",
  },
  {
    icon: Users,
    title: "Parents",
    description: "Check suspicious school messages, fee receipts, announcements",
    color: "from-purple to-pink-500",
  },
  {
    icon: ShoppingBag,
    title: "Online Buyers/Sellers",
    description: "Verify product images, payment confirmations, seller credentials",
    color: "from-orange-500 to-yellow-500",
  },
  {
    icon: Share2,
    title: "Social Media Users",
    description: "Detect fake news, manipulated viral content, deepfake videos",
    color: "from-red-500 to-rose-400",
  },
  {
    icon: Palette,
    title: "Content Creators",
    description: "Protect original work, verify source material, check licensing",
    color: "from-violet-500 to-purple",
  },
];

export function UseCases() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-navy-light/20 to-background" />
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
            <Target className="w-4 h-4 text-cyan" />
            <span className="text-sm text-muted-foreground">Use Cases</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Built For{" "}
            <span className="text-gradient">Real-World Protection</span>
          </h2>
        </motion.div>

        {/* Use cases grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:bg-muted/30 hover:shadow-glow-sm hover:border-cyan/30">
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${useCase.color} p-0.5 mb-5`}>
                  <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
                    <useCase.icon className="w-5 h-5 text-foreground" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg font-semibold mb-2 group-hover:text-cyan transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-sm text-muted-foreground">{useCase.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
