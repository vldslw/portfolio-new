import Link from "next/link";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Link
        href="/"
        onClick={() => {
          window.location.href = "/";
        }}
        className={styles.header__logo}
      >
        vldslw
      </Link>
      <nav className={styles.header__nav}>
        <a href="#stack" className={styles.header__link}>
          About
        </a>
        <a href="#projects" className={styles.header__link}>
          Projects
        </a>
        <a href="#footer" className={styles.header__link}>
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;
