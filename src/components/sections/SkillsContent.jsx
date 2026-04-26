const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Spring Boot", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
    ],
  },
  {
    title: "Database & Tools",
    skills: [
      { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "Git", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "AWS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
      { name: "Postman", logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Java", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    ],
  },
];

export function SkillsContent() {
  return (
    <div className="space-y-8">
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="group relative overflow-hidden rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition-smooth hover:border-primary/60 hover:shadow-glow"
        >
          <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-primary/10 blur-2xl transition-smooth group-hover:bg-primary/30" />
          <h3 className="relative mb-5 text-xl font-semibold">{group.title}</h3>
          <div className="relative flex flex-wrap gap-4">
            {group.skills.map((s) => (
              <div
                key={s.name}
                className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-card/40 px-5 py-4 transition-smooth hover:-translate-y-1 hover:border-primary/40 hover:bg-card/60 hover:shadow-glow"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-background/60 p-2">
                  <img
                    src={s.logo}
                    alt={`${s.name} logo`}
                    className="h-full w-full object-contain"
                    loading="lazy"
                  />
                </div>
                <span className="text-sm font-medium text-foreground">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
