import { Instagram, Twitter, Music2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Left Column */}
        <div className="space-y-6">
          <div className="text-2xl font-bold tracking-tighter">PAPPYSAMCOPY</div>
          <p className="text-muted-foreground leading-relaxed max-w-xs">
            Where Psychology Meets Profit. High-stakes copywriting for brands that want to dominate.
          </p>
          <div className="pt-4">
            <p className="text-xs font-medium text-primary uppercase tracking-[0.2em] mb-4">Follow the Journey</p>
            <p className="text-sm text-muted-foreground">
              Get daily psychology-backed marketing tips on <a href="https://x.com/ola51105" className="text-white hover:text-primary transition-colors underline underline-offset-4">X</a> and <a href="https://instagram.com/pappysamcopy" className="text-white hover:text-primary transition-colors underline underline-offset-4">Instagram</a>.
            </p>
          </div>
        </div>

        {/* Center Column */}
        <div className="space-y-6">
          <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white/40">Quick Links</h3>
          <ul className="space-y-4">
            <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Work With Me</a></li>
            <li><a href="#results" className="text-muted-foreground hover:text-primary transition-colors">Case Studies</a></li>
            <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-white/40">Stay Connected</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3 text-muted-foreground">
              <Twitter className="w-4 h-4" />
              <a href="https://x.com/ola51105" className="hover:text-primary transition-colors">@ola51105</a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <Instagram className="w-4 h-4" />
              <a href="https://instagram.com/pappysamcopy" className="hover:text-primary transition-colors">@pappysamcopy</a>
            </li>
            <li className="flex items-center gap-3 text-muted-foreground">
              <Music2 className="w-4 h-4" />
              <a href="https://tiktok.com/@pappysamcopy" className="hover:text-primary transition-colors">@pappysamcopy</a>
            </li>
            <li className="pt-4 text-white font-medium">
              <a href="mailto:pappys.aemarketing@gmail.com" className="hover:text-primary transition-colors">pappys.aemarketing@gmail.com</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
        <div>© 2026 PAPPYSAMCOPY. All Rights Reserved.</div>
        <div>Built for Revenue.</div>
      </div>
    </footer>
  );
}
