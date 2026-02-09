import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronRight } from "lucide-react";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";

const posts = [
  {
    image: blog1,
    date: "July 12, 2025",
    author: "Ram M",
    title: "Adore Your Style Of Design With Passion",
    excerpt: "Discover how choosing the right tattoo style can transform your self-expression...",
  },
  {
    image: blog2,
    date: "July 12, 2025",
    author: "Ram M",
    title: "Roll Your Hand And Tattoo Is In New Trend",
    excerpt: "Hand tattoos have emerged as one of the boldest statements in modern body art...",
  },
  {
    image: blog3,
    date: "July 12, 2025",
    author: "Ram M",
    title: "Trace Your Art With New Designs",
    excerpt: "Explore the latest innovations in tattoo machine technology and technique...",
  },
];

const BlogSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="blog" ref={ref} className="py-24 bg-dark-surface">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm uppercase tracking-widest">New Updates</span>
          <h2 className="text-4xl md:text-5xl font-display mt-3 text-dark-surface-foreground">Recent Blog</h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden rounded-sm mb-5">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <p className="text-primary font-body text-sm italic mb-2">
                {post.date} , By {post.author}
              </p>
              <h3 className="text-xl font-display text-dark-surface-foreground mb-3 group-hover:text-primary transition-colors">
                {post.title}
              </h3>
              <p className="text-dark-surface-muted font-body font-light text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <a className="inline-flex items-center gap-1 text-dark-surface-foreground font-body text-sm uppercase tracking-wider border-b border-dark-surface-foreground/50 pb-1 hover:text-primary hover:border-primary transition-colors">
                Read More <ChevronRight size={14} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
