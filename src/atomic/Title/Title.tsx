import { FC, PropsWithChildren } from "react";
import styles from "./title.module.scss";

const Title: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.titleContainer}>
      <h1>{children}</h1>
    </div>
  );
};

export default Title;
