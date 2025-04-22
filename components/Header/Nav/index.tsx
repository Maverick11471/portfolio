import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links } from "./data";
import { slideIn } from "./anim";

interface NavProps {
  scrollToSection?: (index: number) => void;
}

export default function index({ scrollToSection }: NavProps) {
  const handleClick = (id: string) => {
    const container = document.getElementById("page-container");
    const el = document.getElementById(id);
    if (container && el) {
      // el.offsetTop 은 page-container 기준이 아니라 document 기준이니 빼 줍니다
      const offset = el.offsetTop - container.offsetTop;
      container.scrollTo({ top: offset, behavior: "smooth" });
    }
  };

  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { title, description, id } = link;
          return (
            <div key={link.id} className={styles.linkContainer}>
              <motion.div
                custom={i}
                variants={slideIn}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <div
                  className="cursor-pointer block"
                  onClick={() => {
                    handleClick(link.id);
                  }}
                >
                  <h3>{link.title}</h3>
                  <p>{link.description}</p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
