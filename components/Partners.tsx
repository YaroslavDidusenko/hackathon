"use client";

import AnimatedSection from "./AnimatedSection";

const partners = [
  "Міненерго України",
  "ДТЕК",
  "USAID",
  "Європейська Комісія",
  "UNDP",
];

export default function Partners() {
  return (
    <AnimatedSection id="partners" className="py-20">
      <div className="section-container text-center">
        <h2 className="section-title">Партнери та підтримка</h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          {partners.map((name) => (
            <span
              key={name}
              className="text-[1.2rem] text-text-secondary/60 transition-colors hover:text-text-secondary"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
