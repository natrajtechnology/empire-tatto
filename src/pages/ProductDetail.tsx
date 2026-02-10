import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Minus, Plus, ShoppingCart, Heart } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<"description" | "shipping" | "reviews">("description");
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedMaterial, setSelectedMaterial] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-32 text-center">
          <h1 className="font-display text-3xl">Product not found</h1>
          <Link to="/shop" className="text-primary mt-4 inline-block font-body hover:underline">
            ← Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const recommended = products.filter((p) => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-28 sm:pt-32 pb-4 bg-dark-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm font-body text-dark-surface-muted flex-wrap">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
            <ChevronRight size={14} />
            <span className="text-dark-surface-foreground">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Product Main */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-card rounded-lg overflow-hidden aspect-square"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h1 className="font-display text-3xl sm:text-4xl mb-6">{product.name}</h1>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground font-body w-28">Price:</span>
                <span className="text-primary font-body font-bold text-xl">Rs. {product.price.toLocaleString()}</span>
              </div>

              {product.colors && product.colors.length > 0 && (
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground font-body w-28">Color:</span>
                  <div className="flex gap-2">
                    {product.colors.map((color, i) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(i)}
                        className={`w-8 h-8 rounded-full border-2 transition-all ${
                          selectedColor === i ? "border-primary scale-110" : "border-border"
                        }`}
                        style={{
                          backgroundColor: color.toLowerCase() === "silver" ? "#c0c0c0"
                            : color.toLowerCase() === "teal" ? "#008080"
                            : color.toLowerCase() === "blue" ? "#3b82f6"
                            : color.toLowerCase(),
                        }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              )}

              {product.materials && product.materials.length > 0 && (
                <div className="flex items-center gap-4">
                  <span className="text-muted-foreground font-body w-28">Material:</span>
                  <div className="flex gap-2">
                    {product.materials.map((mat, i) => (
                      <button
                        key={mat}
                        onClick={() => setSelectedMaterial(i)}
                        className={`px-4 py-1.5 rounded border text-sm font-body transition-colors ${
                          selectedMaterial === i
                            ? "border-primary text-primary bg-primary/10"
                            : "border-border text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        {mat}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4">
                <span className="text-muted-foreground font-body w-28">Vendor:</span>
                <span className="font-body">{product.vendor}</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-muted-foreground font-body w-28">Type:</span>
                <span className="font-body">{product.type}</span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-muted-foreground font-body w-28">Availability:</span>
                <span className={`font-body font-semibold ${product.inStock ? "text-green-500" : "text-red-500"}`}>
                  {product.inStock ? "In stock!" : "Out of stock"}
                </span>
              </div>

              {/* Quantity */}
              <div className="flex items-center gap-4">
                <span className="text-muted-foreground font-body w-28">Quantity:</span>
                <div className="flex items-center border border-border rounded">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-2 text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 font-body min-w-[3rem] text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-2 text-primary hover:bg-primary/10 transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button className="flex-1 bg-primary text-primary-foreground py-3 rounded font-body font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-[0.98] transition-all">
                  <ShoppingCart size={18} />
                  Add to Cart
                </button>
                <button className="w-12 h-12 border border-border rounded flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors">
                  <Heart size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tabs */}
        <div className="mt-16">
          <div className="flex border-b border-border">
            {(["description", "shipping", "reviews"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 font-body text-sm capitalize transition-colors border-b-2 -mb-px ${
                  activeTab === tab
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab === "shipping" ? "Shipping Information" : tab}
              </button>
            ))}
          </div>

          <div className="py-8 max-w-3xl">
            {activeTab === "description" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-body text-muted-foreground leading-relaxed space-y-4"
              >
                <p>{product.description}</p>
                <p>
                  All our products are sourced from trusted manufacturers and undergo rigorous quality testing. 
                  Each item comes with a manufacturer's warranty and our satisfaction guarantee.
                </p>
              </motion.div>
            )}
            {activeTab === "shipping" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-body text-muted-foreground leading-relaxed space-y-4"
              >
                <p>We offer free shipping on all orders above Rs. 2,000. Standard delivery takes 5-7 business days.</p>
                <p>Express shipping is available for an additional Rs. 200 and delivers within 2-3 business days.</p>
                <p>International shipping is available to select countries. Please contact us for rates and delivery times.</p>
              </motion.div>
            )}
            {activeTab === "reviews" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="font-body text-muted-foreground"
              >
                <p>No reviews yet. Be the first to review this product!</p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Recommended */}
        <div className="mt-12 pt-12 border-t border-border">
          <h2 className="font-display text-2xl sm:text-3xl text-center mb-10">
            Recommended Products
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {recommended.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link to={`/shop/${p.id}`} className="group block">
                  <div className="bg-card rounded-lg overflow-hidden aspect-square">
                    <img
                      src={p.image}
                      alt={p.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-display text-base sm:text-lg mt-3 group-hover:text-primary transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-primary font-body font-semibold text-sm sm:text-base">
                    Rs. {p.price.toLocaleString()}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetail;
