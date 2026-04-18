"use client";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export default function ScrollBounce() {
  const y = useMotionValue(0);
  const springY = useSpring(y, { stiffness: 300, damping: 25, mass: 0.5 });
  const touchStartY = useRef(0);

  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    if (!isMobile) return;

    const body = document.body;

    const onTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
    };

    const onTouchMove = (e: TouchEvent) => {
      const deltaY = e.touches[0].clientY - touchStartY.current;
      const atTop = window.scrollY <= 0;
      const atBottom = window.scrollY + window.innerHeight >= document.body.scrollHeight;

      if (atTop && deltaY > 0) {
        // pulling down at top — bounce down
        y.set(Math.min(deltaY * 0.25, 30));
      } else if (atBottom && deltaY < 0) {
        // pulling up at bottom — bounce up
        y.set(Math.max(deltaY * 0.25, -30));
      }
    };

    const onTouchEnd = () => {
      y.set(0);
    };

    const unsubscribe = springY.on("change", (val) => {
      body.style.transform = `translateY(${val}px)`;
    });

    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onTouchEnd);
      unsubscribe();
      body.style.transform = "";
    };
  }, [y, springY]);

  return null;
}
