import * as React from "react";
import styles from "./Infographics.module.scss";
import { mockData } from "./MockData";
import SvgGenerator from "./Svgs/SvgGenerator";

export default class Infographics extends React.Component {
  render() {
    const { title, titleFirst, titleSecond, titleThird, data } = mockData;
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>
          {data.map(({ dateTo, dateFrom, text }, index) => {
            let direction:
              | "toRight"
              | "toThreeOClock"
              | "toSixOClock"
              | "toNineOClock" = "toRight";
            if (index <= 3) direction = "toRight";
            if (index === 4) direction = "toThreeOClock";
            if (index === 5) direction = "toSixOClock";
            if (index === 6) direction = "toNineOClock";
            return (
              <SvgGenerator
                {...{ dateFrom, dateTo, text, index, direction }}
                key={index}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
