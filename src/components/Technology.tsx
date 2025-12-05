import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown, Cpu, Brain, FileSearch, Fingerprint } from "lucide-react";

const techSections = [
  {
    icon: FileSearch,
    title: "Image Forensics",
    content:
      "Error Level Analysis (ELA), chromatic aberration checks, FFT texture frequency analysis, illumination field estimation for detecting lighting inconsistencies and copy-move forgeries.",
  },
  {
    icon: Brain,
    title: "AI Detection",
    content:
      "Convolutional Neural Networks spot pixel-level artifacts. Transformer models analyze synthetic patterns. Temporal consistency models catch video glitches and deepfake artifacts.",
  },
  {
    icon: Cpu,
    title: "Document Analysis",
    content:
      "Font consistency verification, bubble spacing analysis, timestamp pattern matching, UI color rules, layout verification, OCR structure analysis for screenshot authentication.",
  },
  {
    icon: Fingerprint,
    title: "Reality Trace Engine",
    content:
      "Diffusion fingerprints detection, pixel-neighborhood graphs, recompression path mapping, signature residue detection to reconstruct the complete creation history.",
  },
];

export function Technology() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple/5 rounded-full blur-[150px]" />
      </div>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div ref={ref} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass-card mb-6">
            <Cpu className="w-4 h-4 text-cyan" />
            <span className="text-sm text-muted-foreground">Technology</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Powered By Advanced{" "}
            <span className="text-gradient">Forensic Science</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            State-of-the-art detection methods simplified for everyone
          </p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          {techSections.map((section, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-6 flex items-center gap-4 text-left hover:bg-muted/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan/20 to-purple/20 flex items-center justify-center shrink-0">
                  <section.icon className="w-5 h-5 text-cyan" />
                </div>
                <span className="font-semibold flex-1">{section.title}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
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
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
