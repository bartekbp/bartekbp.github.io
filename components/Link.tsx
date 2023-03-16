import { ReactElement, ReactNode } from "react";
import styles from "./Link.module.css";
import clsx from "clsx";
import gsap from "./initializedGsap";

export const Link = (props: {
  href: string;
  children: ReactNode;
  className?: string;
  hover?: boolean;
  variant?: "text" | "header";
  size?: "large" | "normal";
}): ReactElement => (
  <a
    href={props.href}
    onClick={(e) => {
      if (props.href.startsWith("#")) {
        e.stopPropagation();
        e.preventDefault();
        history.pushState(null, "", props.href);
        gsap.to(window, { duration: 0.3, scrollTo: props.href });
      }
    }}
    className={clsx(
      styles.link,
      props.className,
      props.hover && styles.hover,
      styles[`size-${props.size ?? "normal"}`],
      styles[`variant-${props.variant ?? "text"}`]
    )}
  >
    {props.children}
  </a>
);
