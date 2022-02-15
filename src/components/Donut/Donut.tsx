import * as React from "react";
import styles from "./Donut.module.scss";
import cn from "classnames";

type Sizes = {
  [key in Props["size"]]: {
    size: number;
    strokeWidth: number;
    fontSize: number;
  };
};

const sizes: Sizes = {
  small: {
    size: 79,
    strokeWidth: 5,
    fontSize: 36,
  },
  regular: {
    size: 295,
    strokeWidth: 10,
    fontSize: 120,
  },
};

const colors = [
  { percent: 0, color: "#AC2020", name: "Зона риска" },
  { percent: 54, color: "#D38235", name: "Нейтральная зона" },
  { percent: 74, color: "#654EA3", name: "Зона результативности" },
];

type Props = {
  percent: number;
  size: "small" | "regular";
  direction: "up" | "down";
  difference: number;
};

type State = {
  d: string;
  currentValue: number;
  value: number;
};

export default class Donut extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { d: "", currentValue: 0, value: props.percent };
  }

  componentDidMount() {
    this.animateStart();
  }

  render() {
    const { difference } = this.props;
    const { size, strokeWidth, fontSize } = sizes[this.props.size];
    const { d, currentValue } = this.state;
    let strokeColor = colors[0].color;

    for (let i = 1; i < colors.length; i++) {
      if (colors[i].percent <= currentValue) {
        strokeColor = colors[i].color;
      }
    }

    return (
      <div
        className={styles.wrapper}
        style={{ width: size, height: size, fontSize }}
      >
        <svg style={{ width: size, height: size }}>
          <path
            d={d}
            strokeWidth={strokeWidth}
            stroke={strokeColor}
            fill="transparent"
            transform={`translate(${strokeWidth / 2},${strokeWidth / 2})`}
            text-anchor="middle"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 2 - strokeWidth}
            fill="white"
            stroke="#DCDCDC"
            style={{}}
          />
        </svg>
        <div className={styles.text}>
          <span>{currentValue}</span>
          <span
            style={{
              fontSize: fontSize / 2.5,
              lineHeight: `${fontSize - 5}px`,
            }}
          >
            %
          </span>
        </div>
        {this.props.size === "small" && (
          <div
            className={cn(
              styles.diff,
              { [styles.positive]: difference > 0 },
              { [styles.negative]: difference < 0 }
            )}
          >
            {difference > 0 && "+"}
            {difference}
          </div>
        )}
      </div>
    );
  }
  animateStart() {
    let v = 0;
    const { value } = this.state;
    const intervalOne = setInterval(() => {
      const p = +(v / value).toFixed(2);
      const a = p < 0.95 ? 2 - 2 * p : 0.05;
      v += a;
      if (v >= +value) {
        v = value;
        clearInterval(intervalOne);
      }
      this.setValue(v);
    }, 10);
  }

  polarToCartesian(
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number
  ) {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  }

  describeArc(
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number
  ) {
    const start = this.polarToCartesian(x, y, radius, endAngle);
    const end = this.polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${largeArcFlag} 0 ${end.x} ${end.y}`;
  }

  setValue(value: number) {
    let c = (value / 100) * 360;
    if (c === 360) c = 359.99;
    const { size, strokeWidth } = sizes[this.props.size];
    const { direction } = this.props;
    const angle = direction === "up" ? 180 : 0;
    const xy = size / 2 - strokeWidth / 2;

    const d = this.describeArc(xy, xy, xy, angle, angle + c);
    this.setState({ d, currentValue: Math.round(value) });
  }
}
