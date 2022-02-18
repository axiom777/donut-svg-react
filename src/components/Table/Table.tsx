import React from "react";
import Slice from "./Slice/Slice";

export default class Table extends React.Component {
  render() {
    return (
      <div>
        <Slice percent={75} slices={[50, 95]} background='#D38235'  />
        <Slice percent={25} slices={[20, 50]} background='#009CA6'  />
      </div>
    );
  }
}
