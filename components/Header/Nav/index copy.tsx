import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links } from "./data";
import { slideIn } from "./anim";

export default function index() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, href, description } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.a
                href={href}
                custom={i}
                variants={slideIn}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <a>{title}</a>
                <p>{description}</p>
              </motion.a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
