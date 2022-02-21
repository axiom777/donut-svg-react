import React from "react";
import styles from "./Table.module.scss";
import Slice from "./Slice/Slice";

export default class Table extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <span className={styles.bold}>Оценка качества планирования:</span>
          <span>План сформирован на </span>
          <Slice percent={75} slices={[50, 95]} type="plan" />
          <span>Рецензентом даны комментариев </span>
          <Slice percent={18} slices={[20, 50]} type="comment" />
        </div>
      </div>
    );
  }
}
