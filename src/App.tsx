import React from "react";
import "./App.css";
import Charts from "./components/Charts/Charts";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Table from "./components/Table/Table";
import styles from "./App.module.scss";

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Routes>
            <Route path="/charts" element={<Charts />} />
            <Route path="/table" element={<Table />} />
            <Route path="*" element={<div>Not Found</div>} />
            <Route
              path="/"
              element={
                <ul className={styles.list}>
                  <li>
                    <Link to="/charts">Бублики</Link>
                  </li>
                  <li>
                    <Link to="/table">Таблица</Link>
                  </li>
                </ul>
              }
            />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
