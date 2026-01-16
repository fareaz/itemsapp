import FeaturesSection from "@/components/home/FeaturesSection";
import AboutSection from "@/components/home/AboutSection";
import HowItWorksSection from "@/components/home/HowItWorksSection";
import PopularSection from "@/components/home/PopularSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import ContactSection from "@/components/home/ContactSection";
import Banner from "@/components/home/Banner";

export default function HomePage() {
  return (
    <div className="text-gray-900 dark:text-gray-100">
      <Banner></Banner>
      <FeaturesSection />
      <AboutSection />
      <HowItWorksSection />
      <PopularSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
