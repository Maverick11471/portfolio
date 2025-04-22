// components/Header.tsx
"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
import Button from "./Button";
import styles from "./style.module.scss";
import Nav from "./Nav";

const menu = {
  open: {
    width: "300px",
    height: "400px",
    top: "-25px",
    left: "-25px",
    transition: { duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    width: "50px",
    height: "50px",
    top: "0px",
    right: "0px",
    transition: {
      duration: 0.5,
      delay: 0,
      type: "tween",
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

interface HeaderProps {
  scrollToSection?: (index: number) => void;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [isActive, setIsActive] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure we only portal after client mount
  useEffect(() => {
    setMounted(true);
  }, []);

  // The JSX to render as a portal
  const headerContent = (
    <div
      className={`
              ${styles.header}
              fixed top-0 left-0 w-full z-[9999]
              ml-10 mt-20 
            `}
    >
      <motion.div
        className={styles.menu}
        variants={menu}
        animate={isActive ? "open" : "closed"}
        initial="closed"
      >
        {isActive && <Nav scrollToSection={scrollToSection} />}
      </motion.div>
      <Button isActive={isActive} toggleMenu={() => setIsActive((v) => !v)} />
    </div>
  );

  if (!mounted) return null;
  return createPortal(headerContent, document.body);
}
