import React, { useEffect, useState } from "react";
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
import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

const App = () => {
  const [lvl, setLvl] = useState(1);
  const [inHome, setInHome] = useState(false);
  const possibleLvls = [1, 2, 3, 4, 5, 6];
  const [chosenCharacter, setChosenCharacter] = useState("default");
  const [foundCharacters, setFoundCharacters] = useState([]);
  const [time, setTime] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const [clickLocation, setClickLocation] = useState({
    left: "0%",
    top: "0%",
  });
  const [imgDatabase] = useState([
    {
      photo: bg1,
      waldo: true,
      odlaw: true,
      wenda: false,
      wizard: true,
      quantity: 3,
    },
    {
      photo: bg2,
      waldo: true,
      odlaw: false,
      wenda: false,
      wizard: false,
      quantity: 1,
    },
    {
      photo: bg3,
      waldo: true,
      odlaw: true,
      wenda: true,
      wizard: true,
      quantity: 4,
    },
    {
      photo: bg4,
      waldo: true,
      odlaw: true,
      wenda: true,
      wizard: false,
      quantity: 3,
    },
    {
      photo: bg5,
      waldo: true,
      odlaw: true,
      wenda: true,
      wizard: true,
      quantity: 4,
    },
    {
      photo: bg6,
      waldo: true,
      odlaw: false,
      wenda: false,
      wizard: false,
      quantity: 1,
    },
  ]);
  const [avatarDatabase] = useState({
    waldo: waldoMini,
    odlaw: odlawMini,
    wenda: wendaMini,
    wizard: wizardMini,
  });

  const getImgLocation = (e) => {
    // nativeEvent acess JS property inside the React wrapper
    const x = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const y = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    const coords = { x, y };
    return coords;
  };

  const imageClick = (e) => {
    const newCoords = getImgLocation(e);
    setCoords(newCoords);
    handleClickLocation(newCoords);
    setShow(true);
  };

  const handleClickLocation = (coords) => {
    const { x, y } = coords;
    const updatedCoords = { left: x + "%", top: y + "%" };
    setClickLocation(updatedCoords);
  };

  useEffect(() => {
    if (!isGameOver) {
      // Firebase
      const colRef = collection(db, "coords");

      const coordList = [];

      const getCoordsFromFirestore = async (character, lvl) => {
        const docs = await getDocs(colRef);
        docs.forEach((doc) => {
          coordList.push({ ...doc.data() });
        });
        switch (character) {
          case "waldo":
            const waldoPosition = {
              x: coordList[0]["waldo"][lvl]["x"],
              y: coordList[0]["waldo"][lvl]["y"],
            };
            return waldoPosition;
          case "wenda":
            const wendaPosition = {
              x: coordList[0]["wenda"][lvl]["x"],
              y: coordList[0]["wenda"][lvl]["y"],
            };
            return wendaPosition;
          case "wizard":
            const wizardPosition = {
              x: coordList[0]["wizard"][lvl]["x"],
              y: coordList[0]["wizard"][lvl]["y"],
            };
            return wizardPosition;
          case "odlaw":
            const odlawPosition = {
              x: coordList[0]["odlaw"][lvl]["x"],
              y: coordList[0]["odlaw"][lvl]["y"],
            };
            return odlawPosition;
          default:
            const defaultPosition = {
              x: coordList[0]["default"][lvl]["x"],
              y: coordList[0]["default"][lvl]["y"],
            };
            console.log("default or char not found");
            return defaultPosition;
        }
      };

      const validateChosenCoords = async (chosenCharacter, lvl) => {
        // avoid unecessary processing in the first load
        if (chosenCharacter === "default") return;

        const serverCoords = await getCoordsFromFirestore(
          chosenCharacter,
          lvl - 1
        );

        const xPair = [coords["x"], serverCoords["x"]];
        const yPair = [coords["y"], serverCoords["y"]];

        // logic to search for coords nearby, since a character may occupy serveral coords
        const winConditionX =
          xPair[0] === xPair[1] ||
          xPair[0] + 1 === xPair[1] ||
          xPair[0] + 2 === xPair[1] ||
          xPair[0] - 1 === xPair[1] ||
          xPair[0] - 2 === xPair[1];

        const winConditionY =
          yPair[0] === yPair[1] ||
          yPair[0] + 1 === yPair[1] ||
          yPair[0] + 2 === yPair[1] ||
          yPair[0] + 3 === yPair[1] ||
          yPair[0] - 1 === yPair[1] ||
          yPair[0] - 2 === yPair[1] ||
          yPair[0] - 3 === yPair[1];

        console.log(
          "clicked: ",
          coords,
          "target: ",
          serverCoords,
          "conditions summary: ",
          "winconditionx: ",
          winConditionX,
          "winconditionY",
          winConditionY
        );

        if (winConditionX && winConditionY) {
          // avoids finding the same character
          if (foundCharacters.includes(chosenCharacter)) {
            console.log("alreayd found ", chosenCharacter);
            return;
          }

          alert(`you've found ${chosenCharacter}`);

          setFoundCharacters((foundCharacters) => [
            ...foundCharacters,
            chosenCharacter,
          ]);
        } else console.log("wincondition not met!");
      };

      // will run each time the useEffect runs
      validateChosenCoords(chosenCharacter, lvl);

      const checkGameOver = () => {
        if (foundCharacters.length === imgDatabase[lvl - 1]["quantity"]) {
          setIsGameOver(true);

          // sets final time
          const finalTime = time;
        }
      };

      checkGameOver();
    }

    // resets chosen char
    setChosenCharacter("default");
  }, [
    chosenCharacter,
    lvl,
    coords,
    foundCharacters,
    imgDatabase,
    isGameOver,
    time,
  ]);

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
        isGameOver={isGameOver}
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
                  imgDatabase={imgDatabase[item - 1]}
                  avatarDatabase={avatarDatabase}
                  setInHome={setInHome}
                  chosenCharacter={chosenCharacter}
                  setChosenCharacter={setChosenCharacter}
                  foundCharacters={foundCharacters}
                  setFoundCharacters={setFoundCharacters}
                  isGameOver={isGameOver}
                  setIsGameOver={setIsGameOver}
                  show={show}
                  setShow={setShow}
                  clickLocation={clickLocation}
                  imageClick={imageClick}
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
