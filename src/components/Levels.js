import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import DropdownMenu from "./DropdownMenu";
import { db } from "../firebase";

const Level = ({
  lvl,
  imgDatabase,
  avatarDatabase,
  inHome,
  setInHome,
  chosenCharacter,
  setChosenCharacter,
  foundCharacters,
  setFoundCharacters,
}) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const [clickLocation, setClickLocation] = useState({ left: "0%", top: "0%" });

  useEffect(() => {
    // handles show home
    setInHome(false);

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
            x: coordList[0]["odlaw"][lvl]["x"],
            y: coordList[0]["odlaw"][lvl]["y"],
          };
          console.log("default or char not found");
          return defaultPosition;
      }
    };

    const validateChosenCoords = async (chosenCharacter, lvl) => {
      const serverCoords = await getCoordsFromFirestore(
        chosenCharacter,
        lvl - 1
      );
      const xPair = [coords["x"], serverCoords["x"]];
      const yPair = [coords["y"], serverCoords["y"]];

      // console.log("clicked: ", coords, "target: ", serverCoords);

      // logic to search for coords nearby, since a character may occupy serveral coords
      if (
        xPair[0] === xPair[1] ||
        xPair[0] + 1 === xPair[1] ||
        xPair[0] + 2 === xPair[1]
      ) {
        if (
          yPair[0] === yPair[1] ||
          yPair[0] + 1 === yPair[1] ||
          yPair[0] + 2 === yPair[1] ||
          yPair[0] + 3 === yPair[1]
        ) {
          alert(`you've found ${chosenCharacter}`);

          setFoundCharacters((foundCharacters) => [
            ...foundCharacters,
            chosenCharacter,
          ]);
        }
      }
    };
    validateChosenCoords(chosenCharacter, lvl);
  }, [chosenCharacter, coords, lvl, setInHome]);

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

  return (
    <section className="waldoLvl">
      <img
        className="scenarioImg"
        src={imgDatabase["photo"]}
        alt="Waldo Scenario"
        onClick={imageClick}
      />
      <DropdownMenu
        show={show}
        setShow={setShow}
        lvl={lvl}
        imgDatabase={imgDatabase}
        avatarDatabase={avatarDatabase}
        clickLocation={clickLocation}
        setChosenCharacter={setChosenCharacter}
        chosenCharacter={chosenCharacter}
        foundCharacters={foundCharacters}
        setFoundCharacters={setFoundCharacters}
      />
    </section>
  );
};

export default Level;
