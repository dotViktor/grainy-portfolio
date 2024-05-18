import { FC, PropsWithChildren } from "react";
import styles from "./ColumnContainer.module.scss";

const ColumnContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.flexContainer}>{children}</div>;
};

export default ColumnContainer;
