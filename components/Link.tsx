import {ReactNode, ReactElement} from "react";
import styles from "./Link.module.css";
import clsx from 'clsx';

export const Link = (props: { href: string; children: ReactNode; className?: string }): ReactElement =>
  <a href={props.href} className={clsx(styles.link, props.className)}>{props.children}</a>;
