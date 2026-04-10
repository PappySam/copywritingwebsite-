import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-secondary/10">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Let’s talk numbers.</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Have a project in mind or just want to see if we’re a fit? 
            Drop a message. I respond to humans, not bots.
          </p>
          
          <div className="space-y-6">
            <a 
              href="mailto:pappys.aemarketing@gmail.com" 
              className="group flex items-center gap-4 p-6 bg-secondary/20 border border-white/5 hover:border-primary/30 transition-all"
            >
              <div className="w-12 h-12 bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-background transition-all">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Direct Email</div>
                <div className="text-lg font-medium">pappys.aemarketing@gmail.com</div>
              </div>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-secondary/20 p-8 md:p-12 border border-white/5"
        >
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
                <Input placeholder="John Doe" className="bg-background/50 border-white/10 rounded-none h-12 focus:border-primary/50" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-muted-foreground">Website URL</label>
                <Input placeholder="yourbrand.com" className="bg-background/50 border-white/10 rounded-none h-12 focus:border-primary/50" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Monthly Revenue Goal</label>
              <Input placeholder="$50k / $100k / $500k" className="bg-background/50 border-white/10 rounded-none h-12 focus:border-primary/50" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
              <Textarea placeholder="Tell me about your offer..." className="bg-background/50 border-white/10 rounded-none min-h-[150px] focus:border-primary/50" />
            </div>
            <Button className="w-full h-14 bg-primary text-background hover:bg-primary/90 font-bold text-base rounded-none">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
