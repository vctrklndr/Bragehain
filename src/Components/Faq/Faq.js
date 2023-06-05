import Accordion from "../Accordion/Accordion";
import styles from "./Faq.module.scss";

const Faq = ({ items = [] }) => {
  return (
    <div id="faq" className={styles["Faq"]}>
      <div className={styles["Faq__Container"]}>
        <h2 className={styles["Faq__Title"]}>FAQ</h2>
        {items.map((item, index) => (
          <Accordion key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Faq;
