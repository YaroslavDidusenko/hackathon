"use client";

import AnimatedSection from "./AnimatedSection";

const results = [
  {
    emoji: "⏱️",
    title: "−40-60%",
    description: "скорочення часу відновлення світла",
  },
  {
    emoji: "💰",
    title: "−30%",
    description: "економія бюджету на ремонтах",
  },
  {
    emoji: "🔌",
    title: "Інтеграція з ENTSO-E",
    description: "готовність до європейської енергомережі",
  },
  {
    emoji: "🛡️",
    title: "Підвищення стійкості",
    description: "прогнозування вразливостей та запобігання аваріям",
  },
];

export default function Results() {
  return (
    <AnimatedSection id="results" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Очікувані результати</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {results.map(({ emoji, title, description }) => (
            <div
              key={title}
              className="card-panel p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-neon/40"
            >
              <span className="text-4xl">{emoji}</span>
              <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
              <p className="mt-2 text-sm text-text-secondary">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
