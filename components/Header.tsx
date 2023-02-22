import Logo from "./Logo";
import styles from "./Header.module.css";
import { Link } from "./Link";
import NxLink from "next/link";
import React, { useState } from "react";
import Hamburger from "./Hamburger";
import clsx from "clsx";

const Header = () => {
  const [hoverLogo, setHoverLogo] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <header className={styles.header}>
      <NxLink href="/" className={styles.logoLink}>
        <Logo
          className={styles.logo}
          onMouseEnter={() => setHoverLogo(true)}
          onMouseLeave={() => setHoverLogo(false)}
        />
      </NxLink>
      <Link className={styles.name} href="/" variant={"text"} hover={hoverLogo}>
        Bartosz Polnik
      </Link>
      <Hamburger open={open} setOpen={setOpen} className={styles.hamburger} />
      <nav className={clsx(styles.nav, !open && styles.hide)}>
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
