import { motion } from "motion/react";

export default function About() {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-7xl mx-auto grid md:grid-row lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            You don’t need a “writer.” <br />
            You need a <span className="text-primary italic">Revenue Architect.</span>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Let’s be honest: Beautiful design is useless if your message falls flat.
            </p>
            <p>
              I’m PappySam, and I don't just "write words." I build psychological bridges. 
              I spend 80% of my time researching your audience’s deepest pains and 
              20% writing the solution they’ve been searching for.
            </p>
            <p>
              Whether you’re a coach looking to fill a high-ticket program or an 
              eCommerce brand hungry for higher LTV, my mission is simple: 
              To make your offer so compelling that saying ‘no’ feels like a mistake.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-square md:aspect-video lg:aspect-square bg-secondary rounded-2xl overflow-hidden border border-white/5"
        >
          <img 
            src="https://picsum.photos/seed/copywriter/800/800" 
            alt="PappySam Workspace" 
            className="object-cover w-full h-full opacity-60 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute bottom-8 left-8">
            <div className="text-primary font-bold text-xl mb-1">PappySam</div>
            <div className="text-sm text-muted-foreground uppercase tracking-widest">Revenue Architect</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
