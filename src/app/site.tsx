"use client";

import { animated, useSpring } from "@react-spring/web";
import { TouchEvent, useRef, useState, WheelEvent } from "react";
import Landing from "./landing";
import Showcase from "./showcase";

export default function Site() {
  const [currentPage, setCurrentPage] = useState<0 | 1>(0);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const showcaseRef = useRef<HTMLDivElement | null>(null);

  const scrollAnimationSpring = useSpring({
    transform: `translateY(-${currentPage * 100}vh)`,
    config: { tension: 100, friction: 16 },
  });

  const handleScroll = (e: WheelEvent) => {
    if (currentPage === 0) {
      e.preventDefault();
      if (e.deltaY > 0) {
        setCurrentPage(1);
      }
    } else if (currentPage === 1) {
      const showcase = showcaseRef.current!;
      if (e.deltaY < 0 && showcase.scrollTop <= 0) {
        e.preventDefault();
        setCurrentPage(0);
      }
    }
  };

  const handleTouchStart = (e: TouchEvent) => {
    setTouchStart(e.touches[0].clientY);
  };

  const handleTouchMove = (e: TouchEvent) => {
    if (!touchStart) return;
    const touchEnd = e.touches[0].clientY;
    const distance = touchStart - touchEnd;

    if (currentPage === 0) {
      if (distance > 50) {
        setCurrentPage(1);
        setTouchStart(null);
      }
    } else if (currentPage === 1) {
      const showcase = showcaseRef.current!;
      if (distance < -50 && showcase.scrollTop <= 0) {
        setCurrentPage(0);
        setTouchStart(null);
      }
    }
  };

  return (
    <div
      className="h-screen overflow-hidden"
      onWheel={handleScroll}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <animated.div style={scrollAnimationSpring}>
        <Landing />
        <div className="relative h-screen overflow-y-auto" ref={showcaseRef}>
          <Showcase />
        </div>
        <div className="h-[500px] bg-neutral-950"></div>
      </animated.div>
    </div>
  );
}
