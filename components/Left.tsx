// components/Left.tsx
"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Left: React.FC = () => {
  return (
    <div className="lg:fixed left-0 top-0 bg-gray-900 w-full h-screen text-white flex justify-between flex-col">
      <div className="sticky top-0 z-[9999] ml-10 mt-20">
        <Header />
      </div>
      <div className="flex flex-col gap-y-4 ml-10">
        <h1 className="text-4xl font-bold">Capable alone,</h1>
        <h1 className="text-4xl font-bold">Exceptional together</h1>
        <p className="mt-4 leading-none">1인분도 못하는 개발자에 지치셨나요?</p>
        <p className="leading-none">
          혼자 서비스와 상용화가 가능한 개발자 김영우 입니다 :)
        </p>
        <div className="mt-4 space-y-2">
          <p className="text-xl font-extrabold text-yellow-300">
            • 풀스택 솔로 개발로 6개월 만에 상용 서비스 런칭
          </p>
          <p className="text-xl font-extrabold text-yellow-300">
            • 200+ 실제 사용자 대상 안정적 운영 경험
          </p>
        </div>
      </div>
      <div className="ml-10 mb-20">
        <Footer />
      </div>
    </div>
  );
};

export default Left;
