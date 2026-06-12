"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-[#050814]/80 backdrop-blur-sm">
      <div className="section-container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <Zap className="h-6 w-6 text-neon pulse-indicator" fill="#00F0FF" />
          </motion.div>
          <span className="text-sm font-bold text-white sm:text-base">
            Recovery Energy Grid
          </span>
        </div>
        <nav className="hidden items-center gap-6 sm:flex">
          <a
            href="#problem"
            className="text-sm text-text-secondary transition-colors hover:text-neon"
          >
            Проблема
          </a>
          <a
            href="#solution"
            className="text-sm text-text-secondary transition-colors hover:text-neon"
          >
            Рішення
          </a>
          <a
            href="#demo"
            className="text-sm font-medium text-neon transition-opacity hover:opacity-80"
          >
            Демо
          </a>
        </nav>
      </div>
    </header>
  );
}
