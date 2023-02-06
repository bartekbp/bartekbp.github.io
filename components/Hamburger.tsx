import styles from "./Hamburger.module.css";
import {useRef} from "react";
import {v4 as uuid} from "uuid";
import clsx from "clsx";

const Hamburger = ({open, setOpen, className}: {open: boolean; setOpen: (value: boolean) => void; className?: string}) => {
  const id = useRef(uuid());

  return <label htmlFor={id.current} className={clsx(styles.container, className)}>
    <input type="checkbox" id={id.current} checked={open} onChange={e => setOpen(e.target.checked)}/>
    <span/>
    <span />
    <span />
  </label>
}


export default Hamburger;
