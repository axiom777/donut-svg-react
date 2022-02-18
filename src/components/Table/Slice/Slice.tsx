import React from "react";
import styles from "./Slice.module.scss";

type Props = {
  percent: number;
  slices: number[];
  background?: string;
};

export default class Slice extends React.Component<Props, {}> {
  render() {
    const { percent, slices, background } = this.props;

    return (
      <div className={styles.wrapper}>
        <span>{percent}%</span>
        <div className={styles.bar}>
          <div
            className={styles.percent}
            style={{
              right: `${100 - percent}%`,
              backgroundColor: background ? background : "red",
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
