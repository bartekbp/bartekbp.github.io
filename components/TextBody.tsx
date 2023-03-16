import { HTMLAttributes, ReactNode } from "react";
import styles from "./TextBody.module.css";
import clsx from "clsx";

const TextBody = ({
  children,
  variant,
  className,
  id,
}: {
  children: ReactNode;
  variant: "h2" | "h3" | "h4" | "h5" | "body" | "emph";
  id?: string;
  className?: string;
}) => {
  const props: HTMLAttributes<any> = {
    className: clsx(styles[`variant-${variant ?? "body"}`], className),
    id: id,
  };
  if (variant === "h2") {
    return <h2 {...props}>{children}</h2>;
  }

  if (variant === "h3") {
    return <h3 {...props}>{children}</h3>;
  }

  if (variant === "h4") {
    return <h3 {...props}>{children}</h3>;
  }

  if (variant === "h5") {
    return <h5 {...props}>{children}</h5>;
  }

  if (variant === "emph") {
    return <span {...props}>{children}</span>;
  }

  return <div {...props}>{children}</div>;
};

export default TextBody;
