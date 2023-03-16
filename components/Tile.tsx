import { MutableRefObject, ReactElement, ReactNode } from "react";
import styles from "./Tile.module.css";
import clsx from "clsx";

const Tile = ({
  children,
  className,
  ref,
}: {
  children: ReactNode;
  className?: string;
  ref?: MutableRefObject<HTMLDivElement>;
}): ReactElement => {
  return (
    <div ref={ref} className={clsx(styles.container, className)}>
      {children}
    </div>
  );
};

export default Tile;
