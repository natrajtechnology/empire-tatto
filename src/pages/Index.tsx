import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";

// Lazy load components below the fold
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const PortfolioSection = lazy(() => import("@/components/PortfolioSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const VideoSection = lazy(() => import("@/components/VideoSection"));
const BlogSection = lazy(() => import("@/components/BlogSection"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Suspense fallback={<div className="min-h-screen" />}>
        <ServicesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <VideoSection />
        <BlogSection />
        <Footer />
      </Suspense>
    </div>
  );
};

export default Index;
