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
  const linkSize = "large";
  return (
    <header className={styles.header}>
      <NxLink href="/" className={styles.logoLink}>
        <Logo
          className={styles.logo}
          onMouseEnter={() => setHoverLogo(true)}
          onMouseLeave={() => setHoverLogo(false)}
        />
      </NxLink>
      <Link className={styles.name} href="/" variant={"text"} hover={hoverLogo} size={linkSize}>
        Bartosz Polnik
      </Link>
      <Hamburger open={open} setOpen={setOpen} className={styles.hamburger} />
      <nav className={clsx(styles.nav, !open && styles.hide)}>
        <Link href="/" size={linkSize} variant={"header"}>
          Home
        </Link>
        <Link href="#about" size={linkSize} variant={"header"}>
          About
        </Link>
        <Link href="#projects" size={linkSize} variant={"header"}>
          Projects
        </Link>
        <Link href="#contact" size={linkSize} variant={"header"}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
