import CTAButtons from "./CTAButtons";
import { Card, CardContent } from "@/components/ui/card";
import communityImage from "@/assets/community.jpg";

const CommunitySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <img 
              src={communityImage} 
              alt="Community conversations" 
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="mb-4">The Community</h2>
            <p className="text-xl md:text-2xl italic text-muted-foreground mb-6">
              A quiet room in a loud industry.
            </p>
            <Card className="bg-accent/5 border-accent/20 mb-6">
              <CardContent className="pt-6">
                <p className="text-base md:text-lg mb-4">
                  Private Slack space for senior technology leaders who lead through complexity and carry silent doubts.
                </p>
                <p className="text-base font-medium text-foreground">
                  No marketing. No noise. Just truth, curiosity, and shared context.
                </p>
              </CardContent>
            </Card>
            <CTAButtons 
              primaryText="Request Access"
              primaryHref="#slack"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;
