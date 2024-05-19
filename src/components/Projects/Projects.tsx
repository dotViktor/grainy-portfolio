import { FC } from "react";
import styles from "./projects.module.scss";
import Title from "../../atomic/Title/Title";
import StarImg from "../../assets/images/star.webp";
import InfoBlock from "../../atomic/InfoBlock/InfoBlock";

const Projects: FC = () => {
  return (
    <div className={styles.projectsContainer}>
      <Title>
        <img src={StarImg} alt="star" />
        Projects
        <img src={StarImg} alt="star" />
      </Title>
      <InfoBlock>
        <h1>Wedding Site</h1>
        <p>
          A simple, pretty and functional wedding site I made for my sister, It
          uses a <i>REST API </i>to write the form applications to an{" "}
          <i>easy-to-use excel sheet</i>.
        </p>
        <em>
          <a href="#">wedding.viktorworks.com</a>
        </em>
      </InfoBlock>
    </div>
  );
};

export default Projects;
