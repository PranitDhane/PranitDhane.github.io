"use client";

import { useEffect } from "react";

/**
 * Mirrors the original site's scroll-reveal behavior: observes every
 * `.reveal` element and adds `.visible` once it enters the viewport,
 * then stops observing it. Renders nothing - just wires up the observer.
 */
export default function RevealObserver() {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );
    reveals.forEach((r) => obs.observe(r));

    return () => obs.disconnect();
  }, []);

  return null;
}
