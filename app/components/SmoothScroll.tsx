"use client";

import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      multiplier: 1,
      className: "smooth-scroll-container",
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    // Update scroll on route change
    return () => {
      if (scroll) {
        scroll.destroy();
      }
    };
  }, []);

  return (
    <div data-scroll-container ref={scrollRef}>
      {children}
    </div>
  );
}
