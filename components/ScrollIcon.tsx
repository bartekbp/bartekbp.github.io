import { ReactElement, useEffect, useRef } from "react";
import styles from "./ScrollIcon.module.css";
import clsx from "clsx";
import gsap from "./initializedGsap";

const ScrollIcon = ({ className, startAnimation }: { className: string; startAnimation: boolean }): ReactElement => {
  const dotRef = useRef(null);

  useEffect(() => {
    if (!startAnimation) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(dotRef.current, {
        keyframes: {
          "0%": { opacity: 0, y: "-0.6rem" },
          "25%": { opacity: 1 },
          "100%": { opacity: 1, y: "0.6rem" },
        },
        duration: 1.5,
        repeat: -1,
      });
    });

    return () => ctx.revert();
  }, [startAnimation]);

  return (
    <div className={clsx(className, styles.container)}>
      <div className={styles.dot} ref={dotRef} />
    </div>
  );
};

export default ScrollIcon;
