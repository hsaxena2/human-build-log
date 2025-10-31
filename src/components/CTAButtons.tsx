import { Button } from "@/components/ui/button";

interface CTAButtonsProps {
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
  variant?: "default" | "premium";
}

const CTAButtons = ({ primaryText, primaryHref, secondaryText, secondaryHref, variant = "premium" }: CTAButtonsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in" style={{ animationDelay: "0.3s" }}>
      <Button 
        asChild 
        size="lg"
        variant={variant}
      >
        <a href={primaryHref}>{primaryText}</a>
      </Button>
      {secondaryText && secondaryHref && (
        <Button 
          asChild 
          variant="outline" 
          size="lg"
        >
          <a href={secondaryHref}>{secondaryText}</a>
        </Button>
      )}
    </div>
  );
};

export default CTAButtons;
