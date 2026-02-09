import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-dark-surface border-t border-border/10 py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 mb-12">
          <div>
            <h3 className="font-display text-2xl italic text-dark-surface-foreground mb-4">inkittoos</h3>
            <p className="text-dark-surface-muted font-body font-light text-sm leading-relaxed">
              Premium tattoo studio crafting beautiful art since 2010. Every piece tells a unique story.
            </p>
          </div>
          <div>
            <h4 className="font-display text-lg text-dark-surface-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Portfolio"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-dark-surface-muted text-sm font-body hover:text-primary transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg text-dark-surface-foreground mb-4">Contact</h4>
            <ul className="space-y-2 text-dark-surface-muted text-sm font-body">
              <li>123 Art Street, Studio 4</li>
              <li>New Delhi, India</li>
              <li>+91 98765 43210</li>
              <li>hello@inkittoos.com</li>
            </ul>
          </div>
          <div>
            <h4 className="font-display text-lg text-dark-surface-foreground mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 border border-dark-surface-muted/30 rounded-full flex items-center justify-center text-dark-surface-muted hover:text-primary hover:border-primary transition-colors">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border/10 pt-8 text-center">
          <p className="text-dark-surface-muted text-sm font-body font-light flex items-center justify-center gap-1">
            Made with <Heart size={14} className="text-primary" /> © 2025 inkittoos. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
