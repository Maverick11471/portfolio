"use client";
import React from "react";
import AnimatedTooltip from "./Animated-Tooltip";
export const Skills = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image: "/html5.svg",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image: "/css3.svg",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image: "/javascript.svg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center mb-10 w-full">
      <AnimatedTooltip items={Skills} />
    </div>
  );
}
