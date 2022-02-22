import React from "react";
import "./App.css";
import Charts from "./components/Charts/Charts";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Table from "./components/Table/Table";
import styles from "./App.module.scss";
import Infographics from "./components/Infographics/Infographics";

export default class App extends React.Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Routes>
            <Route path="/charts" element={<Charts />} />
            <Route path="/table" element={<Table />} />
            <Route path="/infographic" element={<Infographics />} />
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
                  <li>
                    <Link to="/infographic">Загогулина</Link>
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
