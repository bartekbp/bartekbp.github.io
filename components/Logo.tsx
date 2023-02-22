import styles from './Logo.module.css';
import clsx from "clsx";
import Image from 'next/image';
import Me from '../public/static/me.jpg'

const Logo = (props: {className?: string; onMouseEnter?: () => void; onMouseLeave?: () => void}) => {
  return <Image src={Me} alt='' className={clsx(styles.logo, props.className)} onMouseEnter={props.onMouseEnter} onMouseLeave={props.onMouseLeave}/>
}


export default Logo;
