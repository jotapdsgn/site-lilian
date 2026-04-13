import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MarqueeBanner from "../components/MarqueeBanner";
import TopicsSection from "../components/TopicsSection";
import TreatmentsSection from "../components/TreatmentsSection";
import AboutSection from "../components/AboutSection";
import GallerySection from "../components/GallerySection";
import TestimonialsSection from "../components/TestimonialsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection />
      <MarqueeBanner />

      <TreatmentsSection />
      <GallerySection />
      <AboutSection />
      <TopicsSection />
      <MarqueeBanner />

      <TestimonialsSection />

      <ContactSection />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}