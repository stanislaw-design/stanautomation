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
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [tick]);

  return <PhoneFrame frame={frame} fps={FPS} />;
}
