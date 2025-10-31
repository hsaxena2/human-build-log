import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
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
      <StatsBar />
      <div className="container mx-auto max-w-5xl px-6 py-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <CTAButtons 
            primaryText="Join the Community"
            primaryHref="#community"
            secondaryText="Get in Touch"
            secondaryHref="mailto:himanshusaxena97@gmail.com"
          />
        </div>
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
