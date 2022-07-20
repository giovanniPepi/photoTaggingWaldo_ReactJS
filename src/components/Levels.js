import React, { useEffect, useRef, useState } from "react";
import DropdownMenu from "./DropdownMenu";

import { Link } from "react-router-dom";

const Level = ({
  lvl,
  setLvl,
  imgDatabase,
  avatarDatabase,
  inHome,
  setInHome,
}) => {
  useEffect(() => {
    setInHome(false);
  });

  const [coords, setCoords] = useState();

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
  };

  return (
    <section className="waldoLvl">
      <img
        className="scenarioImg"
        src={imgDatabase["photo"]}
        alt="Waldo Scenario"
        onClick={imageClick}
      />
    </section>
  );
};

export default Level;
