import styles from './Logo.module.css';
import clsx from "clsx";
import Image from 'next/image';
import Me from '../public/static/me.jpg'

const Logo = (props: {className?: string}) => {
  return <Image src={Me} alt='' className={clsx(styles.logo, props.className)} />
}


export default Logo;
