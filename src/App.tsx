import React from "react";
import "./App.css";
import styles from "./App.module.scss";
import Donut from "./components/Donut/Donut";
import Factor from "./components/Factor/Factor";
import Legend from "./components/Legend/Legend";
import mockData from "./mockData";
import cn from "classnames";

export default class App extends React.Component {
  render() {
    const {
      title,
      year,
      yearsList,
      percent,
      difference,
      desription,
      factors,
      disclaimer,
    } = mockData;

    return (
      <div className={styles.wrapper}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>
          <div className={styles.mainCol}>
            <div className={styles.yearSwitcher}>
              {yearsList.map((yearValue) => (
                <div
                  className={cn(styles.year, {
                    [styles.active]: year === yearValue,
                  })}
                >
                  {yearValue}
                </div>
              ))}
            </div>
            <div className={styles.donutChart}>
              <Donut
                size="regular"
                percent={percent}
                difference={difference}
                direction="down"
              />
            </div>
            <div className={styles.legend}>
              <Legend />
            </div>
            <div className={styles.desription}>{desription}</div>
            <div className={styles.disclaimer}>{disclaimer}</div>
            <button>Создать план вовлечённости</button>
          </div>
          <div className={styles.factorsCol}>
            <div className={styles.factorTitle}>Факторы</div>
            <div className={styles.factorList}>
              {factors.map((factor) => (
                <div>
                  <Factor {...factor} selected={false} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/*
         *<Legend />
         *<br />
         *<Donut size="small" percent={100} direction="down" difference={-3} />
         *<Donut size="regular" percent={75} direction="down" difference={15} />
         *<Donut size="regular" percent={50} direction="down" difference={-3} />
         *<Donut size="small" percent={25} direction="down" difference={0} />
         */}
      </div>
    );
  }
}
