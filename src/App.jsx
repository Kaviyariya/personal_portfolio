import React from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Section } from "./components/Section";
import { PageHeading } from "./components/PageHeading";
import { AboutContent } from "./components/sections/AboutContent";
import { SkillsContent } from "./components/sections/SkillsContent";
import { ProjectsContent } from "./components/sections/ProjectsContent";
import { ExperienceContent } from "./components/sections/ExperienceContent";
import { InterestsContent } from "./components/sections/InterestsContent";
import { ContactContent } from "./components/sections/ContactContent";
import "./styles.css";

function App() {
  return (
    <div className="flex min-h-[100dvh] flex-col overflow-x-hidden bg-[oklch(0.13_0.04_265)]">
      <Navbar />
      <main className="flex-1">
        <Hero />

        <Section id="about">
          <PageHeading eyebrow="Who I Am" title="About" highlight="Me" subtitle="A snapshot of my journey and what drives me." />
          <div className="mt-14">
            <AboutContent />
          </div>
        </Section>

        <Section id="skills">
          <PageHeading eyebrow="What I Use" title="Skills &" highlight="Tech" subtitle="The tools and technologies I reach for when building products." />
          <div className="mt-14">
            <SkillsContent />
          </div>
        </Section>

        <Section id="projects">
          <PageHeading eyebrow="Selected Work" title="Featured" highlight="Projects" subtitle="A few things I've built recently — each shipped end-to-end." />
          <div className="mt-14">
            <ProjectsContent />
          </div>
        </Section>

        <Section id="experience">
          <PageHeading eyebrow="My Path" title="Experience &" highlight="Certifications" subtitle="Where I've worked and the credentials I've earned." />
          <div className="mt-14">
            <ExperienceContent />
          </div>
        </Section>

        <Section id="interests">
          <PageHeading eyebrow="Beyond Code" title="My" highlight="Interests" subtitle="Topics and activities I love exploring." />
          <div className="mt-14">
            <InterestsContent />
          </div>
        </Section>

        <Section id="contact">
          <PageHeading eyebrow="Say Hello" title="Get in" highlight="Touch" subtitle="Let's connect — I'd love to hear from you." />
          <div className="mt-14">
            <ContactContent />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
