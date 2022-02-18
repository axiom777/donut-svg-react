import * as React from "react";
import Donut from "../Donut/Donut";
import styles from "./Factor.module.scss";
import cn from "classnames";

type Description = {
  id: number;
  name: string;
  percent: number;
};

type Props = {
  id: number;
  percent: number;
  difference: number;
  name: string;
  descriptions: Description[];
  onClick?: (id: number) => void;
  selected: boolean;
};

export default class Factor extends React.Component<Props> {
  render() {
    const { percent, difference, name, descriptions, selected } = this.props;
    return (
      <div className={cn(styles.wrapper, { [styles.selected]: selected })}>
        <Donut
          size="small"
          percent={percent}
          direction="down"
          difference={difference}
        />
        <div className={styles.line}></div>
        <div className={styles.pointer}></div>
        <div>{name}</div>
        <div className={styles.descriptions}>
          {descriptions.map(({ id, name, percent }) => (
            <div key={id} className={styles.description}>
              <div className={styles.name}>{name}</div>
              <div className={styles.percent}>{percent}%</div>
            </div>
          ))}{" "}
        </div>
      </div>
    );
  }
}
