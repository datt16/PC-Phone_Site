import styles from "../styles/SearchBox.module.css";
import { AiOutlineSearch } from "react-icons/ai";

export default function SerachBox() {
  return (
    <div>
      <form id="sform" action="#" method="get" className={styles.form2}>
        <button type="submit" id="sbtn" className={styles.sbtn2}>
          <AiOutlineSearch />
        </button>
      </form>
    </div>
  );
}
