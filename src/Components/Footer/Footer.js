import styles from "./Footer.module.scss";

const Footer = ({ hashtags = [] }) => {
  return (
    <footer className={styles["Footer"]}>
      {hashtags.map((hashtag, index) => (
        <a key={index} href={hashtag.link}>
          {hashtag.name}
        </a>
      ))}
    </footer>
  );
};

export default Footer;
