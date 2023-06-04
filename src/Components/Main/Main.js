import Navigation from "../Navigation/Navigation";
import NavigationItems from "../../Data/NavigationItems";
import styles from "./Main.module.scss";

const Main = () => {
  return (
    <div className={styles["Main"]}>
      <Navigation {...NavigationItems} />
      <div className={styles["Main__Inner"]}>
        <p className={styles["Main__PreTitle"]}>Stina Brage presenterar</p>
        <h1 className={styles["Main__Title"]}>Bragehain</h1>
        <div className={styles["Main__Text"]}>
          <p>Shakesperefabriken</p>
          <p>26 augusti</p>
        </div>
      </div>
    </div>
  );
};

export default Main;
