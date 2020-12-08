import styles from "../styles/ItemCard.module.css";
import Link from "next/link";

const itemCard = (props) => {
  return (
    <Link href="https://google.com">
      <a className={styles.card}>
        {props && props.data &&
        <>
          <div className={styles.image}>
            <img src={props.data.image ? props.data.image : '/000000-0.png'} />
          </div>
          <span className={styles.name}>{ props.data.name }</span>
          <span className={styles.description}>{ props.data.tags ? props.data.tags.join(', ') : '' }</span>
        </>}
      </a>
    </Link>
  );
}

export default itemCard
