import { Button } from "@/components/ui/button";

interface CTAButtonsProps {
  primaryText: string;
  primaryHref: string;
  secondaryText?: string;
  secondaryHref?: string;
}

const CTAButtons = ({ primaryText, primaryHref, secondaryText, secondaryHref }: CTAButtonsProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-8">
      <Button 
        asChild 
        size="lg"
        className="text-base"
      >
        <a href={primaryHref}>{primaryText}</a>
      </Button>
      {secondaryText && secondaryHref && (
        <Button 
          asChild 
          variant="outline" 
          size="lg"
          className="text-base"
        >
          <a href={secondaryHref}>{secondaryText}</a>
        </Button>
      )}
    </div>
  );
};

export default CTAButtons;
