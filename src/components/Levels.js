import React, { useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";

const Level = ({ lvl, imgDatabase, avatarDatabase, inHome, setInHome }) => {
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [show, setShow] = useState(false);

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
    const coords = getImgLocation(e);
    console.log(coords);
    setCoords(coords);
    setShow(true);
  };

  return (
    <section className="waldoLvl">
      <img
        className="scenarioImg"
        src={imgDatabase["photo"]}
        alt="Waldo Scenario"
        onClick={imageClick}
        onMouseLeave={() => setShow(false)}
      />
      <DropdownMenu
        show={show}
        imgDatabase={imgDatabase}
        avatarDatabase={avatarDatabase}
      />
    </section>
  );
};

export default Level;
