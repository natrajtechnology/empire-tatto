import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Play } from "lucide-react";
import videoBg from "@/assets/video-bg.jpg";

const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative h-[50vh] sm:h-[70vh] overflow-hidden">
      <img src={videoBg} alt="Tattoo studio" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-dark-surface/40" />
      
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <button className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-primary/60 flex items-center justify-center hover:border-primary active:border-primary hover:bg-primary/10 active:bg-primary/10 transition-all duration-300 group">
          <Play className="w-8 h-8 text-primary ml-1 group-hover:scale-110 transition-transform" />
        </button>
      </motion.div>
    </section>
  );
};

export default VideoSection;
