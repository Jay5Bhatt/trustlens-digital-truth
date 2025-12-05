import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How accurate is TrustLens?",
    answer:
      "Our multi-layer forensic engine achieves 94%+ accuracy on known manipulation types. We combine multiple detection methods to minimize false positives.",
  },
  {
    question: "Is my data safe?",
    answer:
      "Yes. Content is analyzed securely and deleted immediately after verification. We never store or access your private data.",
  },
  {
    question: "What file types are supported?",
    answer:
      "Images (JPG, PNG, WebP), Videos (MP4, MOV), Documents (PDF), Screenshots (all formats).",
  },
  {
    question: "Can TrustLens detect all manipulation?",
    answer:
      "We detect most common manipulation techniques including AI generation, photo editing, screenshot forgery, and document alteration. No detector is 100%, but we provide probability scores and detailed analysis.",
  },
  {
    question: "Do I need technical knowledge?",
    answer:
      "No. TrustLens is built for everyone. Upload content, get clear results with visual explanations.",
  },
  {
    question: "How is this different from other AI detectors?",
    answer:
      "Most tools only detect AI-generated images. TrustLens verifies ALL digital content including screenshots, documents, and videos. We also show HOW content was created and WHAT risks it poses.",
  },
  {
    question: "Can I use this for legal purposes?",
    answer:
      "TrustLens provides forensic analysis, but results should be reviewed by experts for legal matters. We provide detailed technical reports for professional review.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-purple/5 rounded-full blur-[150px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div ref={ref} className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6">
            <HelpCircle className="w-4 h-4 text-cyan" />
            <span className="text-sm text-muted-foreground">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Common <span className="text-gradient">Questions</span>
          </h2>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-3"
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card rounded-xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 flex items-center gap-4 text-left hover:bg-muted/30 transition-colors"
              >
                <span className="font-medium flex-1 text-sm md:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
