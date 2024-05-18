import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>Send me a mail at:</p>
      <a href="#">viktorstoimenov@vivaldi.net</a>
    </div>
  );
};

export default Footer;
