import { motion } from "motion/react";

export default function Process() {
  const steps = [
    {
      title: "Deep-Dive Research",
      description: "I spend 80% of my time inside your customer's head. Understanding their fears, desires, and the exact language they use."
    },
    {
      title: "Psychological Mapping",
      description: "Mapping out the emotional journey from 'skeptic' to 'buyer' using proven persuasion frameworks."
    },
    {
      title: "The High-Stakes Draft",
      description: "Writing the copy that bridges the gap between your offer and their deepest needs."
    },
    {
      title: "Optimization & Scale",
      description: "Testing, refining, and ensuring every word is pulling its weight to maximize your ROI."
    }
  ];

  return (
    <section id="process" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">The Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="text-primary font-mono text-sm mb-4">STEP 0{index + 1}</div>
              <h3 className="text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-4 -right-4 w-8 h-[1px] bg-white/10" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
