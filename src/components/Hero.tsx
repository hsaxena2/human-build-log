const Hero = () => {
  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
          Diary of a CTO
        </h1>
        <p className="text-2xl md:text-3xl text-muted-foreground leading-relaxed italic mb-12">
          I want to understand what it really means to build — not just systems, but yourself.
        </p>
        <div className="prose prose-lg max-w-none">
          <p className="text-lg leading-relaxed mb-6">
            I've spent most of my career around engineering leaders — people who build what the world runs on.
            What I've learned is simple: <em className="font-medium text-foreground">the hardest systems to maintain are human ones.</em>
          </p>
          <p className="text-lg leading-relaxed">
            Over the next two years, I'm speaking with 250+ CTOs and VPs of Engineering to understand the <strong>human side of building technology</strong> — the decisions that kept them up at night, the trade-offs they never talked about, and how they learned to stay human while leading machines.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
