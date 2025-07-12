import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import InnovationSection from "@/components/InnovationSection";
import SuccessStoriesSection from "@/components/SuccessStoriesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ServicesSection />
      <InnovationSection />
      <SuccessStoriesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
