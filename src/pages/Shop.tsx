import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Grid3X3, List, Plus, Minus, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";

const Shop = () => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [sortBy, setSortBy] = useState("featured");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 10000]);
  const [stockFilter, setStockFilter] = useState<"all" | "in" | "out">("all");

  const toggleCategory = (cat: string) => {
    setExpandedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  const filteredProducts = products
    .filter((p) => {
      if (selectedCategory && p.category !== selectedCategory) return false;
      if (p.price < priceRange[0] || p.price > priceRange[1]) return false;
      if (stockFilter === "in" && !p.inStock) return false;
      if (stockFilter === "out" && p.inStock) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "price-asc") return a.price - b.price;
      if (sortBy === "price-desc") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  const maxPrice = Math.max(...products.map((p) => p.price));

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <div className="pt-28 sm:pt-32 pb-4 bg-dark-surface">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center gap-2 text-sm font-body text-dark-surface-muted">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-dark-surface-foreground">Shop</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl text-dark-surface-foreground mt-3">
            Our Collections
          </h1>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-72 shrink-0">
            {/* Category Filter */}
            <div className="mb-8">
              <h3 className="font-display text-xl mb-4">Category</h3>
              <div className="border-t border-border pt-4 space-y-1">
                <button
                  onClick={() => setSelectedCategory(null)}
                  className={`block w-full text-left py-2 text-sm font-body transition-colors ${
                    !selectedCategory ? "text-primary font-semibold" : "text-foreground/70 hover:text-foreground"
                  }`}
                >
                  All Products
                </button>
                {categories.map((cat) => (
                  <div key={cat.name}>
                    <button
                      className="flex items-center justify-between w-full py-2 text-sm font-body group"
                      onClick={() => {
                        setSelectedCategory(cat.name);
                        toggleCategory(cat.name);
                      }}
                    >
                      <span className={`flex items-center gap-2 transition-colors ${
                        selectedCategory === cat.name ? "text-primary font-semibold" : "text-foreground/70 group-hover:text-foreground"
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current" />
                        {cat.name}
                      </span>
                      {expandedCategories.includes(cat.name) ? (
                        <Minus size={14} className="text-primary" />
                      ) : (
                        <Plus size={14} className="text-muted-foreground" />
                      )}
                    </button>
                    {expandedCategories.includes(cat.name) && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        className="pl-6 space-y-1 overflow-hidden"
                      >
                        {cat.subcategories.map((sub) => (
                          <button
                            key={sub}
                            className="block py-1 text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            <span className="flex items-center gap-2">
                              <span className="w-1 h-1 rounded-full bg-current" />
                              {sub}
                            </span>
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Availability */}
            <div className="mb-8">
              <h3 className="font-display text-xl mb-4">Availability</h3>
              <div className="border-t border-border pt-4 flex gap-4">
                {(["all", "in", "out"] as const).map((val) => (
                  <button
                    key={val}
                    onClick={() => setStockFilter(val)}
                    className={`text-sm font-body py-1 px-3 rounded-full border transition-colors ${
                      stockFilter === val
                        ? "border-primary text-primary"
                        : "border-border text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {val === "all" ? "All" : val === "in" ? `In stock (${products.filter(p => p.inStock).length})` : `Out (${products.filter(p => !p.inStock).length})`}
                  </button>
                ))}
              </div>
            </div>

            {/* Price */}
            <div className="mb-8">
              <h3 className="font-display text-xl mb-4">Price</h3>
              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-3">
                  The highest price is Rs. {maxPrice.toLocaleString()}
                </p>
                <div className="flex gap-3 items-center">
                  <div className="flex-1">
                    <label className="text-xs text-muted-foreground">From ₹</label>
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([+e.target.value, priceRange[1]])}
                      className="w-full mt-1 px-3 py-2 bg-card border border-border rounded text-sm font-body"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="text-xs text-muted-foreground">To ₹</label>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], +e.target.value])}
                      className="w-full mt-1 px-3 py-2 bg-card border border-border rounded text-sm font-body"
                    />
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded transition-colors ${viewMode === "grid" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`}
                >
                  <Grid3X3 size={18} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded transition-colors ${viewMode === "list" ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground hover:text-foreground"}`}
                >
                  <List size={18} />
                </button>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground font-body hidden sm:inline">Sort by</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-primary text-primary-foreground px-4 py-2 rounded text-sm font-body cursor-pointer"
                >
                  <option value="featured">Featured</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name">Name</option>
                </select>
              </div>
            </div>

            {/* Product Grid */}
            <div className={viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
              : "space-y-4"
            }>
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={`/shop/${product.id}`}
                    className={`group block ${viewMode === "list" ? "flex gap-6 items-center" : ""}`}
                  >
                    <div className={`bg-card rounded-lg overflow-hidden ${viewMode === "list" ? "w-40 h-40 shrink-0" : "aspect-square"}`}>
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className={viewMode === "list" ? "" : "mt-4"}>
                      <h3 className="font-display text-lg group-hover:text-primary transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-primary font-body font-semibold mt-1">
                        Rs. {product.price.toLocaleString()}
                      </p>
                      <p className="text-sm text-muted-foreground font-body mt-1">
                        {product.vendor}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20 text-muted-foreground font-body">
                No products found matching your filters.
              </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
