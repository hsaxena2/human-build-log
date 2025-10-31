import CTAButtons from "./CTAButtons";

const CommunitySection = () => {
  return (
    <section className="py-16 border-t border-border bg-secondary/30">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="text-4xl font-bold mb-4">The Community</h2>
        <p className="text-2xl italic text-muted-foreground mb-8">A quiet room in a loud industry.</p>
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg leading-relaxed">
            The <em>Diary of a CTO</em> community is a private Slack space for senior technology leaders — people who lead through complexity, carry silent doubts, and want a place to talk about the things performance reviews never capture.
          </p>
          <p className="text-lg leading-relaxed">
            No marketing. No noise.<br />
            Just truth, curiosity, and shared context.
          </p>
          <p className="text-lg leading-relaxed">
            If you're building at scale and want to be part of a real conversation, request an invite.
          </p>
        </div>
        <CTAButtons 
          primaryText="Request Slack Access"
          primaryHref="#slack"
        />
      </div>
    </section>
  );
};

export default CommunitySection;
