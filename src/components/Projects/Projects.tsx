import { FC } from "react";
import styles from "./projects.module.scss";
import Title from "../../atomic/Title/Title";
import InfoBlock from "../../atomic/InfoBlock/InfoBlock";

const Projects: FC = () => {
  return (
    <div className={styles.projectsContainer}>
      <Title>
        Public <br /> Projects
      </Title>
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

      <InfoBlock>
        <h1>News Homepage</h1>
        <p>
          Another basic page, a challenge from frontendmentor.io where using
          some basic information along with a design image I made a responsive
          news homepage using <i>React</i> and <i>Scss</i>.
        </p>
        <em>
          <a target="_blank" href="https://project-news.viktorworks.com">
            project-news.viktorworks.com
          </a>
          <br />
          <a target="_blank" href="https://github.com/dotViktor/news-homepage">
            Github Repository
          </a>
        </em>
      </InfoBlock>
    </div>
  );
};

export default Projects;
