
import MainLayout from "@/components/layouts/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import ServicesSection from "@/components/home/ServicesSection";
import ImpactSection from "@/components/home/ImpactSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import PartnershipSection from "@/components/home/PartnershipSection";
import CTASection from "@/components/home/CTASection";
import { useLanguage } from "@/contexts/LanguageContext";

const Index = () => {
  const { t } = useLanguage();

  return (
    <MainLayout>
      <HeroSection />
      <ServicesSection />
      <ImpactSection />
      <TestimonialsSection />
      <PartnershipSection />
      <CTASection />
    </MainLayout>
  );
};

export default Index;
