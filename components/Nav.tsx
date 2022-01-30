import Link from 'next/link'

import styles from '../styles/Nav.module.scss'

const Nav = () => {
  return (
      <div className={styles.container}>
          <Link href="/">
            <a className={styles.link}>Resume</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>What&apos;s Special</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Projects</a>
          </Link>
          <Link href="/">
            <a className={styles.link}>Experiments</a>
          </Link>
      </div>
  );
};

export default Nav;
