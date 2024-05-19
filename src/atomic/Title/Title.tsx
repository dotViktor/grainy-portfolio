import { FC, PropsWithChildren } from "react";
import styles from "./title.module.scss";
import FadeIn from "../FadeIn/FadeIn";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <FadeIn>
      <div className={styles.titleContainer}>
        <h1>{children}</h1>
      </div>
    </FadeIn>
  );
};

export default Title;
