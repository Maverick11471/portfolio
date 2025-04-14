"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Background from "@/public/images/혁진 오른쪽.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div className="overflow-hidden h-[100vh]  top-0">
      <motion.div style={{ y }} className="relative h-full">
        <Image
          src={Background}
          fill
          alt="image"
          style={{ objectFit: "cover" }}
        />
      </motion.div>
    </div>
  );
}
