import { motion } from "motion/react";

export default function Results() {
  const results = [
    { label: "Average Revenue Lift", value: "42%" },
    { label: "Email Open Rates", value: "38%+" },
    { label: "Ad Spend Saved", value: "$250k+" },
  ];

  return (
    <section id="results" className="py-24 px-6 bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {results.map((result, index) => (
            <motion.div
              key={result.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-8 border border-white/5 bg-background/40"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary mb-2">{result.value}</div>
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground">{result.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
