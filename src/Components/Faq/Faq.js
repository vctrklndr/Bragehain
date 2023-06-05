import Accordion from "../Accordion/Accordion";
import styles from "./Faq.module.scss";

const Faq = ({ title = "", items = [] }) => {
  const hasFaqItems = items.length > 0;
  return (
    <div id="faq" className={styles["Faq"]}>
      <div className={styles["Faq__Container"]}>
        <h2 className={styles["Faq__Title"]}>{title}</h2>
        {hasFaqItems &&
          items.map((item, index) => <Accordion key={index} {...item} />)}
      </div>
    </div>
  );
};

export default Faq;
