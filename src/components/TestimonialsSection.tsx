import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "An incredible experience from start to finish. The artistry and attention to detail exceeded all my expectations. Truly a masterpiece on skin.",
    name: "Mr. George Orwell",
  },
  {
    text: "The team made me feel so comfortable throughout the entire process. My tattoo is absolutely stunning and exactly what I envisioned.",
    name: "Sarah Mitchell",
  },
  {
    text: "Professional, clean, and incredibly talented artists. I've been to many studios but this one stands above them all. Highly recommended.",
    name: "James Rodriguez",
  },
];

const TestimonialsSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center relative px-6 sm:px-0">
          <span className="text-6xl sm:text-8xl text-primary/20 font-display absolute -top-4 sm:-top-6 left-0">"</span>
          
          <h2 className="text-3xl sm:text-4xl font-display mb-8 sm:mb-12 text-foreground">Clients Feedback</h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-muted-foreground text-base sm:text-lg leading-relaxed font-body font-light mb-6 sm:mb-8 italic">
                {testimonials[current].text}
              </p>
              <p className="text-primary font-display text-lg sm:text-xl">{testimonials[current].name}</p>
            </motion.div>
          </AnimatePresence>

          <span className="text-6xl sm:text-8xl text-primary/20 font-display absolute -bottom-4 sm:-bottom-6 right-0 rotate-180">"</span>

          <div className="flex justify-center gap-2 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-sm transition-all duration-300 ${
                  index === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
