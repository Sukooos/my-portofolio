// app/page.tsx
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
// import ProjectsSection from "../components/ProjectsSection";
// import ExperienceSection from "../components/ExperienceSection";
// import ContactSection from "../components/ContactSection";

export default function HomePage() {
  return (
    <div className="snap-scroll snap-y snap-mandatory h-screen overflow-y-auto">
      <section id="hero" className="snap-start w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
        <HeroSection />
      </section>
      <section id="about" className="snap-start min-h-screen flex items-center justify-center">
        <AboutSection />
      </section>
      {/* <section id="projects" className="snap-start min-h-screen flex items-center justify-center">
        <ProjectsSection />
      </section>
      <section id="experience" className="snap-start min-h-screen flex items-center justify-center">
        <ExperienceSection />
      </section>
      <section id="contact" className="snap-start min-h-screen flex items-center justify-center">
        <ContactSection />
      </section> */}
    </div>
  );
}
