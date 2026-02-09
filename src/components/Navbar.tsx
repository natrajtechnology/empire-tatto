import { useState, useEffect } from "react";
import { Menu, X, Heart, ShoppingCart, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark-surface/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      {/* Announcement Bar */}
      <div className="bg-primary/10 border-b border-primary/20 overflow-hidden">
        <div className="animate-marquee whitespace-nowrap py-2 text-sm">
          <span className="mx-8">
            <span className="text-primary font-semibold">20% Off</span>
            <span className="text-dark-surface-foreground"> on every product for all tattoos</span>
          </span>
          <span className="mx-8">
            <span className="text-primary font-semibold">20% Off</span>
            <span className="text-dark-surface-foreground"> on every product for all tattoos</span>
          </span>
          <span className="mx-8">
            <span className="text-primary font-semibold">20% Off</span>
            <span className="text-dark-surface-foreground"> on every product for all tattoos</span>
          </span>
          <span className="mx-8">
            <span className="text-primary font-semibold">20% Off</span>
            <span className="text-dark-surface-foreground"> on every product for all tattoos</span>
          </span>
        </div>
      </div>

      <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="font-display text-2xl italic text-dark-surface-foreground tracking-wide">
          inkittoos
        </a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-dark-surface-foreground/80 hover:text-primary transition-colors text-sm font-body tracking-wider uppercase"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-4 text-dark-surface-foreground/80">
          <button className="hover:text-primary transition-colors"><Heart size={20} /></button>
          <button className="hover:text-primary transition-colors"><Search size={20} /></button>
          <button className="hover:text-primary transition-colors relative">
            <ShoppingCart size={20} />
            <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-dark-surface-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-surface/95 backdrop-blur-md border-t border-border/20"
          >
            <ul className="flex flex-col items-center gap-4 py-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-dark-surface-foreground/80 hover:text-primary transition-colors text-sm tracking-wider uppercase"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
