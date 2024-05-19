import { FC, PropsWithChildren } from "react";
import styles from "./infoBlock.module.scss";
import FadeIn from "../FadeIn/FadeIn";

const InfoBlock: FC<PropsWithChildren> = ({ children }) => {
  return (
    <FadeIn>
      <div className={styles.infoBlockContainer}>{children}</div>
    </FadeIn>
  );
};

export default InfoBlock;
