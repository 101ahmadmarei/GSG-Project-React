import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";

export default function Slider({ com }) {
  let ind = -1;
  return (
    <div className={styles.container}>
      <Slide easing="ease">
        {com.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              <div>
                <span className={styles.span1}>{com[++ind % com.length]}</span>
                <span className={styles.span2}>{com[++ind % com.length]}</span>
                <span className={styles.span3}>{com[++ind % com.length]}</span>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
