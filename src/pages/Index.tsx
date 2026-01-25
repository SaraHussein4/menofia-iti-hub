import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import ProgramsSection from "@/components/ProgramsSection";
import AboutPreview from "@/components/AboutPreview";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <StatsSection />
      <AboutPreview />
      <ProgramsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
