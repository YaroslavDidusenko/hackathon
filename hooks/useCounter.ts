"use client";

import { useEffect } from "react";
import {
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { useRef } from "react";

export function useCounter(
  target: number,
  duration = 2,
  suffix = "",
  prefix = ""
) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.floor(latest).toLocaleString("uk-UA")
  );

  useEffect(() => {
    if (inView) {
      animate(count, target, { duration, ease: "easeOut" });
    }
  }, [inView, count, target, duration]);

  return { ref, rounded, prefix, suffix };
}
