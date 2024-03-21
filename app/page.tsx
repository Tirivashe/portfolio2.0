import styles from "./page.module.css";

export default function Home() {
  return (
    <main
      style={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={styles.loaderContainer}>
        <span className={styles.loader} />
        <h3>Under Construction...</h3>
        <span className={styles.loader2} />
      </div>
    </main>
  );
}
