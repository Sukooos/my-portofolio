// components/AboutSection.tsx
"use client";
import Image from "next/image";
import { motion } from "framer-motion"; // ✅ Benar

const stack = [
  { name: "Node.js", icon: "/stack/nodejs.svg" },
  { name: "Express.js", icon: "/stack/express.svg" },
  { name: "PostgreSQL", icon: "/stack/postgresql.svg" },
  { name: "Docker", icon: "/stack/docker.svg" },
  { name: "Linux", icon: "/stack/linux.svg" },
  { name: "Redis", icon: "/stack/redis.svg" },
  { name: "Python", icon: "/stack/python.svg" },
  // Tambahkan stack lain sesuai skill lu
];

export default function AboutSection() {
  return (
    <motion.section
        id="about"
        className="max-w-3xl mx-auto pt-32 pb-20 px-4 text-center scroll-mt-28"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
    >      
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-blue-500">About Me</h2>
      <p className="text-lg md:text-xl text-neutral-200 mb-6">
        Halo! Gue <span className="font-bold text-blue-400">Raja Z</span>, seorang backend developer dari Indonesia yang passionate di bidang arsitektur API, database, dan automation.
        <br /><br />
        Gue suka ngulik sistem scalable, reliable, dan efisien. Pengalaman gue mulai dari build REST API, integrasi Mikrotik RADIUS, sampai deploy project backend modern dengan Docker dan CI/CD.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-5 mt-8">
        {stack.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-2 group transition"
            title={tech.name}
          >
            <Image
              src={tech.icon}
              alt={tech.name}
              width={48}
              height={48}
              className="drop-shadow group-hover:scale-110 transition"
            />
            <span className="text-xs text-neutral-400 group-hover:text-blue-400">{tech.name}</span>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
