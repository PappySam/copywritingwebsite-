import { motion } from "motion/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      id: "01",
      title: "High-Conversion Sales Pages",
      result: "A 24/7 digital salesperson.",
      description: "Psychology-backed pages that handle objections before they're even raised."
    },
    {
      id: "02",
      title: "Retention-Driven Email Campaigns",
      result: "Predictable recurring revenue.",
      description: "Emails that people actually look forward to opening and buying from."
    },
    {
      id: "03",
      title: "Strategic Website Copy",
      result: "Instant brand authority.",
      description: "Turning your digital home into a conversion machine that builds trust."
    },
    {
      id: "04",
      title: "Punchy Product Descriptions",
      result: "Higher AOV.",
      description: "Making your products irresistible with descriptions that sell the transformation."
    }
  ];

  return (
    <section id="services" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">The Solutions</h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              Precision-engineered copy designed to move the needle on your most important metrics.
            </p>
          </div>
          <div className="text-primary font-mono text-sm tracking-widest uppercase">
            [ Services / 2026 ]
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group bg-secondary/20 border-white/5 hover:border-primary/30 transition-all duration-500 rounded-none h-full">
                <CardHeader className="flex flex-row items-start justify-between">
                  <div className="text-4xl font-bold text-white/10 group-hover:text-primary/20 transition-colors font-heading">
                    {service.id}
                  </div>
                  <ArrowUpRight className="w-6 h-6 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </CardHeader>
                <CardContent>
                  <CardTitle className="text-2xl mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>
                  <div className="pt-6 border-t border-white/5">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground block mb-2">The Result</span>
                    <span className="text-lg font-medium text-white">{service.result}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
