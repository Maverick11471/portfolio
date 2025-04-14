"use client";
import { useRef, useState, useEffect } from "react";
import Intro from "@/components/Intro";
import Description from "@/components/Description";
import ProjectCarousel from "@/components/ProjectCarousel";
import Left from "@/components/Left";
import { Link } from "react-scroll";

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
    ? [introRef, descriptionRef, carouselRef]
    : [leftRef, introRef, descriptionRef, carouselRef];
  const [currentIndex, setCurrentIndex] = useState(0);
  const isScrollingRef = useRef(false); // 스크롤 중복 방지 플래그

  // 섹션 단위 부드러운 스크롤
  const scrollToSectionByIndex = (index: number) => {
    sections[index].current?.scrollIntoView({ behavior: "smooth" });
    setCurrentIndex(index);
  };

  // 휠 이벤트로 섹션 이동
  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    if (isScrollingRef.current) return;
    const threshold = 10;
    if (e.deltaY > threshold && currentIndex < sections.length - 1) {
      isScrollingRef.current = true;
      scrollToSectionByIndex(currentIndex + 1);
      setTimeout(() => (isScrollingRef.current = false), 800);
    } else if (e.deltaY < -threshold && currentIndex > 0) {
      isScrollingRef.current = true;
      scrollToSectionByIndex(currentIndex - 1);
      setTimeout(() => (isScrollingRef.current = false), 800);
    }
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

  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* 큰 화면(lg)에서는 왼쪽 영역을 고정(fixed)하여 별도 렌더링 */}
      <div className="hidden lg:block lg:fixed lg:w-1/2 h-screen bg-blue-100 p-4 overflow-hidden">
        <Left />
      </div>

      {/* 오른쪽 영역: 스크롤 섹션들이 포함됨 */}
      <div
        className="w-full lg:pl-[50%] bg-green-100 p-4 flex flex-col gap-4"
        onWheel={handleWheel}
      >
        {/* 네비게이션 */}
        <nav className="fixed top-0 left-0 lg:left-[50%] bg-white z-10 p-4 flex gap-4">
          {/* 작은 화면에서는 왼쪽 영역도 네비게이션에 포함 */}
          {!isLargeScreen && (
            <Link
              to="left"
              smooth={true}
              duration={500}
              onClick={() => scrollToSectionByIndex(0)}
              className="cursor-pointer"
            >
              Left
            </Link>
          )}
          <Link
            to="intro"
            smooth={true}
            duration={500}
            onClick={() => scrollToSectionByIndex(isLargeScreen ? 0 : 1)}
            className="cursor-pointer"
          >
            Intro
          </Link>
          <Link
            to="description"
            smooth={true}
            duration={500}
            onClick={() => scrollToSectionByIndex(isLargeScreen ? 1 : 2)}
            className="cursor-pointer"
          >
            Description
          </Link>
          <Link
            to="carousel"
            smooth={true}
            duration={500}
            onClick={() => scrollToSectionByIndex(isLargeScreen ? 2 : 3)}
            className="cursor-pointer"
          >
            Project Carousel
          </Link>
        </nav>

        {/* 작은 화면에서는 왼쪽 영역을 스크롤 섹션의 첫번째로 렌더링 */}
        {!isLargeScreen && (
          <section ref={leftRef} id="left" className="h-screen">
            <Left />
          </section>
        )}

        <section ref={introRef} id="intro" className="h-screen">
          <Intro />
        </section>
        <section ref={descriptionRef} id="description" className="h-screen">
          <Description />
        </section>
        <section ref={carouselRef} id="carousel" className="h-screen">
          <ProjectCarousel />
        </section>
      </div>
    </div>
  );
}
