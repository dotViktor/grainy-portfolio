import Title from "../../atomic/Title/Title";
import styles from "./about.module.scss";
import StarImg from "../../assets/images/star.png";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <Title>
        <img src={StarImg} alt="star" />
        About Me
        <img src={StarImg} alt="star" />
      </Title>

      <p>
        I'm a passionate developer with a thirst for knowledge who specializes
        in building websites and back-end systems who has never turned down an
        opportunity to learn something new!
      </p>
    </div>
  );
};

export default About;
