import { FC } from "react";
import styles from "./Experience.module.scss";
import StarImg from "../../assets/images/star.webp";
import Title from "../../atomic/Title/Title";
import InfoBlock from "../../atomic/InfoBlock/InfoBlock";

const Experience: FC = () => {
  return (
    <div className={styles.expContainer}>
      <Title>
        <img src={StarImg} alt="star" />
        Work
        <img src={StarImg} alt="star" />
        <br />
        Experience
      </Title>
      <InfoBlock>
        <h1>Endava</h1>
        <p>
          In their <i>intensive internship</i> I was responsible for{" "}
          <i>designing</i> and <i>developing</i> the <i>front-end</i> of a
          complex
          <i> single page web application</i>
          in a <i>team</i> with other interns using <i>React</i>.
        </p>
        <p>
          I also implemented <i>authentication</i>, <i>authorization</i>,{" "}
          <i>state management</i> as well as <i>asynchronous API handling</i>{" "}
          and more.
        </p>
        <em>HTML SCSS REACT TYPESCRIPT</em>
      </InfoBlock>
      <InfoBlock>
        <h1>DiaDraw</h1>
        <p>
          Here I had the pleasure of working on the <i>back-end</i> of a web
          application while working in a <i>team</i>, where I built a{" "}
          <i>secure authentication</i> and <i>authorization system</i> as well
          as a documented <i>REST API</i> using <i>NodeJs</i> and <i>Express</i>{" "}
          along with using <i>SQL</i> as the database.
        </p>
        <p>
          Furthermore I worked on the <i>UI</i> with <i>React</i> but not as
          extensively.
        </p>
        <em>NODEJS JAVASCRIPT EXPRESS SQL REACT</em>
      </InfoBlock>
    </div>
  );
};

export default Experience;
