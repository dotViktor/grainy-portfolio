import { FC } from "react";
import styles from "./heroSection.module.scss";
import Spline from "@splinetool/react-spline";

const HeroSection: FC = () => {
  return (
    <div className={styles.heroContainer}>
      <Spline
        className={styles.spline}
        scene="https://prod.spline.design/FrH3FFjOzauRruXy/scene.splinecode"
      />
    </div>
  );
};

export default HeroSection;
