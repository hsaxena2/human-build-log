import Hero from "@/components/Hero";
import CTAButtons from "@/components/CTAButtons";
import WhySection from "@/components/WhySection";
import PlanSection from "@/components/PlanSection";
import CommunitySection from "@/components/CommunitySection";
import JoinSection from "@/components/JoinSection";
import AboutSection from "@/components/AboutSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <div className="container mx-auto max-w-4xl px-6 pb-8">
        <CTAButtons 
          primaryText="Join the CTO Community"
          primaryHref="#community"
          secondaryText="Connect with Me"
          secondaryHref="mailto:himanshusaxena97@gmail.com"
        />
      </div>
      <WhySection />
      <PlanSection />
      <CommunitySection />
      <JoinSection />
      <AboutSection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
