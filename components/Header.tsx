import Logo from "./Logo";
import styles from './Header.module.css';
import {Link} from "./Link";
import NxLink from 'next/link'


const Header = () => {
  return <header className={styles.header}>
    <NxLink href='/' className={styles.logoLink}>
      <Logo className={styles.logo}/>
    </NxLink>
    <span className={styles.name}>Bartosz Polnik</span>
    <nav className={styles.nav}>
      <Link href='/'>Home</Link>
      <Link  href='#about'>About</Link>
      <Link  href='#projects'>Projects</Link>
      <Link  href='#contact'>Contact</Link>
    </nav>
  </header>
}


export default Header;
