import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <img
              src={about1}
              alt="Tattoo process"
              className="w-72 h-96 object-cover rounded-sm shadow-2xl"
            />
            <img
              src={about2}
              alt="Tattoo artwork"
              className="w-56 h-72 object-cover rounded-sm shadow-2xl absolute top-32 left-48 border-4 border-background"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-primary font-body text-sm uppercase tracking-widest">Adorn your Dreams</span>
            <h2 className="text-4xl md:text-5xl font-display mt-3 mb-6 text-foreground">
              Story Behind Every Tattoo
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body font-light">
              Every tattoo tells a story — a moment frozen in time, a belief etched in skin, a dream made permanent. Our studio is where art meets soul, creating pieces that are as unique as you are.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 font-body font-light">
              With over a decade of experience, our master artists specialize in everything from traditional to contemporary styles, ensuring each design is crafted with meticulous attention to detail.
            </p>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-foreground font-body text-sm uppercase tracking-widest border-b-2 border-foreground pb-1 hover:text-primary hover:border-primary transition-colors"
            >
              Shop Now <ChevronRight size={16} />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
