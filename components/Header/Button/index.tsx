import { motion } from "framer-motion";
import styles from "./style.module.scss";
import Open from "@/public/images/Hamburger.png";
import Close from "@/public/images/HamburgerHalf.png";
import Image from "next/image";

export default function Button({ isActive, toggleMenu }) {
  return (
    <div className={styles.button} onClick={toggleMenu}>
      <Image
        src={isActive ? Close : Open}
        alt="Hamburger icon"
        width={40}
        height={40}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}
