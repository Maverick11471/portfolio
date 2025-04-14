"use client";

import React from "react";
import Image from "next/image";
import Background from "@/public/images/혁진 오른쪽.jpg";

export default function Intro() {
  return (
    <div className="relative w-full min-h-screen">
      <Image src={Background} fill alt="image" style={{ objectFit: "cover" }} />
    </div>
  );
}
