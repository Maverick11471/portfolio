// components/Left.tsx
"use client";

import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Left: React.FC = () => {
  return (
    <div className="lg:fixed left-0 top-0 bg-gray-900 w-full h-screen text-white flex justify-between flex-col">
      <div className="sticky z-50 ml-10 mt-20">
        <Header />
      </div>
      <div className="flex flex-col gap-y-4 ml-10">
        <h1 className="text-4xl font-bold">Capable alone,</h1>
        <h1 className="text-4xl font-bold">Exceptional together</h1>
        <p className="leading-none">1인분도 못하는 개발자에 지치셨나요?</p>
        <p className="leading-none">
          혼자 서비스와 상용화가 가능한 개발자 김영우 입니다 :)
        </p>
      </div>
      <div className="ml-10 mb-20">
        <Footer />
      </div>
    </div>
  );
};

export default Left;
