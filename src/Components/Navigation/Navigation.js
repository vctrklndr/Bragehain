import styles from "./Navigation.module.scss";

const Navigation = () => {
  return (
    <div className={styles["Navigation"]}>
      <nav>
        <ul className={styles["Navigation__Menu"]}>
          <li>
            <a className={styles["Navigation__Button"]} href="#information">
              Om Bragehain
            </a>
          </li>
          <li>
            <a className={styles["Navigation__Button"]} href="#food-and-drinks">
              Mat & Dryck
            </a>
          </li>
          <li>
            <a className={styles["Navigation__Button"]} href="#accommodation">
              Boende
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
