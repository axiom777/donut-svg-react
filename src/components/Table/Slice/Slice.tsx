import React from "react";
import styles from "./Slice.module.scss";

type Props = {
  percent: number;
  slices: number[];
  type: keyof typeof config;
};

const colors = {
  red: "#AC2020",
  yellow: "#D38235",
  green: "#009CA6",
};

const config = {
  plan: [
    { value: 50, color: colors.red },
    { value: 94, color: colors.yellow },
    { value: 100, color: colors.green },
  ],
  comment: [
    { value: 19, color: colors.green },
    { value: 49, color: colors.yellow },
    { value: 100, color: colors.red },
  ],
};

export default class Slice extends React.Component<Props, {}> {
  render() {
    const { percent, slices, type } = this.props;
    const currentConfig = config[type];

    let color = currentConfig[0].color;

    for (let i = 1; i < currentConfig.length; i++) {
      const prevValue = currentConfig[i - 1].value;
      const currentValue = currentConfig[i].value;
      if (prevValue < percent) {
        color = currentConfig[i].color;
      }

      if (currentValue > percent) break;
    }

    return (
      <div className={styles.wrapper}>
        <span>{percent}%</span>
        <div className={styles.bar}>
          <div
            className={styles.percent}
            style={{
              right: `${100 - percent}%`,
              backgroundColor: color,
            }}
          />
          {slices.map((slice, index) => (
            <div
              key={index}
              className={styles.slice}
              style={{ left: `${slice}%` }}
            >
              {slice}
              <div className={styles.line} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
