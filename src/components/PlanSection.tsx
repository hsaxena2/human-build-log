import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, BookText, Film, Users } from "lucide-react";

const PlanSection = () => {
  const plans = [
    {
      icon: MessageSquare,
      title: "250+ Conversations",
      description: "Deep interviews with CTOs, VPs of Engineering, and technical founders worldwide"
    },
    {
      icon: BookText,
      title: "Document Stories",
      description: "Real failures, pivots, and turning points — the unfiltered truth"
    },
    {
      icon: Film,
      title: "Book + Media",
      description: "A published book, essays, and short films throughout the journey"
    },
    {
      icon: Users,
      title: "Private Community",
      description: "Slack space for peer-to-peer conversations without posturing"
    }
  ];

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto max-w-5xl px-6">
        <div className="text-center mb-12">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-4">
            2025–2027
          </div>
          <h2 className="mb-4">The Plan</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {plans.map((plan, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-accent/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <plan.icon className="text-accent" size={24} />
                </div>
                <CardTitle className="text-xl">{plan.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{plan.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanSection;
