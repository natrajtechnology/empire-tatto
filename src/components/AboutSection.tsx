import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import about1 from "@/assets/about-1.jpg";
import about2 from "@/assets/about-2.jpg";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="relative h-[360px] sm:h-[420px] mx-auto w-full max-w-md md:max-w-none"
          >
            <img
              src={about1}
              alt="Tattoo process"
              className="w-52 sm:w-72 h-72 sm:h-96 object-cover rounded-sm shadow-2xl"
            />
            <img
              src={about2}
              alt="Tattoo artwork"
              className="w-40 sm:w-56 h-52 sm:h-72 object-cover rounded-sm shadow-2xl absolute top-24 sm:top-32 left-32 sm:left-48 border-4 border-background"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <span className="text-primary font-body text-sm uppercase tracking-widest">Adorn your Dreams</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display mt-3 mb-4 sm:mb-6 text-foreground">
              Story Behind Every Tattoo
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-4 font-body font-light text-sm sm:text-base">
              Every tattoo tells a story — a moment frozen in time, a belief etched in skin, a dream made permanent. Our studio is where art meets soul, creating pieces that are as unique as you are.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6 sm:mb-8 font-body font-light text-sm sm:text-base">
              With over a decade of experience, our master artists specialize in everything from traditional to contemporary styles, ensuring each design is crafted with meticulous attention to detail.
            </p>
            <a
              href="#portfolio"
              className="inline-flex items-center gap-2 text-foreground font-body text-sm uppercase tracking-widest border-b-2 border-foreground pb-1 hover:text-primary hover:border-primary active:text-primary transition-colors"
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
