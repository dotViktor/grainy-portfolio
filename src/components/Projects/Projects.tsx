import { FC } from "react";
import styles from "./projects.module.scss";
import Title from "../../atomic/Title/Title";
import InfoBlock from "../../atomic/InfoBlock/InfoBlock";

const Projects: FC = () => {
  return (
    <div className={styles.projectsContainer}>
      <Title>Projects</Title>
      <InfoBlock>
        <h1>Wedding Site</h1>
        <p>
          A simple, pretty and functional wedding site I made for my sister, It
          uses a <i>REST API </i>to write the form applications to an{" "}
          <i>easy-to-use excel sheet</i>.
        </p>
        <em>
          <a target="_blank" href="https://wedding.viktorworks.com">
            wedding.viktorworks.com
          </a>
        </em>
      </InfoBlock>
    </div>
  );
};

export default Projects;
