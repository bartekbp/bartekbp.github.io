import { ReactNode, ReactElement } from "react";
import styles from "./Link.module.css";
import clsx from "clsx";

export const Link = (props: {
  href: string;
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "text" | "header";
}): ReactElement => (
  <a
    href={props.href}
    className={clsx(
      styles.link,
      props.className,
      props.hover && styles.hover,
      (props.variant ?? "header") === "header" && styles.header
    )}
  >
    {props.children}
  </a>
);
