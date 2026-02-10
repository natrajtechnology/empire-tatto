import product1 from "@/assets/product-1.jpg";
import product2 from "@/assets/product-2.jpg";
import product3 from "@/assets/product-3.jpg";
import product4 from "@/assets/product-4.jpg";
import product5 from "@/assets/product-5.jpg";
import product6 from "@/assets/product-6.jpg";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  subcategory?: string;
  vendor: string;
  type: string;
  inStock: boolean;
  colors?: string[];
  materials?: string[];
  description: string;
}

export const categories = [
  {
    name: "Rotary Machine",
    subcategories: ["Dynamic Tattoo Ink", "Piercing Kit"],
  },
  {
    name: "Pneumatic Machine",
    subcategories: ["Tattoo Gun", "Pen Machine"],
  },
  {
    name: "Tattoo Ink",
    subcategories: ["Classic Ink", "Modern Ink"],
  },
  {
    name: "Accessories",
    subcategories: ["Needle Cartridges", "Chairs", "Gloves"],
  },
];

export const products: Product[] = [
  {
    id: "tattoo-machine",
    name: "Tattoo Machine",
    price: 1200,
    image: product1,
    category: "Rotary Machine",
    vendor: "Samurai",
    type: "Machines",
    inStock: true,
    colors: ["Silver", "Black"],
    materials: ["Metal", "Steel"],
    description: "Professional-grade rotary tattoo machine with adjustable stroke length. Precision-engineered for smooth, consistent performance. Ideal for both lining and shading work.",
  },
  {
    id: "tattoo-piercing-machine",
    name: "Tattoo Piercing Machine",
    price: 950,
    image: product2,
    category: "Rotary Machine",
    subcategory: "Piercing Kit",
    vendor: "Samurai",
    type: "Machines",
    inStock: true,
    colors: ["Blue", "Silver"],
    materials: ["Aluminum", "Steel"],
    description: "Versatile piercing machine built for precision. Lightweight aluminum frame with powerful motor for clean, accurate piercings every time.",
  },
  {
    id: "tattoo-ink-pens",
    name: "Tattoo Ink Pens",
    price: 500,
    image: product3,
    category: "Pneumatic Machine",
    vendor: "Samurai",
    type: "Pens",
    inStock: true,
    colors: ["Black", "Teal"],
    materials: ["Plastic", "Steel"],
    description: "Ergonomic tattoo pen with smooth grip and consistent ink flow. Perfect for detailed line work and precise shading techniques.",
  },
  {
    id: "tattoo-ink",
    name: "Tattoo Ink",
    price: 780,
    image: product4,
    category: "Tattoo Ink",
    subcategory: "Classic Ink",
    vendor: "Dynamic",
    type: "Ink",
    inStock: true,
    colors: ["Black", "Red"],
    description: "Premium quality tattoo ink with rich, long-lasting pigmentation. Vegan-friendly formula that heals clean and holds its vibrancy over time.",
  },
  {
    id: "portable-chair",
    name: "Portable Chair",
    price: 7800,
    image: product5,
    category: "Accessories",
    subcategory: "Chairs",
    vendor: "StudioPro",
    type: "Furniture",
    inStock: true,
    colors: ["Black"],
    materials: ["Leather", "Steel"],
    description: "Hydraulic tattoo chair with full recline capability. Adjustable armrests and headrest for maximum client comfort during long sessions.",
  },
  {
    id: "needle-cartridges",
    name: "Needle Cartridge Kit",
    price: 450,
    image: product6,
    category: "Accessories",
    subcategory: "Needle Cartridges",
    vendor: "Samurai",
    type: "Needles",
    inStock: true,
    materials: ["Surgical Steel"],
    description: "Pack of 20 premium needle cartridges in assorted configurations. Medical-grade surgical steel with membrane safety system for hygienic, hassle-free needle changes.",
  },
];
