import * as React from "react";
import styles from "./Legend.module.scss";
import { colors } from "../constants";

export default class Legend extends React.Component {
  render() {
    const height = 20;
    const count = colors.length;
    return (
      <div className={styles.wrapper}>
        {colors.map(({ percent, color, name }, index) => {
          const isLast = index === colors.length - 1;
          const endPercent = !isLast ? colors[index + 1].percent : 100;
          return (
            <div
              key={index}
              className={styles.item}
              style={{
                maxWidth: `calc(100% / ${count})`,
                minWidth: `calc(100% / ${count})`,
              }}
            >
              <div
                className={styles.bar}
                style={{
                  backgroundColor: color,
                  height: `${height}px`,
                  width: `calc(${isLast ? 0 : height}px + 100% / ${count})`,
                  borderRadius: `${height / 2}px`,
                  left: `calc((100% /${count})*${index})`,
                }}
              >
                <span
                  style={{
                    width: `calc(100% - ${isLast ? 0 : height}px)`,
                    display: "block",
                    textAlign: "center",
                  }}
                >
                  {percent}-{endPercent}%
                </span>
              </div>
              <div
                className={styles.name}
                style={{
                  marginTop: `${height + 5}px`,
                  color,
                }}
              >
                {name}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}
