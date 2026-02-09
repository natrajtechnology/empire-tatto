import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";

const images = [
  { src: portfolio1, alt: "Couple with tattoos" },
  { src: portfolio2, alt: "Back tattoo" },
  { src: portfolio3, alt: "Sleeve tattoo" },
  { src: portfolio4, alt: "Shoulder tattoo" },
];

const PortfolioSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="portfolio" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-widest">Beautiful designs for clients</span>
          <h2 className="text-4xl md:text-5xl font-display mt-3 text-foreground">Portfolio</h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-72 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
