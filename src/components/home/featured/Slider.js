import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";
import useWindowDimensions from "../../../hooks/use-window-dimensions";

export default function Slider({ com }) {
  const { width } = useWindowDimensions();
  let ind = -1;
  return (
    <div className={styles.container}>
      <Slide easing="ease">
        {com.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              <div>
                <span>{com[++ind % com.length]}</span>
                {width > 650 && <span>{com[++ind % com.length]}</span>}
                {width > 850 && <span>{com[++ind % com.length]}</span>}
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}
