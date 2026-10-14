import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Direction = "up" | "left" | "right";

interface UseScrollRevealOptions {
  direction?: Direction;
  distance?: number;
  duration?: number;
  delay?: number;
  start?: string;
  dependencies?: unknown[];
}

export function useScrollReveal<T extends HTMLElement>({
  direction = "up",
  distance = 60,
  duration = 0.9,
  delay = 0,
  start = "top 85%",
  dependencies = [],
}: UseScrollRevealOptions = {}) {
  const ref = useRef<T>(null);

  useGSAP(
    () => {
      if (!ref.current) return;

      const fromVars: gsap.TweenVars = {
        opacity: 0,
        duration,
        delay,
        ease: "power3.out",
      };
      if (direction === "up") fromVars.y = distance;
      if (direction === "left") fromVars.x = -distance;
      if (direction === "right") fromVars.x = distance;

      gsap.from(ref.current, {
        ...fromVars,
        scrollTrigger: {
          trigger: ref.current,
          start,
          toggleActions: "play none none none",
        },
      });
    },
    { scope: ref, dependencies }
  );

  return ref;
}

interface UseScrollRevealGroupOptions {
  distance?: number;
  duration?: number;
  stagger?: number;
  start?: string;
}
export function useScrollRevealGroup<T extends HTMLElement>(
  itemSelector: string,
  {
    distance = 100,
    duration = 0.9,
    stagger = 0.15,
    start = "top 85%",
  }: UseScrollRevealGroupOptions = {},
  dependencies: unknown[] = []
) {
  const containerRef = useRef<T>(null);

  useGSAP(
    () => {
      if (!containerRef.current) return;

      const items = gsap.utils.toArray<HTMLElement>(
        containerRef.current.querySelectorAll(itemSelector)
      );
      if (items.length === 0) return;

      items.forEach((item, i) => {
        gsap.from(item, {
          x: i % 2 === 0 ? distance : -distance,
          opacity: 0,
          duration,
          delay: i * stagger,
          ease: "power3.out",
          scrollTrigger: {
            trigger: item,
            start,
            toggleActions: "play none none none",
          },
        });
      });

      ScrollTrigger.refresh();
    },
    { scope: containerRef, dependencies }
  );

  return containerRef;
}
