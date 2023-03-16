import { MutableRefObject, ReactNode } from "react";
import styles from "./Stack.module.css";
import clsx from "clsx";

const Stack = ({
  children,
  spacing,
  className,
  ref,
}: {
  children: ReactNode;
  spacing: string;
  className?: string;
  ref?: MutableRefObject<HTMLDivElement>;
}) => {
  return (
    <div className={clsx(styles.container, className)} style={{ gap: spacing }} ref={ref}>
      {children}
    </div>
  );
};

export default Stack;
