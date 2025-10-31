import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const NewsletterSection = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-bold mb-8">Stay in the Loop</h2>
        <p className="text-lg leading-relaxed mb-8">
          I'll share reflections, essays, and stories as this journey unfolds.
          If you want to follow along — or be part of it — join the list below.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 max-w-xl">
          <Input 
            type="email" 
            placeholder="your@email.com" 
            className="text-base"
          />
          <Button type="submit" size="lg" className="text-base whitespace-nowrap">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
