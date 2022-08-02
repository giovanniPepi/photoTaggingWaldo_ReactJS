import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
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
import waldoMini from "../src/img/waldoAvatar.jpg";
import odlawMini from "../src/img/OdlawAvatar.jpg";
import wendaMini from "../src/img/wenda.jpg";
import wizardMini from "../src/img/wizardAvatar.jpg";

const App = () => {
  const [lvl, setLvl] = useState(1);
  const [inHome, setInHome] = useState(false);
  const possibleLvls = [1, 2, 3, 4, 5, 6];
  const [chosenCharacter, setChosenCharacter] = useState("default");
  const [foundCharacters, setFoundCharacters] = useState([""]);
  const [time, setTime] = useState(0);

  const imgDatabase = [
    { photo: bg1, waldo: true, odlaw: true, wenda: false, wizard: true },
    { photo: bg2, waldo: true, odlaw: false, wenda: false, wizard: false },
    { photo: bg3, waldo: true, odlaw: true, wenda: true, wizard: true },
    { photo: bg4, waldo: true, odlaw: true, wenda: true, wizard: false },
    { photo: bg5, waldo: true, odlaw: true, wenda: true, wizard: true },
    { photo: bg6, waldo: true, odlaw: false, wenda: false, wizard: false },
  ];

  const avatarDatabase = {
    waldo: waldoMini,
    odlaw: odlawMini,
    wenda: wendaMini,
    wizard: wizardMini,
  };

  return (
    <HashRouter basename="/">
      <Header
        lvl={lvl}
        setLvl={setLvl}
        imgDatabase={imgDatabase[lvl - 1]}
        avatarDatabase={avatarDatabase}
        inHome={inHome}
        foundCharacters={foundCharacters}
        setFoundCharacters={setFoundCharacters}
        time={time}
        setTime={setTime}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              lvl={lvl}
              setLvl={setLvl}
              possibleLvls={possibleLvls}
              imgDatabase={imgDatabase}
              avatarDatabase={avatarDatabase}
              inHome={inHome}
              setInHome={setInHome}
            />
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
                  avatarDatabase={avatarDatabase}
                  inHome={inHome}
                  setInHome={setInHome}
                  chosenCharacter={chosenCharacter}
                  setChosenCharacter={setChosenCharacter}
                  foundCharacters={foundCharacters}
                  setFoundCharacters={setFoundCharacters}
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
