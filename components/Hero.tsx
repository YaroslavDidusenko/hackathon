"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useRipple } from "@/hooks/useRipple";

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const createRipple = useRipple();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width = 0;
    let height = 0;

    const particles: { x: number; y: number; vx: number; vy: number; size: number; opacity: number }[] = [];
    const gridOffset = { x: 0, y: 0 };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      particles.length = 0;
      for (let i = 0; i < 80; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.2,
        });
      }
    };

    const draw = () => {
      ctx.fillStyle = "#050814";
      ctx.fillRect(0, 0, width, height);

      const grad = ctx.createRadialGradient(
        width / 2,
        height / 2,
        0,
        width / 2,
        height / 2,
        width * 0.6
      );
      grad.addColorStop(0, "rgba(10, 21, 37, 0.8)");
      grad.addColorStop(1, "rgba(5, 8, 20, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, width, height);

      gridOffset.x = (gridOffset.x + 0.3) % 40;
      gridOffset.y = (gridOffset.y + 0.2) % 40;

      ctx.strokeStyle = "rgba(0, 240, 255, 0.06)";
      ctx.lineWidth = 1;
      for (let x = -40 + gridOffset.x; x < width + 40; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = -40 + gridOffset.y; y < height + 40; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 240, 255, ${p.opacity})`;
        ctx.fill();
      });

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  const scrollToDemo = () => {
    document.getElementById("demo")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-hidden="true"
      />
      <div className="relative z-10 mx-auto max-w-3xl px-6 text-center">
        <motion.h1
          className="bg-gradient-to-r from-white to-neon bg-clip-text text-transparent"
          style={{ fontSize: "clamp(3rem, 8vw, 5rem)" }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          R E G
        </motion.h1>
        <motion.p
          className="mt-4 text-xl text-text-secondary"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Цифровий двійник енергомережі для швидкого відновлення
        </motion.p>
        <motion.p
          className="mx-auto mt-6 max-w-[600px] text-base leading-relaxed text-text-primary/80"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          Аналізує пошкодження за секунди, пропонує оптимальний план
          перепідключення та скорочує час без світла на 60%.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <button
            type="button"
            onClick={(e) => {
              createRipple(e);
              scrollToDemo();
            }}
            className="btn-neon mt-10 text-base"
            aria-label="Дивитись демо"
          >
            Дивитись демо
          </button>
        </motion.div>
      </div>
    </section>
  );
}
