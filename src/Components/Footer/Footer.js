import styles from "./Footer.module.scss";

const Footer = ({ hashtags = [] }) => {
  const hasHashtags = hashtags.length > 0;
  return (
    <footer className={styles["Footer"]}>
      {hasHashtags &&
        hashtags.map((hashtag, index) => (
          <a key={index} href={hashtag.link}>
            {hashtag.name}
          </a>
        ))}
    </footer>
  );
};

export default Footer;
