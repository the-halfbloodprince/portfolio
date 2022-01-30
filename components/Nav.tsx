import styles from '../styles/Nav.module.scss'

const Nav = () => {
  return (
      <div className={styles.container}>
          <a className={styles.link} href="/">Resume</a>
          <a className={styles.link} href="/">What's Special</a>
          <a className={styles.link} href="/">Projects</a>
          <a className={styles.link} href="/">Experiments</a>
      </div>
  );
};

export default Nav;
