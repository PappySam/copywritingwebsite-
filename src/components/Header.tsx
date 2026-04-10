import { Instagram, Twitter, Music2 } from "lucide-react";
import { motion } from "motion/react";

export default function Header() {
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Results", href: "#results" },
    { name: "Process", href: "#process" },
  ];

  const socials = [
    { icon: Instagram, href: "https://instagram.com/pappysamcopy", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/ola51105", label: "X" },
    { icon: Music2, href: "https://tiktok.com/@pappysamcopy", label: "TikTok" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold tracking-tighter"
        >
          PAPPYSAMCOPY
        </motion.div>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socials.map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, color: "#FFC107" }}
              className="text-muted-foreground hover:text-primary transition-all hover:drop-shadow-[0_0_8px_rgba(255,193,7,0.5)]"
            >
              <social.icon className="w-5 h-5" strokeWidth={1.5} />
              <span className="sr-only">{social.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </header>
  );
}
