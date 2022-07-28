import React, { useEffect, useRef, useState } from "react";
import { collection, getDocs, setDoc, doc, getDoc } from "firebase/firestore";
import DropdownMenu from "./DropdownMenu";
import { db } from "../firebase";

const Level = ({ lvl, imgDatabase, avatarDatabase, inHome, setInHome }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const [clickLocation, setClickLocation] = useState({ left: "0%", top: "0%" });

  useEffect(() => {
    setInHome(false);
  });

  // Firebase
  const colRef = collection(db, "coords");

  const coordList = [];

  const getCoordsFromFirestore = async (character) => {
    const docs = await getDocs(colRef);
    docs.forEach((doc) => {
      coordList.push({ ...doc.data() });
    });
    switch (character) {
      case "waldo":
        const waldoPosition = {
          x: coordList[0][character][0]["_lat"],
          y: coordList[0][character][0]["_long"],
        };
        console.log("waldo", waldoPosition);
        break;
      case "wenda":
        const wendaPosition = {
          x: coordList[0][character][0]["_lat"],
          y: coordList[0][character][0]["_long"],
        };
        console.log("wenda", wendaPosition);
        break;
      case "wizard":
        const wizardPosition = {
          x: coordList[0][character][0]["_lat"],
          y: coordList[0][character][0]["_long"],
        };
        console.log("wizard", wizardPosition);
        break;
      case "odlaw":
        const odlawPosition = {
          x: coordList[0][character][0]["_lat"],
          y: coordList[0][character][0]["_long"],
        };
        console.log("odlaw", odlawPosition);
        break;
      default:
        console.log("error, no character position found");
    }
  };

  getCoordsFromFirestore("waldo");
  getCoordsFromFirestore("wenda");
  getCoordsFromFirestore("wizard");
  getCoordsFromFirestore("odlaw");

  const getImgLocation = (e) => {
    // nativeEvent acess JS property inside the React wrapper
    const xCoord = Math.round(
      (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
    );
    const yCoord = Math.round(
      (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
    );
    const coords = { xCoord, yCoord };
    return coords;
  };

  const imageClick = (e) => {
    const newCoords = getImgLocation(e);
    setCoords(newCoords);
    handleClickLocation(newCoords);
    setShow(true);
  };

  const handleClickLocation = (coords) => {
    const { xCoord, yCoord } = coords;
    const updatedCoords = { left: xCoord + "%", top: yCoord + "%" };
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
        imgDatabase={imgDatabase}
        avatarDatabase={avatarDatabase}
        clickLocation={clickLocation}
        coords={coords}
      />
    </section>
  );
};

export default Level;
