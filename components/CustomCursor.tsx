"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 768px)").matches) return;

    const cursor = cursorRef.current;
    const dot = dotRef.current;
    if (!cursor || !dot) return;

    const move = (e: MouseEvent) => {
      cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    };

    const grow = () => {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.opacity = "0.3";
    };

    const shrink = () => {
      cursor.style.width = "24px";
      cursor.style.height = "24px";
      cursor.style.opacity = "0.5";
    };

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", grow);
      el.addEventListener("mouseleave", shrink);
    });

    return () => {
      window.removeEventListener("mousemove", move);
      document.querySelectorAll("a, button").forEach((el) => {
        el.removeEventListener("mouseenter", grow);
        el.removeEventListener("mouseleave", shrink);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-neon/50 md:block"
        style={{ transition: "width 0.2s, height 0.2s, opacity 0.2s" }}
      />
      <div
        ref={dotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-neon md:block"
      />
    </>
  );
}
