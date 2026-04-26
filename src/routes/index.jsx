import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/Section";
import { PageHeading } from "@/components/PageHeading";
import { AboutContent } from "@/components/sections/AboutContent";
import { SkillsContent } from "@/components/sections/SkillsContent";
import { ProjectsContent } from "@/components/sections/ProjectsContent";
import { ExperienceContent } from "@/components/sections/ExperienceContent";
import { InterestsContent } from "@/components/sections/InterestsContent";
import { ContactContent } from "@/components/sections/ContactContent";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kaviya Balamurugan — Java Full Stack Developer & AWS Cloud Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Kaviya Balamurugan — Java Full Stack Developer and AWS Cloud Engineer building scalable apps and reliable cloud systems.",
      },
      { property: "og:title", content: "Kaviya Balamurugan — Java Full Stack Developer & AWS Cloud Engineer" },
      {
        property: "og:description",
        content:
          "Explore projects, skills, certifications, and experience of Kaviya Balamurugan.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
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
  );
}
