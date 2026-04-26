import { User, GraduationCap } from "lucide-react";

export function AboutContent() {
  return (
    <div className="grid gap-12 lg:grid-cols-5">
      <div className="lg:col-span-2">
        <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-3xl bg-gradient-card glass shadow-elegant">
          <div className="absolute inset-0 grid place-items-center">
            <User className="h-32 w-32 text-primary/40" strokeWidth={1} />
          </div>
          <div className="absolute -bottom-1 -right-1 h-32 w-32 rounded-full bg-gradient-primary blur-2xl opacity-60" />
        </div>
      </div>

      <div className="lg:col-span-3">
        <p className="text-lg leading-relaxed text-muted-foreground">
          I'm <strong>Kaviya Balamurugan</strong> — a dedicated AI & Data Science student and Java Full Stack Developer. I thrive on building intelligent systems and scalable cloud solutions that solve real-world problems.
        </p>
        
        <div className="mt-8 space-y-6">
          <h3 className="flex items-center gap-2 text-xl font-bold text-foreground">
            <GraduationCap className="h-5 w-5 text-primary" />
            Education
          </h3>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card/30 p-5 backdrop-blur transition-smooth hover:border-primary/50">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">2023 — 2027</p>
              <h4 className="mt-1 text-base font-bold">B.Tech in AI & Data Science</h4>
              <p className="text-sm text-muted-foreground">Dr. N.G.P. iTech</p>
              <p className="mt-2 text-sm font-medium">CGPA: 8.3 / 10</p>
            </div>
            <div className="rounded-2xl border border-border bg-card/30 p-5 backdrop-blur transition-smooth hover:border-primary/50">
              <p className="text-xs font-bold uppercase tracking-widest text-accent">Completed 2023</p>
              <h4 className="mt-1 text-base font-bold">Higher Secondary (12th)</h4>
              <p className="text-sm text-muted-foreground">GGHSS Pandhalgudi</p>
              <p className="mt-2 text-sm font-medium">Score: 87%</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-x-12 gap-y-6 border-t border-border pt-8">
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">Location</h4>
            <p className="mt-2 font-medium text-muted-foreground">Coimbatore, Tamil Nadu</p>
          </div>
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-accent">Status</h4>
            <p className="mt-2 font-medium text-muted-foreground">Seeking Internships</p>
          </div>
        </div>
      </div>
    </div>
  );
}
