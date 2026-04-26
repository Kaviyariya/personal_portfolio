import { Briefcase, Award, ExternalLink } from "lucide-react";

const experience = [
  {
    role: "Data Science Intern",
    org: "Nitroware Technologies",
    period: "May 2025",
    desc: "Focused on data preprocessing, analysis, and machine learning concepts using Python. Gained hands-on experience in building data-driven models.",
  },
];

const certifications = [
  {
    title: "Java Full Stack Development",
    org: "Wipro TalentNext",
    link: "https://drive.google.com/file/d/1sYWswOmO6AWCAgzAHv1kdn3DRDK3LC-Z/view?usp=sharing",
  },
  {
    title: "AWS Cloud Practitioner Essentials",
    org: "Amazon Web Services",
    link: "https://drive.google.com/file/d/1sYWswOmO6AWCAgzAHv1kdn3DRDK3LC-Z/view?usp=sharing",
  },
  {
    title: "Python for Data Science",
    org: "NPTEL",
    link: "https://drive.google.com/file/d/1sYWswOmO6AWCAgzAHv1kdn3DRDK3LC-Z/view?usp=sharing",
  },
  {
    title: "Data Science Internship Certificate",
    org: "Nitroware",
    link: "https://drive.google.com/file/d/1sYWswOmO6AWCAgzAHv1kdn3DRDK3LC-Z/view?usp=sharing",
  },
];

export function ExperienceContent() {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      {/* Experience Column */}
      <div className="space-y-8">
        <h2 className="flex items-center gap-3 text-2xl font-bold">
          <Briefcase className="h-6 w-6 text-primary" />
          Professional Experience
        </h2>
        <div className="relative border-l-2 border-border/50 pl-8 ml-3 space-y-12">
          {experience.map((item) => (
            <div key={item.role} className="relative">
              <div className="absolute -left-[41px] top-0 h-4 w-4 rounded-full border-2 border-primary bg-background shadow-glow" />
              <div className="rounded-2xl border border-border bg-gradient-card p-6 shadow-card transition-smooth hover:border-primary/50">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="text-lg font-bold">{item.role}</h3>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                    {item.period}
                  </span>
                </div>
                <p className="mt-1 font-semibold text-muted-foreground">{item.org}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Certifications Column */}
      <div className="space-y-8">
        <h2 className="flex items-center gap-3 text-2xl font-bold">
          <Award className="h-6 w-6 text-accent" />
          Certifications
        </h2>
        <div className="grid gap-4">
          {certifications.map((cert) => (
            <a
              key={cert.title}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-border bg-card/40 p-5 backdrop-blur transition-smooth hover:border-accent hover:bg-accent/5 hover:shadow-glow"
            >
              <div>
                <h3 className="font-bold transition-smooth group-hover:text-accent">
                  {cert.title}
                </h3>
                <p className="text-sm text-muted-foreground">{cert.org}</p>
              </div>
              <ExternalLink className="h-5 w-5 text-muted-foreground transition-smooth group-hover:translate-x-1 group-hover:text-accent" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
