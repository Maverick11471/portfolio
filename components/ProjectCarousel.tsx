"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/apple-cards-carousel";

export default function ProjectCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full min-h-screen py-20 bg-white z-10 relative">
      <h2 className="text-3xl font-bold px-6 mb-5">Projects</h2>
      <p className="px-6 text-base lg:text-xl font-medium leading-relaxed">
        클릭하면 프로젝트에 대한 세부내용이 나옵니다.
      </p>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4 max-h-screen"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "개인 프로젝트",
    title: "태권도장 홈페이지",
    src: "",
    content: <DummyContent />,
  },
  {
    category: "팀 프로젝트",
    title: "경매 사이트",
    src: "",
    content: <DummyContent />,
  },
];
