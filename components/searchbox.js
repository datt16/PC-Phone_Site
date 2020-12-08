import styles from "../styles/SearchBox.module.css";

// TODO: id, nameの設定
export default function SerachBox() {
  return (
    <div>
      <form id="***" action="#" method="get" className={styles.form2}>
        <input
          className={styles.sbox2}
          id="***" // TODO: 後で追記
          name="***" // TODO: 後で追記
          type="text"
          placeholder="フリーワードを入力"
        />
        {/* TODO: idの設定 */}
        <button type="submit" id="***" className={styles.sbtn2}>
          <span>&gt;</span>
          {/* TODO: 検索アイコンどにかする */}
        </button>
      </form>
    </div>
  );
}
