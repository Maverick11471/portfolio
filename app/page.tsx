"use client";
import { useRef, useState, useEffect } from "react";
import Intro from "@/components/Intro";
import Description from "@/components/Description";
import ProjectCarousel from "@/components/ProjectCarousel";
import Left from "@/components/Left";
import { Link, Element } from "react-scroll";

export default function ExamplePage() {
  const leftRef = useRef<HTMLDivElement>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  // 현재 화면 크기에 따라 작은 화면/큰 화면 판별 (Tailwind의 lg 기준은 대략 1024px)
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  useEffect(() => {
    setIsLargeScreen(window.innerWidth >= 1024);
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 스크롤 섹션 목록: 큰 화면에서는 왼쪽 영역(fixed)은 제외, 작은 화면에서는 포함
  const sections = isLargeScreen
    ? [introRef, carouselRef, descriptionRef]
    : [leftRef, introRef, carouselRef, descriptionRef];
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrollingRef = useRef(false); // 스크롤 중복 방지 플래그

  // 섹션 단위 부드러운 스크롤
  const scrollToSectionByIndex = (index: number) => {
    sections[index].current?.scrollIntoView({ behavior: "smooth" });
    setCurrentIndex(index);
  };

  // 스크롤 위치 자동 감지
  useEffect(() => {
    const handleScroll = () => {
      if (isScrollingRef.current) return;
      const scrollPosition = window.scrollY;
      const sectionOffsets = sections.map(
        (section) => section.current?.offsetTop || 0
      );
      for (let i = 0; i < sectionOffsets.length; i++) {
        if (
          scrollPosition >= sectionOffsets[i] - 100 &&
          scrollPosition < sectionOffsets[i] + 100
        ) {
          if (currentIndex !== i) {
            setCurrentIndex(i);
          }
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentIndex, sections]);

  const [scrollY, setScrollY] = useState(0);
  const handleParallax = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollY(e.currentTarget.scrollTop);
  };

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* 큰 화면(lg)에서는 왼쪽 영역을 고정(fixed)하여 별도 렌더링 */}
      <div className="hidden  lg:block lg:fixed lg:w-1/2 h-screen  ">
        <Left />
      </div>
      {/* 오른쪽 영역: 스크롤 섹션들이 포함됨 */}{" "}
      <div
        id="page-container"
        className="w-full lg:pl-[50%] flex flex-col overflow-y-auto h-screen"
        onScroll={handleParallax}
      >
        {/* 작은 화면에서는 왼쪽 영역을 스크롤 섹션의 첫번째로 렌더링 */}
        {!isLargeScreen && (
          <section
            ref={leftRef}
            id="left"
            className="h-screen sticky top-0 z-0 lg:static lg:z-auto"
          >
            <Left />
          </section>
        )}
        <section ref={introRef} id="intro" className="h-screen sticky top-0">
          <Intro />
        </section>{" "}
        <section
          ref={carouselRef}
          id="projects"
          className="min-h-[102vh] sticky top-0 z-10"
        >
          <ProjectCarousel />
        </section>
        <section
          ref={descriptionRef}
          id="about-me"
          className="h-screen sticky top-0 z-20"
        >
          <Description />
        </section>
      </div>
    </div>
  );
}
