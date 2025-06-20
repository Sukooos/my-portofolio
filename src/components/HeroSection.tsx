// components/HeroSection.tsx
export default function HeroSection() {
  return (
    <section id="hero" className="min-h-[90vh] flex flex-col justify-center items-center text-center pt-32 bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-5">
        Hi, I'm <span className="text-blue-600">Raja Z</span>
      </h1>
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-100">
        Backend Developer &amp; API Engineer
      </h2>
      <p className="max-w-xl mx-auto text-base md:text-lg text-neutral-300 mb-10 leading-relaxed">
        Build reliable, scalable, and secure systems. Passionate about backend architecture, API, database, and automation.
      </p>
      <a
        href="/cv.pdf"
        className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition"
        target="_blank"
        rel="noopener noreferrer"
      >
        Download CV
      </a>
    </section>
  );
}
