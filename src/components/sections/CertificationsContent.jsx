import { Award } from "lucide-react";

const certifications = [
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services", year: "2024" },
  { name: "Java Full Stack Development", issuer: "Coursera", year: "2024" },
];

export function CertificationsContent() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((c) => (
          <div
            key={c.name}
            className="group rounded-2xl border border-border bg-gradient-card p-5 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/60 hover:shadow-glow"
          >
            <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-primary text-primary-foreground">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="font-semibold">{c.name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{c.issuer}</p>
            <p className="mt-2 text-xs font-medium text-primary">{c.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
