import { ReactElement, ReactNode } from "react";
import Icon from "./Icon";
import styles from "./IconLink.module.css";

const IconLink = ({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}): ReactElement => {
  return (
    <a href={href} target={"_blank"} className={styles.icon}>
      <Icon className={className}>{children}</Icon>
    </a>
  );
};

export default IconLink;
