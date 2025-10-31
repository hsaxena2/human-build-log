import { Linkedin, Globe, Mail } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="py-16 border-t border-border">
      <div className="container mx-auto max-w-4xl px-6">
        <h2 className="mb-8 text-center">About Himanshu Saxena</h2>
        <div className="max-w-2xl mx-auto text-center space-y-6">
          <p className="text-lg md:text-xl leading-relaxed">
            Building growth and storytelling engines for SaaS and AI products. Now focused on understanding <strong className="font-semibold">why we build</strong> and how leaders maintain clarity under pressure.
          </p>
          <div className="flex justify-center gap-6 pt-4">
            <a 
              href="https://www.linkedin.com/in/hsaxena2" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://firstprinciples.today" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              <Globe size={20} />
              <span>Blog</span>
            </a>
            <a 
              href="mailto:himanshusaxena97@gmail.com"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
            >
              <Mail size={20} />
              <span>Email</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
