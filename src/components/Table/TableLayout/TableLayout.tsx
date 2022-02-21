import * as React from "react";
import { tableHeading } from "./constants";
import { mockData } from "./mockTable";
import styles from "./TableLayout.module.scss";

type Props = { onClickRow: (id: number) => void };

export default class TableLayout extends React.Component<Props, {}> {
  handleClickRow = (id: number) => {
    this.props.onClickRow(id);
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.tableHeadingRow}>
              {tableHeading.map(({ text, width }, index) => (
                <th
                  key={text + index}
                  style={{
                    minWidth: `${width}px`,
                    maxWidth: `${width}px`,
                    width: `${width}px`,
                  }}
                >
                  {text}
                </th>
              ))}
            </tr>
            <tr className={styles.tableInfoRow}>
              {tableHeading.map(({ info, width }, index) => (
                <th
                  key={info + index}
                  style={{
                    minWidth: `${width}px`,
                    maxWidth: `${width}px`,
                  }}
                >
                  {info}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {mockData.map(({ data, id }) => (
              <tr key={id} onClick={() => this.handleClickRow(id)}>
                {tableHeading.map(({ name }, index) => (
                  <td key={"cell" + index}>
                    {name in data ? data[name].value : ""}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className={styles.content}></div>
      </div>
    );
  }
}
