import React, { useState } from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Level from "./components/Levels";
import Home from "./components/Home";
import uniqid from "uniqid";

const App = () => {
  const [lvl, setLvl] = useState(0);
  const possibleLvls = [1, 2, 3, 4, 5, 6];

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
              element={<Level lvl={item} setLvl={setLvl} />}
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
