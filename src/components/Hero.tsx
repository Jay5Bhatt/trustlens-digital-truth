import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle, Sparkles } from "lucide-react";
import { Button } from "./ui/button";
import { ParticleField } from "./ParticleField";

export function Hero() {
  const scrollToDemo = () => {
    document.querySelector("#demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <ParticleField />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      
      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan/5 rounded-full blur-[120px]" />
      <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-purple/10 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8"
          >
            <Sparkles className="w-4 h-4 text-cyan" />
            <span className="text-sm text-muted-foreground">AI-Powered Digital Forensics</span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
          >
            <span className="text-foreground">See Through</span>
            <br />
            <span className="text-gradient glow-text">Digital Deception</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4"
          >
            AI-powered forensics that verifies images, videos, screenshots, and documents in seconds
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl mx-auto mb-10"
          >
            While the world builds tools to create fake content, TrustLens builds the shield. 
            Advanced forensic analysis that reveals manipulation, AI generation, and digital fraud.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button variant="hero" size="xl" onClick={scrollToDemo}>
              Upload & Verify
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="glow-outline" size="xl" onClick={scrollToDemo}>
              See Demo
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-cyan" />
              <span>Used by educators</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-cyan" />
              <span>Trusted by businesses</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan" />
              <span>Built for everyone</span>
            </div>
          </motion.div>
        </div>

        {/* Floating cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 relative"
        >
          <div className="relative max-w-4xl mx-auto">
            {/* Main demo preview card */}
            <div className="glass-card rounded-2xl p-6 md:p-8 shadow-card relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-cyan/20 rounded-full blur-[60px]" />
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-purple/20 rounded-full blur-[60px]" />
              
              <div className="relative grid md:grid-cols-2 gap-6 items-center">
                {/* Fake vs Real comparison */}
                <div className="relative">
                  <div className="text-xs text-muted-foreground mb-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                    Analyzing upload...
                  </div>
                  <div className="aspect-video rounded-lg bg-muted/50 flex items-center justify-center border border-border/50 overflow-hidden">
                    <div className="text-center p-4">
                      <Shield className="w-12 h-12 text-cyan mx-auto mb-2 animate-pulse" />
                      <p className="text-sm text-muted-foreground">Upload any image to analyze</p>
                    </div>
                  </div>
                </div>

                {/* Results preview */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Authenticity Score</span>
                    <span className="text-2xl font-bold text-cyan">94%</span>
                  </div>
                  <div className="h-2 rounded-full bg-muted overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: "94%" }}
                      transition={{ duration: 1.5, delay: 1 }}
                      className="h-full bg-gradient-to-r from-cyan to-cyan-glow rounded-full"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="glass-card rounded-lg p-3">
                      <div className="text-xs text-muted-foreground">Status</div>
                      <div className="text-sm font-semibold text-green-400">AUTHENTIC</div>
                    </div>
                    <div className="glass-card rounded-lg p-3">
                      <div className="text-xs text-muted-foreground">Risk Level</div>
                      <div className="text-sm font-semibold text-cyan">LOW</div>
                    </div>
                  </div>

                  <div className="pt-2 space-y-2">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      No manipulation detected
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      Original metadata intact
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-green-400" />
                      No AI generation artifacts
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating accent cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -left-6 glass-card rounded-xl p-4 shadow-lg hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan to-purple flex items-center justify-center">
                  <Shield className="w-5 h-5 text-background" />
                </div>
                <div>
                  <div className="text-sm font-semibold">47+</div>
                  <div className="text-xs text-muted-foreground">Detection Methods</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass-card rounded-xl p-4 shadow-lg hidden lg:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple to-cyan flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-background" />
                </div>
                <div>
                  <div className="text-sm font-semibold">94%+</div>
                  <div className="text-xs text-muted-foreground">Accuracy Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1 h-2 rounded-full bg-cyan" />
        </motion.div>
      </motion.div>
    </section>
  );
}
