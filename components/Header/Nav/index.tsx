import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links } from "./data";
import { slideIn } from "./anim";
import { Link as ScrollLink } from "react-scroll";
interface NavProps {
  scrollToSection?: (index: number) => void;
}
export default function index({ scrollToSection }: NavProps) {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, description, id } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={slideIn}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <ScrollLink
                  to={id}
                  smooth={true}
                  duration={500}
                  offset={-0} // 네비게이션 높이만큼 조정 필요하면 값 설정
                  containerId="page-container"
                  className="cursor-pointer block"
                >
                  <h3>{title}</h3>
                  <p>{description}</p>
                </ScrollLink>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
