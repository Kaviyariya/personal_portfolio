import { Github, Linkedin, Mail, Code2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-card/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">Kaviya Balamurugan</span>
        </p>
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/Kaviyariya"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary hover:text-primary hover:shadow-glow"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/kaviya--balamurugan"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary hover:text-primary hover:shadow-glow"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="https://leetcode.com/u/kaviyabalamurugan950/"
            target="_blank"
            rel="noreferrer"
            aria-label="LeetCode"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary hover:text-primary hover:shadow-glow"
          >
            <Code2 className="h-4 w-4" />
          </a>
          <a
            href="mailto:kaviyabalamurugan950@gmail.com"
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full border border-border text-muted-foreground transition-smooth hover:border-primary hover:text-primary hover:shadow-glow"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
