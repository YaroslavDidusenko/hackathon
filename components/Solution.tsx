"use client";

import { Satellite, Brain, Zap } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const cards = [
  {
    icon: Satellite,
    title: "📡 Збір даних",
    text: "Супутникові знімки Sentinel-2, IoT-сенсори, публічні звіти. Створення цифрової копії мережі в реальному часі.",
  },
  {
    icon: Brain,
    title: "🧠 ШІ-аналітика (LSTM)",
    text: "Модель LSTM прогнозує пошкодження, оцінює наслідки влучань за лічені секунди з точністю >90%.",
  },
  {
    icon: Zap,
    title: "⚡ Стратег відновлення",
    text: "Оптимізація перепідключень: знаходить найшвидший маршрут подачі живлення, мінімізує час і максимізує кількість абонентів.",
  },
];

export default function Solution() {
  return (
    <AnimatedSection id="solution" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Наше рішення</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {cards.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="card-panel group p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-neon/60 hover:shadow-[0_24px_40px_-12px_rgba(0,240,255,0.12)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-neon/10">
                <Icon className="h-6 w-6 text-neon" />
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
