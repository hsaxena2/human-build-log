import { Card, CardContent } from "@/components/ui/card";
import humanSystemImage from "@/assets/human-system.jpg";

const WhySection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6">The Paradox</h2>
            <p className="text-lg md:text-xl leading-relaxed mb-6">
              Every founder or leader eventually hits a wall that metrics can't explain. Great leaders build high-performing systems, then quietly burn out inside them.
            </p>
            <Card className="border-l-4 border-accent bg-accent/5">
              <CardContent className="pt-6">
                <p className="text-base md:text-lg italic text-muted-foreground">
                  "What happens to the human when everything around them is optimized for machines?"
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative">
            <img 
              src={humanSystemImage} 
              alt="Human complexity in systems" 
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
