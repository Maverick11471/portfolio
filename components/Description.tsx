"use client";

import React from "react";
import SkillCategory from "./SkillCategory";
import { AnimatedTooltipPreview } from "./Skills";

export default function Description() {
  return (
    <div className="relative z-10 flex justify-center items-center min-h-screen bg-[#F9E699]">
      <section className="px-6 py-16 max-w-3xl mx-auto text-gray-900">
        <h2 className="text-3xl font-bold mb-8">About me</h2>

        <p className="text-base lg:text-xl font-medium leading-relaxed mb-12">
          디자인과 사용자 경험을 이해하는 백엔드 개발자 <strong>김영우</strong>
          입니다. 깔끔하고 확장 가능한 구조 속에서, 서비스의 동작과 흐름을
          안정적으로 유지시키는 역할에 책임감을 느낍니다.
        </p>

        <h3 className="text-sm lg:text-lg font-semibold mb-1">Technical</h3>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-8">
          주로 Spring Boot 기반의 서버 개발을 하고 있으며, Redis와 RDB를 활용한
          성능 개선, 그리고 AWS 환경에서의 배포와 운영 자동화까지 경험하고
          있습니다. 트래픽에 강하고, 유지보수하기 좋은 코드를 고민하며 성장
          중입니다.
        </p>

        <h3 className="text-sm lg:text-lg font-semibold mb-1">Personal</h3>
        <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6">
          혼자서 서비스를 처음부터 끝까지 만들어보는 걸 좋아합니다. 평소에도
          사이드 프로젝트를 자주 하며, 사용자 입장에서 고민하는 습관을 들이고
          있습니다. 좋은 구조, 좋은 코드, 그리고 좋은 사람들과 함께 일하는 걸
          가장 중요하게 생각합니다.
        </p>

        <p className="text-xs lg:text-sm italic text-gray-500 mb-8">
          함께 일하면 분명 즐거우실 거예요 :)
        </p>

        <h3 className="text-sm lg:text-lg font-semibold ">Skills</h3>
        <div className="flex flex-row justify-center items-center">
          <p className="text-sm lg:text-base text-gray-600 leading-relaxed mb-6">
            Frotend
          </p>
          <AnimatedTooltipPreview />
        </div>
      </section>
    </div>
  );
}
