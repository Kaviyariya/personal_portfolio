import { ArrowRight, Code2, Github, Linkedin, Download } from "lucide-react";
import { TypingEffect } from "./TypingEffect";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export function Hero({
  name = "Kaviya Balamurugan",
  roles = ["AI & Data Science Student", "Java Full Stack Developer", "AWS Enthusiast"],
  tagline = "I build intelligent full-stack applications and explore the potential of AI and Cloud technologies.",
}) {
  return (
    <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden px-6 pt-24">
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/20 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-accent/20 blur-3xl animate-pulse-glow" />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="animate-fade-up">

          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
            Hi, I'm <span className="text-gradient">{name}</span>
          </h1>
          <p className="mt-4 min-h-[2.5rem] text-xl font-medium text-muted-foreground sm:text-2xl">
            <TypingEffect phrases={roles} />
          </p>
          <p className="mt-6 max-w-xl text-base text-muted-foreground/90 sm:text-lg">
            {tagline}
          </p>

          <div className="mt-8 flex items-center gap-5">
            <a href="https://github.com/Kaviyariya" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-smooth hover:text-primary">
              <Github className="h-6 w-6" />
            </a>
            <a href="https://www.linkedin.com/in/kaviya--balamurugan" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-smooth hover:text-primary">
              <Linkedin className="h-6 w-6" />
            </a>
            <a href="https://leetcode.com/u/kaviyabalamurugan950/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground transition-smooth hover:text-primary">
              <Code2 className="h-6 w-6" />
            </a>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-smooth hover:scale-105"
            >
              View My Work
              <ArrowRight className="h-4 w-4 transition-smooth group-hover:translate-x-1" />
            </button>
            <a
              href="https://drive.google.com/file/d/1sYWswOmO6AWCAgzAHv1kdn3DRDK3LC-Z/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3 text-sm font-semibold text-foreground backdrop-blur transition-smooth hover:border-primary hover:text-primary"
            >
              Resume <Download className="h-4 w-4" />
            </a>
          </div>


        </div>

        {/* Avatar / orb */}
        <div className="relative mx-auto hidden lg:block">
          <div className="relative h-[420px] w-[420px] animate-float">
            <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-2xl" />
            <div className="absolute inset-6 rounded-full bg-gradient-card glass shadow-elegant" />
            <div className="absolute inset-12 rounded-full bg-gradient-primary opacity-90 shadow-accent-glow" />
            <div className="absolute inset-0 grid place-items-center">
              <span className="text-8xl font-black text-primary-foreground/90 drop-shadow-lg">
                KB
              </span>
            </div>
            {/* floating chips */}
            <div className="absolute -top-2 right-4 rounded-xl glass px-4 py-2 text-xs font-semibold shadow-card">
              🤖 AI & DS
            </div>
            <div className="absolute bottom-8 -left-2 rounded-xl glass px-4 py-2 text-xs font-semibold shadow-card">
              ☕ Java
            </div>
            <div className="absolute top-1/2 -right-4 rounded-xl glass px-4 py-2 text-xs font-semibold shadow-card">
              ☁️ AWS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
