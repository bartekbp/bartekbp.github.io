import React, { ReactElement } from "react";
import styles from "./PersonIcon.module.css";

const PersonIcon = (): ReactElement => {
  return <img src={"/static/person.png"} className={styles.img} alt={""} />;
};

export default PersonIcon;
