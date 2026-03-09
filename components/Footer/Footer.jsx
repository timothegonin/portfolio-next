import styles from "./Footer.module.css";

export default function Footer({ children }) {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} Timothé GONIN.</p>
      <p className={styles.links}>
        <a href="https://github.com/timothegonin" target="_blank">
          GitHub
        </a>
        <a href="https://www.linkedin.com/in/timothegonin/" target="_blank">
          LinkedIn
        </a>
      </p>
    </footer>
  );
}