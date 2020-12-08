import styles from "../styles/ItemCard.module.css";
import Link from "next/link";

export default function itemCard() {
  return (
    <Link href="https://google.com">
      <a className={styles.card}>
        <h3>iPhone 12 Pro Max</h3>
        <p>全く新しい最先端のテクノロジーを搭載した驚くべきゲーミング携帯電話</p>
      </a>
    </Link>
  );
}
