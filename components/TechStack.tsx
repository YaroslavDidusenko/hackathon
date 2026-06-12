"use client";

import AnimatedSection from "./AnimatedSection";

const tags = [
  "Python",
  "FastAPI",
  "TensorFlow (LSTM)",
  "Digital Twin",
  "PostgreSQL",
  "Docker",
  "Next.js",
  "Tailwind CSS",
  "Framer Motion",
  "Leaflet",
];

export default function TechStack() {
  return (
    <AnimatedSection id="tech" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Технології</h2>
        <div className="flex flex-wrap gap-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-[#00F0FF40] bg-[#00F0FF10] px-5 py-2 text-[0.9rem] text-neon transition-colors hover:bg-[#00F0FF20]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
