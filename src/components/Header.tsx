import styles from "../styles/Header.module.css";
import Icon from "../assets/Icon";

export function Header() {
  return (
    <header className={styles.header}>
      <Icon />
      <strong>Ignite Feed</strong>
    </header>
  );
}
