import React, { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Level from "./components/Levels";
import Home from "./components/Home";
import uniqid from "uniqid";
import bg1 from "../src/img/waldo_1.jpg";
import bg2 from "../src/img/waldo_level-2.jpg";
import bg3 from "../src/img/waldo_level-3.jpg";
import bg4 from "../src/img/waldo_level-4.jpg";
import bg5 from "../src/img/waldo_level-5.jpg";
import bg6 from "../src/img/waldo_level-6.jpg";

const App = () => {
  const [lvl, setLvl] = useState(0);
  const possibleLvls = [1, 2, 3, 4, 5, 6];
  const imgDatabase = [
    { 1: bg1, waldo: true, oddlaw: true, wenda: false, wizard: true },
    { 2: bg2, waldo: true, oddlaw: true, wenda: true, wizard: true },
    { 3: bg3, waldo: true, oddlaw: false, wenda: false, wizard: false },
    { 4: bg4, waldo: true, oddlaw: true, wenda: false, wizard: false },
    { 5: bg5, waldo: true, oddlaw: true, wenda: true, wizard: true },
    { 6: bg6, waldo: true, oddlaw: false, wenda: false, wizard: false },
  ];

  return (
    <HashRouter basename="/">
      <Header lvl={lvl} />
      <Routes>
        <Route
          path="/"
          element={
            <Home lvl={lvl} setLvl={setLvl} possibleLvls={possibleLvls} />
          }
        />
        {possibleLvls.map((item) => {
          return (
            <Route
              key={uniqid()}
              path={`/level/${item}`}
              element={
                <Level
                  lvl={item}
                  setLvl={setLvl}
                  imgDatabase={imgDatabase[item - 1]}
                />
              }
            />
          );
        })}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>Route not found!</p>
            </main>
          }
        />
      </Routes>
    </HashRouter>
  );
};

export default App;
