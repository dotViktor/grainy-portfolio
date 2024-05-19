import { FC } from "react";
import Title from "../../atomic/Title/Title";
import styles from "./grabCV.module.scss";

const GrabCV: FC = () => {
  return (
    <div className={styles.cvContainer}>
      <Title>
        Grab My <br />
        CV
      </Title>
      <div
        className={styles.openButton}
        onClick={() => {
          window.open(
            "https://cv.viktorworks.com/Viktor%20Stoimenov.pdf",
            "_blank"
          );
        }}
      >
        Open
      </div>
    </div>
  );
};

export default GrabCV;
