import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Instagram, Twitter, Music2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-40 pb-20 px-6 overflow-hidden bg-grid">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
        >
          Stop Guessing. <span className="text-primary">Start Converting.</span><br />
          Copy That Turns Skeptics into Customers.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Most business owners leave money on the table because their words don’t sell. 
          I combine consumer psychology with high-stakes copywriting to help you scale 
          your revenue, dominate your niche, and reclaim your time.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button size="lg" className="h-14 px-8 text-base font-semibold bg-primary text-background hover:bg-primary/90 rounded-none">
            Get My Free Strategy Audit
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-base font-semibold border-white/10 hover:bg-white/5 rounded-none">
            View My Work
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col items-center gap-4"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">
            Trusted by founders on
          </p>
          <div className="flex items-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <Twitter className="w-6 h-6" />
            <Instagram className="w-6 h-6" />
            <Music2 className="w-6 h-6" />
          </div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" />
    </section>
  );
}
