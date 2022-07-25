import React, { useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";

const Level = ({ lvl, imgDatabase, avatarDatabase, inHome, setInHome }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);
  const [clickLocation, setClickLocation] = useState({ left: "0%", top: "0%" });

  useEffect(() => {
    setInHome(false);
  });

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
