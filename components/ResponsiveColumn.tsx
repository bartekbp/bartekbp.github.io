import React, { ReactElement, ReactNode } from "react";
import styles from "./ResponsiveColumn.module.css";
import clsx from "clsx";

const ResponsiveColumn = ({ children, className }: { children: ReactNode; className?: string }): ReactElement => {
  return <div className={clsx(styles.container, className)}>{children}</div>;
};

export default ResponsiveColumn;
