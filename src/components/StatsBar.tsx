import { Users, BookOpen, Calendar } from "lucide-react";

const StatsBar = () => {
  return (
    <section className="border-y border-border bg-secondary/20">
      <div className="container mx-auto max-w-5xl px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-accent/10 p-3 rounded-lg">
              <Users className="text-accent" size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">250+</div>
              <div className="text-sm text-muted-foreground">CTOs & VPs</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-accent/10 p-3 rounded-lg">
              <Calendar className="text-accent" size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">2025-2027</div>
              <div className="text-sm text-muted-foreground">Timeline</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-accent/10 p-3 rounded-lg">
              <BookOpen className="text-accent" size={24} />
            </div>
            <div>
              <div className="text-2xl font-bold text-foreground">1 Book</div>
              <div className="text-sm text-muted-foreground">+ Essays & Films</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsBar;
