import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI Learning Companion",
    description:
      "A personalized education platform that adapts study plans and generates quizzes using the MERN Stack and Python. Focuses on individual learning paces.",
    tags: ["MongoDB", "Express", "React", "Node.js", "Python"],
    emoji: "📚",
    demo: "#",
    code: "https://github.com/Kaviyariya",
  },
  {
    title: "AI Assistant for Autism Support",
    description:
      "A conversational tool designed to provide emotional guidance and daily activity suggestions for individuals with autism. Built for accessibility.",
    tags: ["React", "Python", "NLP", "Tailwind CSS"],
    emoji: "🤝",
    demo: "#",
    code: "https://github.com/Kaviyariya",
  },
  {
    title: "Online Food Delivery System",
    description:
      "A robust backend system for managing restaurant orders and menus. Features real-time tracking and order management.",
    tags: ["Java", "Spring Boot", "MySQL", "REST API"],
    emoji: "🍕",
    demo: "#",
    code: "https://github.com/Kaviyariya",
  },
  {
    title: "Cloud-Native Inventory Manager",
    description:
      "Scalable inventory tracking system deployed on AWS. Utilizes S3 for storage and Lambda for serverless processing.",
    tags: ["AWS", "Spring Boot", "S3", "Lambda"],
    emoji: "☁️",
    demo: "#",
    code: "https://github.com/Kaviyariya",
  },
  {
    title: "Predictive Maintenance Engine",
    description:
      "An AI-driven system that analyzes sensor data to predict equipment failure before it happens, reducing downtime.",
    tags: ["Python", "Scikit-Learn", "FastAPI", "IoT"],
    emoji: "⚙️",
    demo: "#",
    code: "https://github.com/Kaviyariya",
  },
];

export function ProjectsContent() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((p) => (
        <article
          key={p.title}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
        >
          <div className="relative grid h-44 place-items-center overflow-hidden bg-gradient-primary/20">
            <div className="absolute inset-0 bg-gradient-primary opacity-30" />
            <span className="relative text-7xl drop-shadow-lg transition-smooth group-hover:scale-110">
              {p.emoji}
            </span>
          </div>
          <div className="flex flex-1 flex-col p-6">
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border bg-background/40 px-2.5 py-1 text-[11px] font-medium text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3">
              {p.demo && p.demo !== "#" && (
                <a
                  href={p.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-smooth hover:text-accent"
                >
                  Live Demo <ExternalLink className="h-3.5 w-3.5" />
                </a>
              )}
              {p.code && p.code !== "#" && (
                <a
                  href={p.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-muted-foreground transition-smooth hover:text-foreground"
                >
                  Code <Github className="h-3.5 w-3.5" />
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
