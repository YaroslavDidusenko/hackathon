"use client";

import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { useRipple } from "@/hooks/useRipple";
import {
  generateAIResponse,
  formatAIResponse,
} from "@/lib/generateAIResponse";

const DISTRICTS = [
  "Центр",
  "Північний",
  "Південний",
  "Лівий берег",
  "Правий берег",
  "Виноградар",
  "Троєщина",
  "Позняки",
  "Осокорки",
  "Теремки",
  "Святошин",
  "Борщагівка",
  "Поділ",
  "Печерськ",
  "Голосіїв",
  "Солом'янка",
];

const INITIAL_MESSAGE =
  'Натисніть «Імітувати влучання» для аналізу ШІ';

export default function Demo() {
  const [districts, setDistricts] = useState<boolean[]>(
    () => Array(16).fill(true)
  );
  const [aiOutput, setAiOutput] = useState(INITIAL_MESSAGE);
  const [loading, setLoading] = useState(false);
  const [pulsingIndex, setPulsingIndex] = useState<number | null>(null);
  const createRipple = useRipple();

  const offlineCount = districts.filter((d) => !d).length;

  const handleSimulate = useCallback(() => {
    const activeIndices = districts
      .map((active, i) => (active ? i : -1))
      .filter((i) => i !== -1);

    if (activeIndices.length === 0) {
      setAiOutput(
        "Всі райони вже знеструмлені. Натисніть «Скинути»"
      );
      return;
    }

    const randomIndex =
      activeIndices[Math.floor(Math.random() * activeIndices.length)];

    const newDistricts = [...districts];
    newDistricts[randomIndex] = false;
    setDistricts(newDistricts);
    setPulsingIndex(randomIndex);
    setTimeout(() => setPulsingIndex(null), 600);

    setLoading(true);
    setAiOutput(
      "ШІ аналізує пошкодження та прораховує сценарії відновлення..."
    );

    setTimeout(() => {
      const newOfflineCount = newDistricts.filter((d) => !d).length;
      const response = generateAIResponse(newOfflineCount);
      setAiOutput(formatAIResponse(response));
      setLoading(false);
    }, 2000);
  }, [districts]);

  const handleReset = useCallback(() => {
    setDistricts(Array(16).fill(true));
    setAiOutput(INITIAL_MESSAGE);
    setLoading(false);
  }, []);

  return (
    <AnimatedSection id="demo" className="py-20">
      <div className="section-container">
        <h2 className="section-title">
          ⚡ Інтерактивне демо: імітація влучання
        </h2>
        <p className="mb-8 max-w-2xl text-text-secondary">
          Натисніть «Імітувати влучання» — ШІ проаналізує збитки та
          запропонує план відновлення.
        </p>

        <div className="rounded-[32px] bg-bg-demo p-6 sm:p-8">
          <div className="mb-6 flex flex-wrap gap-4">
            <button
              type="button"
              className="btn-critical"
              onClick={(e) => {
                createRipple(e);
                handleSimulate();
              }}
              disabled={loading}
              aria-label="Імітувати влучання"
            >
              💥 Імітувати влучання
            </button>
            <button
              type="button"
              className="btn-neon"
              onClick={(e) => {
                createRipple(e);
                handleReset();
              }}
              disabled={loading}
              aria-label="Скинути демо"
            >
              🔄 Скинути
            </button>
          </div>

          <div className="mb-6 grid grid-cols-1 gap-4 min-[500px]:grid-cols-2 lg:grid-cols-4">
            {DISTRICTS.map((name, index) => {
              const isActive = districts[index];
              return (
                <motion.div
                  key={name}
                  className={`rounded-2xl border px-3 py-5 text-center transition-colors duration-300 ${
                    isActive
                      ? "border-[#00FF88] bg-district-active"
                      : "border-[#FF4444] bg-district-offline"
                  }`}
                  animate={
                    pulsingIndex === index
                      ? { scale: [1, 1.05, 1] }
                      : { scale: 1 }
                  }
                  transition={{ duration: 0.6 }}
                >
                  <p className="mb-2 text-sm font-medium text-white">
                    {name}
                  </p>
                  <p
                    className={`text-xs font-medium ${
                      isActive ? "text-[#00FF88]" : "text-[#FF4444]"
                    }`}
                  >
                    {isActive ? "⚡ живлення є" : "❌ знеструмлено"}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <div
            className="rounded-2xl border border-border bg-bg-card p-5 min-h-[100px]"
            aria-live="polite"
            aria-busy={loading}
          >
            {loading ? (
              <div className="flex items-start gap-3">
                <div className="ai-spinner mt-0.5 shrink-0" />
                <p className="text-sm leading-relaxed text-text-secondary">
                  {aiOutput}
                </p>
              </div>
            ) : (
              <p className="text-sm leading-relaxed text-text-primary">
                {aiOutput}
              </p>
            )}
            {offlineCount > 0 && !loading && (
              <p className="mt-3 text-xs text-text-secondary">
                Знеструмлено районів: {offlineCount} з 16
              </p>
            )}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
