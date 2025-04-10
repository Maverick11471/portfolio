"use client";

import React, { useState } from "react";
import Image from "next/image";
import Background from "@/public/images/혁진 오른쪽.jpg";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const container = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useState(() => {
    const checkSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    checkSize();
    window.addEventListener("resize", checkSize);
    return () => window.removeEventListener("resize", checkSize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    isLargeScreen ? ["0vh", "150vh"] : ["0vh", "-30vh"]
  );

  return (
    <div className="overflow-hidden h-[120vh]  top-0">
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
