const AboutSection = () => {
  return (
    <section className="py-16 border-t border-border bg-secondary/20">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="mb-8">Who I Am</h2>
        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">
            I'm <strong className="font-semibold">Himanshu Saxena</strong> — I've built growth and storytelling engines for SaaS and AI products, from early-stage startups to enterprise launches.
            But what I care about most now is <strong className="font-semibold">why we build</strong> — and how people at the top keep their clarity when everything depends on them.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            I started as a marketer, became a storyteller, and ended up studying engineers — because they're the ones shaping the future quietly, one decision at a time.
          </p>
          <p className="text-lg md:text-xl leading-relaxed">
            This project is my way of documenting them — and, in some sense, understanding myself.
          </p>
          <div className="flex flex-wrap gap-4 mt-8 text-base md:text-lg">
            <a 
              href="https://www.linkedin.com/in/hsaxena2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-underline text-accent font-medium"
            >
              LinkedIn
            </a>
            <span className="text-muted-foreground">·</span>
            <a 
              href="https://firstprinciples.today" 
              target="_blank" 
              rel="noopener noreferrer"
              className="link-underline text-accent font-medium"
            >
              FirstPrinciples.today
            </a>
            <span className="text-muted-foreground">·</span>
            <a 
              href="mailto:himanshusaxena97@gmail.com"
              className="link-underline text-accent font-medium"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
