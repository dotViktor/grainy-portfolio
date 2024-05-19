import Title from "../../atomic/Title/Title";
import styles from "./about.module.scss";

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <Title>About Me</Title>

      <p>
        Hello! I’m Viktor Stoimenov, a versatile web developer with a strong
        background in front-end development and a growing interest in back-end
        systems. I thrive in team settings and am always eager to learn new
        skills and technologies to keep improving myself!
      </p>
    </div>
  );
};

export default About;
