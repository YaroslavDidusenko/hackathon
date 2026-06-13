"use client";

import { motion, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { useCounter } from "@/hooks/useCounter";

interface StatCardProps {
  value: number;
  display: string;
  label: string;
  prefix?: string;
  suffix?: string;
  isNumeric?: boolean;
}

function StatCard({
  value,
  display,
  label,
  prefix = "",
  suffix = "",
  isNumeric = true,
}: StatCardProps) {
  const { ref, rounded, prefix: p, suffix: s } = useCounter(
    isNumeric ? value : 0,
    2,
    suffix,
    prefix
  );
  const [displayValue, setDisplayValue] = useState(isNumeric ? "0" : display);

  useMotionValueEvent(rounded, "change", (latest) => {
    if (isNumeric) setDisplayValue(latest);
  });

  return (
    <motion.div
      className="card-panel group p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-neon/50 hover:shadow-[0_20px_40px_-10px_rgba(0,240,255,0.15)]"
      whileHover={{ scale: 1.02 }}
    >
      <span
        ref={ref}
        className="block text-4xl font-extrabold text-neon transition-transform duration-300 group-hover:scale-110 sm:text-5xl"
      >
        {isNumeric ? `${p}${displayValue}${s}` : display}
      </span>
      <p className="mt-3 text-sm text-text-secondary">{label}</p>
    </motion.div>
  );
}

const stats = [
  {
    value: 80,
    display: "80%",
    label: "теплової генерації пошкоджено",
    suffix: "%",
    isNumeric: true,
  },
  {
    value: 1200,
    display: "1200+",
    label: "атак на енергооб'єкти",
    suffix: "+",
    isNumeric: true,
  },
  {
    value: 91,
    display: "$91 млрд",
    label: "вартість відновлення",
    prefix: "$",
    suffix: " млрд",
    isNumeric: true,
  },
  {
    value: 10,
    display: "10 млн",
    label: "людей без світла в пікові періоди",
    suffix: " млн",
    isNumeric: true,
  },
];

export default function Problem() {
  return (
    <AnimatedSection id="problem" className="py-20">
      <div className="section-container">
        <h2 className="section-title">Проблема</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
        <p className="mx-auto mt-10 max-w-3xl text-center text-base leading-relaxed text-text-secondary">
          Росія цілеспрямовано руйнує критичну інфраструктуру. Відсутність
          оперативного аналізу призводить до багатогодинних відключень та
          величезних економічних втрат.
        </p>
      </div>
    </AnimatedSection>
  );
}
