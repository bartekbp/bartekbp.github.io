import styles from "./Hamburger.module.css";
import { useId } from "react";
import clsx from "clsx";

const Hamburger = ({
  open,
  setOpen,
  className,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
  className?: string;
}) => {
  const id = useId();

  return (
    <label htmlFor={id} className={clsx(styles.container, className)}>
      <input type="checkbox" id={id} checked={open} onChange={(e) => setOpen(e.target.checked)} />
      <span />
      <span />
      <span />
    </label>
  );
};

export default Hamburger;
