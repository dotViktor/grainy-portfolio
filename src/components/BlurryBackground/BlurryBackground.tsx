import { FC, PropsWithChildren } from "react";
import styles from "./blurryBackground.module.scss";

const BlurryBackground: FC<PropsWithChildren> = ({ children }) => {
  const ballColors = [
    "#672008",
    "#448E73",
    "#E89E6A",
    "#674C4C",
    "#B5D9CC",
    "#E7CA70",
  ];

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.foregroundStatic}></div>
      <div className={styles.backgroundBalls}>
        {ballColors.map((color) => (
          <svg
            width="800"
            height="800"
            viewBox="0 0 550 550"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            key={color}
          >
            <circle cx="275" cy="275" r="275" fill={color} />
          </svg>
        ))}
      </div>
      {children}
    </div>
  );
};

export default BlurryBackground;
