import styles from "./Main.module.scss";

const Main = ({ preTitle = "", title = "", text = "" }) => {
  return (
    <main className={styles["Main"]}>
      <div className={styles["Main__Inner"]}>
        <p className={styles["Main__PreTitle"]}>{preTitle}</p>
        <h1 className={styles["Main__Title"]}>{title}</h1>
        <div
          className={styles["Main__Text"]}
          dangerouslySetInnerHTML={{ __html: text }}
        />
      </div>
    </main>
  );
};

export default Main;
