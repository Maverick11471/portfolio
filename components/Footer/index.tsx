"use client";
import { siGithub } from "simple-icons";
import styles from "./style.module.css";
import { socialMedia } from "@/data";
import { useCallback } from "react";

export default function Footer() {
  const handleClick = useCallback((url: string) => {
    window.open(url, "_blank");
  }, []);

  return (
    <div>
      <div className="flex md:flex-row flex-col">
        <div className="flex items-center  gap-6">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              onClick={() => handleClick(info.url)}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
