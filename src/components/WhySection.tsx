const WhySection = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="mb-8">Why I'm Doing This</h2>
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">
            Every founder or leader eventually hits a wall that metrics can't explain.
            Through DevDynamics, Out of the Blue, and Loopr AI, I've worked with engineering teams scaling fast — and I kept seeing the same pattern:
            Great leaders build high-performing systems, then quietly burn out inside them.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            That's the paradox I want to study.
            What happens to the human when everything around them is optimized for machines?
          </p>
          <p className="text-lg md:text-xl leading-relaxed italic text-muted-foreground border-l-4 border-accent pl-6">
            Diary of a CTO is not a technical book.
            It's a human one — about clarity under chaos, about learning to unbuild the ego you built your identity on, and about rediscovering meaning when growth stops being a graph and starts being a question.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
