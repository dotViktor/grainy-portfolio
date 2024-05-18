import { FC, PropsWithChildren } from "react";
import styles from "./infoBlock.module.scss";

const InfoBlock: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.infoBlockContainer}>{children}</div>;
};

export default InfoBlock;
