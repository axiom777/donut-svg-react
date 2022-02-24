import * as React from "react";
import styles from "./Infographics.module.scss";
import { mockData } from "./MockData";
import SvgGenerator from "./Svgs/SvgGenerator";
import cn from "classnames";

export default class Infographics extends React.Component {
  render() {
    const { title, titleFirst, titleSecond, titleThird, data } = mockData;
    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>
          <div className={styles.graphics}>
            <div className={styles.row}>
              <div className={cn(styles.titleFirst, styles.titleFlag)}>
                {titleFirst}
              </div>
              <div className={cn(styles.titleSecond, styles.titleFlag)}>
                {titleSecond}
              </div>
              <div className={cn(styles.titleThird)}>{titleThird}</div>
              {data.map(({ dateTo, dateFrom, text, list }, index) => {
                let listDirection: "toBottom" | "toTop" | "toRightLong" =
                  "toBottom";
                if (index === 3) listDirection = "toTop";
                if (index === 4) listDirection = "toRightLong";
                let direction:
                  | "toRight"
                  | "toThreeOClock"
                  | "toSixOClock"
                  | "toNineOClock" = "toRight";
                if (index <= 3) direction = "toRight";
                if (index === 4) direction = "toThreeOClock";
                if (index > 4) return null;
                return (
                  <SvgGenerator
                    {...{
                      dateFrom,
                      dateTo,
                      text,
                      index,
                      direction,
                      list,
                      listDirection,
                    }}
                    key={index}
                  />
                );
              })}
            </div>
            <div className={styles.rowReverse}>
              {data.map(({ dateTo, dateFrom, text, list }, index) => {
                if (index <= 4) return null;

                let direction:
                  | "toRight"
                  | "toThreeOClock"
                  | "toSixOClock"
                  | "toNineOClock" = "toRight";

                let listDirection: "toRightShort" | "toBottomEnd" =
                  "toRightShort";

                if (index === 5) direction = "toSixOClock";
                if (index === 6) {
                  direction = "toNineOClock";
                  listDirection = "toBottomEnd";
                }
                return (
                  <SvgGenerator
                    {...{
                      dateFrom,
                      dateTo,
                      text,
                      index,
                      direction,
                      list,
                      listDirection,
                    }}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
