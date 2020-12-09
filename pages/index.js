import Head from "next/head";
import styles from "../styles/Home.module.css";
import ItemCard from "../components/itemCard";
import data from "../lib/data";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.grid}>
          {data.map((d) => {
            return <ItemCard key={d.name} data={d} />
          })}
        </div>
      </main>
    </div>
  );
}
