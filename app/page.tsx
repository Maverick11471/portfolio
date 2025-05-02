// app/test/page.tsx
"use client";

import { useRef, useEffect } from "react";
import { TracingBeam } from "@/components/TracingBeam"; // 반드시 { }로 import
// 또는 기본 export면 그냥 import TracingBeam from "...";

export default function TestPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      id="page-container"
      ref={containerRef}
      className="relative h-screen overflow-y-auto"
    >
      <TracingBeam containerRef={containerRef}>
        <div className="space-y-40 p-10">
          <div className="h-screen bg-gray-100">Section 1</div>
          <div className="h-screen bg-gray-200">Section 2</div>
          <div className="h-screen bg-gray-300">Section 3</div>
        </div>
      </TracingBeam>
    </div>
  );
}
