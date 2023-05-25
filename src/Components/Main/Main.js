import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles["Main"]}>
      <div className={styles["Main__Inner"]}>
        <p className={styles["Main__PreTitle"]}>Stina Brage presenterar</p>
        <h1 className={styles["Main__Title"]}>Bragehain</h1>
        <div className={styles["Main__Text"]}>
          <p>SHAKESPEAREFABRIKEN</p>
          <p>26 AUGUSTI</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
