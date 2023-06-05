import styles from "./Footer.module.scss";

const Footer = ({ hashtags }) => {
  return (
    <div className={styles["Footer"]}>
      {hashtags.map((hashtag, index) => (
        <a key={index} href={hashtag.link}>
          {hashtag.name}
        </a>
      ))}
    </div>
  );
};

export default Footer;
