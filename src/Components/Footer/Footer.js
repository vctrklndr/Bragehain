import styles from "./Footer.module.scss";

const Footer = ({}) => {
  return (
    <div className={styles["Footer"]}>
      <a href="https://www.instagram.com/explore/tags/bragehain/">#bragehain</a>{" "}
      <a href="https://www.instagram.com/explore/tags/klubb40/">#klubb40</a>
    </div>
  );
};

export default Footer;
