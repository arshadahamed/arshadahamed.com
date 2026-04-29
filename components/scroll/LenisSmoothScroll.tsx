"use client";
import ReactLenis, { useLenis } from "lenis/react";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePathname } from "next/navigation";

export default function LenisSmoothScroll() {
  const lenis = useLenis();
  const pathname = usePathname();

  // Reset to top instantly on every route change
  useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true });
    setTimeout(() => ScrollTrigger.refresh(), 100);
  }, [pathname, lenis]);

  // Sync GSAP ScrollTrigger with Lenis scroll position
  useEffect(() => {
    if (!lenis) return;
    lenis.on("scroll", ScrollTrigger.update);
    return () => {
      lenis.off("scroll", ScrollTrigger.update);
    };
  }, [lenis]);

  // Use native scroll on iOS
  if (
    typeof window !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent)
  ) {
    return null;
  }

  return <ReactLenis root />;
}
