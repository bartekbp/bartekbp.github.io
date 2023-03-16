import styles from "./HLine.module.css";
import clsx from "clsx";

const HLine = ({ maxWidth = "5rem", className }: { maxWidth?: string; className?: string }) => {
  return (
    <div
      className={clsx(styles.container, className)}
      style={{
        maxWidth,
      }}
    />
  );
};

export default HLine;
