"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { PhoneFrame } from "./PhoneComposition";

const TOTAL_FRAMES = 360;
const FPS = 30;
const MS_PER_FRAME = 1000 / FPS;

export default function PhoneAnimationPlayer() {
  const [frame, setFrame] = useState(0);
  const frameRef = useRef(0);
  const lastTimeRef = useRef<number | null>(null);
  const rafRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const [isInView, setIsInView] = useState(false);
  const [shouldStart, setShouldStart] = useState(false);

  // Delay the animation to free up the main thread on initial page load
  useEffect(() => {
    const timer = setTimeout(() => {
      setShouldStart(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Use IntersectionObserver to stop calculations when the hero is out of view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const tick = useCallback((timestamp: number) => {
    if (lastTimeRef.current === null) {
      lastTimeRef.current = timestamp;
    }
    const elapsed = timestamp - lastTimeRef.current;
    const steps = Math.floor(elapsed / MS_PER_FRAME);
    if (steps > 0) {
      lastTimeRef.current += steps * MS_PER_FRAME;
      frameRef.current = (frameRef.current + steps) % TOTAL_FRAMES;
      setFrame(frameRef.current);
    }
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (!isInView || !shouldStart) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = 0;
      }
      lastTimeRef.current = null;
      return;
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [tick, isInView, shouldStart]);

  return (
    <div ref={containerRef}>
      <PhoneFrame frame={frame} fps={FPS} />
    </div>
  );
}
