import React from "react";
import styles from "./SvgStyles.module.scss";
import cn from "classnames";

type Props = {
  index: number;
  text: string;
  dateFrom: Date;
  dateTo: Date;
  direction: "toRight" | "toThreeOClock" | "toSixOClock" | "toNineOClock";
  list: string[];
  listDirection:
    | "toBottom"
    | "toTop"
    | "toRightLong"
    | "toRightShort"
    | "toBottomEnd";
};

type State = {
  fill: string;
};

export default class ToRight extends React.Component<Props, State> {
  state = {
    fill: "#0070C8",
  };
  componentDidMount() {
    const { dateFrom, dateTo } = this.props;
    const currentDate = new Date();
    const isActive =
      currentDate.getTime() > dateFrom.getTime() &&
      currentDate.getTime() < dateTo.getTime();
    const fill = isActive ? "#D38235" : "#0070C8";
    this.setState({ fill });
  }

  render() {
    const {
      index,
      text,
      dateFrom,
      dateTo,
      direction,
      list,
      listDirection,
    } = this.props;
    let indexStyle, textStyle, datesStyle;
    switch (direction) {
      default:
        indexStyle = styles.indexToRight;
        textStyle = styles.textToRight;
        datesStyle = styles.datesToRight;
        break;

      case "toThreeOClock":
        indexStyle = styles.indexToThreeOClock;
        textStyle = styles.textToThreeOClock;
        datesStyle = styles.datesToThreeOClock;
        break;

      case "toSixOClock":
        indexStyle = styles.indexToSixOClock;
        textStyle = styles.textToSixOClock;
        datesStyle = styles.datesToSixOClock;
        break;

      case "toNineOClock":
        indexStyle = styles.indexToNineOClock;
        textStyle = styles.textToNineOClock;
        datesStyle = styles.datesToNineOClock;
        break;
    }

    return (
      <div className={styles.wrapper}>
        {direction === "toRight" && this.toRight()}
        {direction === "toThreeOClock" && this.toThreeOClock()}
        {direction === "toSixOClock" && this.toSixOClock()}
        {direction === "toNineOClock" && this.toNineOClock()}
        <div className={cn(styles.index, indexStyle)}>{index + 1}</div>
        <div className={cn(styles.text, textStyle)}>{text}</div>
        <div className={cn(styles.dates, datesStyle)}>
          {dateFrom.toLocaleDateString("RU-ru")} -{" "}
          {dateTo.toLocaleDateString("RU-ru")}
        </div>
        <ul className={cn(styles.list, styles[listDirection])}>
          {list.map((li) => (
            <li>{li}</li>
          ))}
        </ul>
      </div>
    );
  }

  toRight = () => {
    const { fill } = this.state;
    return (
      <svg
        width="173"
        height="91"
        viewBox="0 0 173 91"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.127838 90.2468L147.312 90.3107C149.719 86.8583 172.602 47.3041 172.73 45.791C173.028 42.7008 150.635 5.61883 147.674 0.546692L0 0.418823C1.21446 5.78932 24.5235 42.1681 24.6514 45.173C24.7579 48.4549 0.788332 85.2386 0.127838 90.2468Z"
          fill={fill}
        />
      </svg>
    );
  };
  toThreeOClock = () => {
    const { fill } = this.state;
    return (
      <svg
        width="172"
        height="203"
        viewBox="0 0 172 203"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.462891 0.908875C95.7659 2.91216 171.744 81.1893 171.148 176.516C166.247 179.84 130.857 202.367 127.661 202.068C126.149 201.94 87.2647 178.817 83.8131 176.388C83.2591 129.993 46.7401 91.9303 0.462891 89.4582C4.68154 82.809 25.2208 47.2401 25.3486 45.7909C25.6469 42.7647 4.14888 7.13183 0.462891 0.908875Z"
          fill={fill}
        />
      </svg>
    );
  };
  toSixOClock = () => {
    const { fill } = this.state;
    return (
      <svg
        width="204"
        height="171"
        viewBox="0 0 204 171"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M203.551 1.93682C200.461 97.1992 121.351 172.365 26.0481 170.66C22.7882 165.716 0.629733 130.062 0.99194 126.865C1.1837 125.352 24.7271 86.6927 27.1986 83.3041C73.5185 83.2402 111.998 47.1811 115.023 0.913879C121.607 5.19749 156.997 26.168 158.381 26.2959C161.386 26.6369 197.265 5.55978 203.551 1.93682Z"
          fill={fill}
        />
      </svg>
    );
  };
  toNineOClock = () => {
    const { fill } = this.state;
    return (
      <svg
        width="168"
        height="206"
        viewBox="0 0 168 206"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M164.392 205.934C69.2593 200.372 -3.79993 119.303 0.354793 24.1042C5.36177 20.9075 41.5398 -0.297456 44.7358 0.128774C46.2485 0.3632 84.3016 24.8927 87.6253 27.4928C86.4748 73.824 121.566 113.208 167.716 117.449C163.241 123.906 141.381 158.772 141.211 160.157C140.827 163.119 160.94 199.604 164.392 205.934Z"
          fill={fill}
        />
      </svg>
    );
  };
}
