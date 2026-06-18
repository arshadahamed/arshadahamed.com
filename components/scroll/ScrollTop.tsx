"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

const RADIUS = 45;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScrollTop() {
  const [visible, setVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const lenis = useLenis();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setVisible(scrollY > 200);
      setProgress(maxScroll > 0 ? scrollY / maxScroll : 0);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    if (lenis) {
      lenis.scrollTo(0, {
        duration: 1.6,
        easing: (t: number) => 1 - Math.pow(1 - t, 4),
      });
    } else if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const strokeDashoffset = CIRCUMFERENCE * (1 - progress);

  return (
    <a
      href="#"
      id="to-top"
      className="btn btn-to-top slide-up"
      onClick={handleScrollToTop}
      style={{
        opacity: visible ? 1 : 0,
        visibility: visible ? "inherit" : "hidden",
        pointerEvents: visible ? "auto" : "none",
        transition: "opacity 0.5s ease, visibility 0.5s ease",
      }}
    >
      <svg
        viewBox="0 0 100 100"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          transform: "rotate(-90deg)",
          pointerEvents: "none",
        }}
        aria-hidden="true"
      >
        <circle
          cx="50"
          cy="50"
          r={RADIUS}
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
          style={{ transition: "stroke-dashoffset 0.15s linear" }}
        />
      </svg>
      <i className="ph ph-arrow-up" />
    </a>
  );
}
