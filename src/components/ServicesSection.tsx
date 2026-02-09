import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Pen, Palette, Scissors, Sparkles } from "lucide-react";

const services = [
  {
    icon: Pen,
    title: "Modern Tools",
    description: "State-of-the-art equipment ensuring precision, safety, and the finest detail in every piece.",
  },
  {
    icon: Palette,
    title: "New Design",
    description: "Custom designs tailored to your vision, from concept sketches to the final masterpiece.",
  },
  {
    icon: Scissors,
    title: "Stylish Brush",
    description: "Artistic brushwork techniques that bring depth and dimension to every tattoo design.",
  },
  {
    icon: Sparkles,
    title: "Beautiful Cutter",
    description: "Precision cutting and detailing that creates clean lines and stunning visual impact.",
  },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" ref={ref} className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="text-center group"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 flex items-center justify-center rounded-full border-2 border-primary/30 group-hover:border-primary group-active:border-primary group-hover:bg-primary/5 transition-all duration-300">
                <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-display mb-2 sm:mb-3 text-foreground">{service.title}</h3>
              <p className="text-muted-foreground font-body font-light text-xs sm:text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
