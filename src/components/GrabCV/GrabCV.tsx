import { FC } from "react";
import Title from "../../atomic/Title/Title";
import styles from "./grabCV.module.scss";
import StarImg from "../../assets/images/star.webp";

const GrabCV: FC = () => {
  return (
    <div className={styles.cvContainer}>
      <Title>
        Grab My <br />
        <img src={StarImg} alt="star" />
        CV
        <img src={StarImg} alt="star" />
      </Title>
      <div className={styles.openButton}>OPEN</div>
    </div>
  );
};

export default GrabCV;
