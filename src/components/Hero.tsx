const Hero = () => {
  return (
    <section className="py-20 md:py-32 animate-fade-in">
      <div className="container mx-auto max-w-4xl px-6">
        <h1 className="mb-8 leading-[1.1]">
          Diary of a CTO
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed italic mb-12 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          I want to understand what it really means to build — not just systems, but yourself.
        </p>
        <div className="prose prose-lg max-w-none animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <p className="text-lg md:text-xl leading-relaxed mb-6">
            I've spent most of my career around engineering leaders — people who build what the world runs on.
            What I've learned is simple: <em className="font-semibold text-foreground not-italic">the hardest systems to maintain are human ones.</em>
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            Over the next two years, I'm speaking with 250+ CTOs and VPs of Engineering to understand the <strong className="font-semibold">human side of building technology</strong> — the decisions that kept them up at night, the trade-offs they never talked about, and how they learned to stay human while leading machines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
