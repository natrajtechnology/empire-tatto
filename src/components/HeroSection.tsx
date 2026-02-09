import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="Tattoo artist" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-surface/80 via-dark-surface/50 to-transparent" />
      </div>

      <div className="relative container mx-auto px-6 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="max-w-2xl"
        >
          <h1 className="text-6xl md:text-8xl font-display italic text-dark-surface-foreground leading-[1.1] mb-6">
            Beautiful<br />Tattoos
          </h1>
          <p className="text-dark-surface-muted text-lg leading-relaxed mb-8 max-w-md font-body font-light">
            Transform your body into a canvas of art. Our expert artists bring your visions to life with precision and passion.
          </p>
          <motion.a
            href="#portfolio"
            whileHover={{ x: 5 }}
            className="inline-flex items-center gap-2 text-primary font-body text-sm uppercase tracking-widest border-b-2 border-primary pb-1 hover:gap-3 transition-all"
          >
            Explore Our Work <ChevronRight size={16} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-dark-surface-foreground/40 rounded-full flex justify-center">
          <div className="w-1.5 h-3 bg-dark-surface-foreground/60 rounded-full mt-2" />
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
