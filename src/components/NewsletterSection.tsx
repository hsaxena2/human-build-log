import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";

const NewsletterSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-3xl px-6">
        <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20">
          <CardContent className="pt-8">
            <h2 className="mb-4 text-center">Stay Updated</h2>
            <p className="text-lg text-center text-muted-foreground mb-8 max-w-xl mx-auto">
              Get reflections, essays, and stories as this journey unfolds.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                className="text-base h-12 border-2 bg-background"
              />
              <Button type="submit" variant="premium" size="lg" className="whitespace-nowrap">
                Subscribe
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default NewsletterSection;
