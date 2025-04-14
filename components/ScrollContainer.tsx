"use client";
import { useEffect, useRef, useState, ReactNode } from "react";

interface ScrollContainerProps {
  children: ReactNode;
}

export default function ScrollContainer({ children }: ScrollContainerProps) {
  // children이 배열인 경우와 단일 ReactNode 모두 처리
  const childrenArray = Array.isArray(children) ? children : [children];

  // 각 섹션에 대한 ref 배열 생성
  const sectionsRef = childrenArray.map(() => useRef<HTMLDivElement>(null));
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrollingRef = useRef(false);

  // 인덱스 기반 스크롤 이동 함수
  const scrollToSectionByIndex = (index: number) => {
    sectionsRef[index].current?.scrollIntoView({ behavior: "smooth" });
    setCurrentIndex(index);
  };

  // container의 DOM ref 생성
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wheelHandler = (e: WheelEvent) => {
      // preventDefault() 호출해서 기본 스크롤을 막습니다.
      e.preventDefault();

      if (isScrollingRef.current) return;
      const threshold = 10; // 임계값 (필요에 따라 조정)
      if (e.deltaY > threshold && currentIndex < childrenArray.length - 1) {
        isScrollingRef.current = true;
        scrollToSectionByIndex(currentIndex + 1);
        setTimeout(() => (isScrollingRef.current = false), 800);
      } else if (e.deltaY < -threshold && currentIndex > 0) {
        isScrollingRef.current = true;
        scrollToSectionByIndex(currentIndex - 1);
        setTimeout(() => (isScrollingRef.current = false), 800);
      }
    };

    // non-passive 옵션으로 이벤트 리스너 등록 (passive: false)
    container.addEventListener("wheel", wheelHandler, { passive: false });

    // cleanup
    return () => container.removeEventListener("wheel", wheelHandler);
  }, [currentIndex, childrenArray.length]);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll scroll-smooth"
    >
      {childrenArray.map((child, index) => (
        <section key={index} ref={sectionsRef[index]} className="h-screen">
          {child}
        </section>
      ))}
    </div>
  );
}
