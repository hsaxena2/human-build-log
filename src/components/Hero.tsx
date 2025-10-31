import heroImage from "@/assets/hero-network.jpg";

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Hero Image Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Technology network visualization" 
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 py-24 md:py-32 animate-fade-in">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
            2-Year Research Project
          </div>
          <h1 className="mb-6 leading-[1.1] max-w-3xl">
            Diary of a CTO
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-2xl mb-8 font-medium">
            Understanding what it really means to build — not just systems, but yourself.
          </p>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl text-muted-foreground">
            A deep dive into the human side of technology leadership through conversations with 250+ CTOs and VPs of Engineering.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
