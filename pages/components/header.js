import styles from "../../styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1>
        <a href="/">title</a>
      </h1>
      <nav className="">
        <ul>
          <li>
            <a href="#">ABOUT</a>
          </li>
          <li>
            <a href="#">PC</a>
          </li>
          <li>
            <a href="#">Phone</a>
          </li>
          <li>
            <a href="#">Search</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
