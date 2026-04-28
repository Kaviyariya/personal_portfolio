import { Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { hash: "home", label: "Home" },
  { hash: "about", label: "About" },
  { hash: "skills", label: "Skills" },
  { hash: "projects", label: "Projects" },
  { hash: "certifications", label: "Certifications" },
  { hash: "experience", label: "Experience" },
  { hash: "interests", label: "Interests" },
  { hash: "contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToHash = (hash) => {
    if (hash === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(hash);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleHashClick = async (hash) => {
    setOpen(false);
    if (router.state.location.pathname !== "/") {
      await router.navigate({ to: "/" });
      setTimeout(() => scrollToHash(hash), 100);
    } else {
      scrollToHash(hash);
    }
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled ? "glass shadow-card" : "glass"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="group flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary font-bold text-primary-foreground shadow-glow">
            KB
          </span>
          <span className="hidden text-base font-semibold tracking-wide sm:inline">
            Kaviya<span className="text-gradient">Balamurugan</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.hash}>
              <button
                type="button"
                onClick={() => handleHashClick(l.hash)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-smooth hover:text-foreground"
              >
                {l.label}
              </button>
            </li>
          ))}
        </ul>



        <button
          type="button"
          aria-label="Toggle menu"
          className="rounded-md p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="glass border-t border-border lg:hidden">
          <ul className="flex flex-col p-4">
            {links.map((l) => (
              <li key={l.hash}>
                <button
                  type="button"
                  onClick={() => handleHashClick(l.hash)}
                  className="block w-full rounded-md px-3 py-3 text-left text-sm font-medium text-muted-foreground hover:bg-secondary/60 hover:text-foreground"
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
