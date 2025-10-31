const PlanSection = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="mb-8">The Plan</h2>
        <p className="text-xl font-semibold text-muted-foreground mb-8">2025–2027</p>
        <ul className="space-y-4">
          <li className="flex items-start group">
            <span className="text-accent mr-3 mt-1 font-bold transition-transform group-hover:translate-x-1">→</span>
            <span className="text-lg md:text-xl leading-relaxed">Talk to 250+ CTOs, VPs of Engineering, and technical founders around the world</span>
          </li>
          <li className="flex items-start group">
            <span className="text-accent mr-3 mt-1 font-bold transition-transform group-hover:translate-x-1">→</span>
            <span className="text-lg md:text-xl leading-relaxed">Document their real stories — the failures, the pivots, the turning points</span>
          </li>
          <li className="flex items-start group">
            <span className="text-accent mr-3 mt-1 font-bold transition-transform group-hover:translate-x-1">→</span>
            <span className="text-lg md:text-xl leading-relaxed">Publish the <em>Diary of a CTO</em> book with a production partner</span>
          </li>
          <li className="flex items-start group">
            <span className="text-accent mr-3 mt-1 font-bold transition-transform group-hover:translate-x-1">→</span>
            <span className="text-lg md:text-xl leading-relaxed">Release essays, short films, and conversations along the way</span>
          </li>
          <li className="flex items-start group">
            <span className="text-accent mr-3 mt-1 font-bold transition-transform group-hover:translate-x-1">→</span>
            <span className="text-lg md:text-xl leading-relaxed">Build a private Slack community where these stories continue — peer to peer, without the posturing</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default PlanSection;
