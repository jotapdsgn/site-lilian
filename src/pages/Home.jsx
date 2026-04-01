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

const IMAGES = {
  treatment: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/e90027931_generated_31a96336.png",
  filler: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/945a231a5_generated_dc01f921.png",
  botox: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/408de247d_generated_55350f63.png",
  pdo: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/fdd891351_generated_7cb335ec.png",
  laser: "https://media.base44.com/images/public/69c6fc2447dd489dd576db88/92a239970_generated_e0fd8d4e.png",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <HeroSection />
      <MarqueeBanner />

      <TreatmentsSection images={IMAGES} />
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