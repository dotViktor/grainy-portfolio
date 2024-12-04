import styles from "./footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <p>Send me a mail at:</p>
      <a href="mailto:viktor.stoimenov@proton.me">viktor.stoimenov@proton.me</a>
      <p>And check out my GitHub!</p>
      <a
        href="https://github.com/dotViktor"
        target="_blank"
        rel="noopener noreferrer"
      >
        github.com/dotViktor
      </a>
    </div>
  );
};

export default Footer;
