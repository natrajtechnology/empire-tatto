import { useState, useEffect } from "react";
import { Menu, X, Heart, ShoppingCart, Search } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/#home", isRoute: false },
  { label: "Shop", href: "/shop", isRoute: true },
  { label: "About", href: "/#about", isRoute: false },
  { label: "Services", href: "/#services", isRoute: false },
  { label: "Portfolio", href: "/#portfolio", isRoute: false },
  { label: "Blog", href: "/#blog", isRoute: false },
  { label: "Contact", href: "/#contact", isRoute: false },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

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
        <div className="animate-marquee whitespace-nowrap py-1.5 sm:py-2 text-xs sm:text-sm">
          <span className="mx-4 sm:mx-8">
            <span className="text-primary font-semibold">20% Off</span>
            <span className="text-dark-surface-foreground"> on every product for all tattoos</span>
          </span>
          <span className="mx-4 sm:mx-8">
            <span className="text-primary font-semibold">20% Off</span>
            <span className="text-dark-surface-foreground"> on every product for all tattoos</span>
          </span>
          <span className="mx-4 sm:mx-8">
            <span className="text-primary font-semibold">20% Off</span>
            <span className="text-dark-surface-foreground"> on every product for all tattoos</span>
          </span>
          <span className="mx-4 sm:mx-8">
            <span className="text-primary font-semibold">20% Off</span>
            <span className="text-dark-surface-foreground"> on every product for all tattoos</span>
          </span>
        </div>
      </div>

      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <Link to="/" className="font-display text-xl sm:text-2xl italic text-dark-surface-foreground tracking-wide">
          inkittoos
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.isRoute ? (
                <Link
                  to={link.href}
                  className="text-dark-surface-foreground/80 hover:text-primary transition-colors text-sm font-body tracking-wider uppercase"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="text-dark-surface-foreground/80 hover:text-primary transition-colors text-sm font-body tracking-wider uppercase"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3 sm:gap-4 text-dark-surface-foreground/80">
          <button className="hover:text-primary transition-colors p-1.5"><Heart size={20} /></button>
          <button className="hidden sm:block hover:text-primary transition-colors p-1.5"><Search size={20} /></button>
          <button className="hover:text-primary transition-colors relative p-1.5">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
          </button>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-dark-surface-foreground p-1.5 ml-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="lg:hidden fixed inset-0 top-0 bg-[hsl(220,20%,8%)] z-50 flex flex-col"
          >
            {/* Close button */}
            <div className="flex justify-between items-center px-4 py-3 sm:px-6 sm:py-4">
              <span className="font-display text-xl italic text-dark-surface-foreground">inkittoos</span>
              <button
                onClick={() => setMobileOpen(false)}
                className="text-dark-surface-foreground p-2 active:scale-90 transition-transform"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Links */}
            <ul className="flex flex-col items-center justify-center flex-1 gap-6">
              {navLinks.map((link, i) => (
                <motion.li
                  key={link.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-dark-surface-foreground text-2xl font-display hover:text-primary active:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-dark-surface-foreground text-2xl font-display hover:text-primary active:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  )}
                </motion.li>
              ))}
            </ul>

            {/* Bottom icons */}
            <div className="flex justify-center gap-8 pb-10 text-dark-surface-muted">
              <button className="p-3 active:text-primary transition-colors"><Heart size={22} /></button>
              <button className="p-3 active:text-primary transition-colors"><Search size={22} /></button>
              <button className="p-3 active:text-primary transition-colors relative">
                <ShoppingCart size={22} />
                <span className="absolute top-1 right-1 bg-primary text-primary-foreground text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
