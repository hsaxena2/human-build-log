import CTAButtons from "./CTAButtons";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Calendar } from "lucide-react";

const JoinSection = () => {
  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto max-w-4xl px-6">
        <div className="text-center mb-12">
          <h2 className="mb-4">Share Your Story</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            If you're a CTO or VP of Engineering with a story that changed how you lead — I want to hear it.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Book a Call</h3>
              <p className="text-muted-foreground mb-4">
                Schedule a conversation to share your journey
              </p>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Mail className="text-accent" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Me</h3>
              <p className="text-muted-foreground mb-4">
                Reach out directly to start the dialogue
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <CTAButtons 
            primaryText="Book a Conversation"
            primaryHref="#book"
            secondaryText="Send Email"
            secondaryHref="mailto:himanshusaxena97@gmail.com"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinSection;
