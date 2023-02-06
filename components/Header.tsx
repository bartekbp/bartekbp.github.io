import Logo from "./Logo";
import styles from './Header.module.css';
import {Link} from "./Link";
import NxLink from 'next/link'
import React, {useState} from "react";
import Hamburger from "./Hamburger";
import clsx from "clsx";


const Header = () => {
  const [open, setOpen] = useState(false)
  return <header className={styles.header}>
    <NxLink href='/' className={styles.logoLink}>
      <Logo className={styles.logo}/>
    </NxLink>
    <span className={styles.name}>Bartosz Polnik</span>
    <Hamburger open={open} setOpen={setOpen} className={styles.hamburger}/>
    <nav className={clsx(styles.nav, !open && styles.hide)}>
      <Link href='/'>Home</Link>
      <Link  href='#about'>About</Link>
      <Link  href='#projects'>Projects</Link>
      <Link  href='#contact'>Contact</Link>
    </nav>
  </header>
}


export default Header;
