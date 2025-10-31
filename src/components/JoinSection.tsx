import CTAButtons from "./CTAButtons";

const JoinSection = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-bold mb-8">Join the Project</h2>
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg leading-relaxed">
            If you're a CTO or VP of Engineering with a story that changed how you lead — I want to hear it.
          </p>
          <p className="text-lg leading-relaxed">
            This isn't a media interview.<br />
            It's a conversation between builders — about pressure, purpose, and what it costs to hold things together.
          </p>
        </div>
        <CTAButtons 
          primaryText="Book a Conversation"
          primaryHref="#book"
          secondaryText="Email Me"
          secondaryHref="mailto:himanshusaxena97@gmail.com"
        />
      </div>
    </section>
  );
};

export default JoinSection;
