import { ReactElement, ReactNode } from "react";
import styles from "./Icon.module.css";
import clsx from "clsx";

const Icon = ({ children, className }: { children: ReactNode; className?: string }): ReactElement => {
  return <div className={clsx(styles.icon, className)}>{children}</div>;
};

export default Icon;
