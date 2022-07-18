import bg1 from "../img/waldo_1.jpg";
import bg2 from "../img/waldo_level-2.jpg";
import bg3 from "../img/waldo_level-3.jpg";
import bg4 from "../img/waldo_level-4.jpg";
import bg5 from "../img/waldo_level-5.jpg";
import bg6 from "../img/waldo_level-6.jpg";

import React, { useEffect, useState } from "react";

const Level = ({ lvl, setLvl }) => {
  const [bgImg, setbgImg] = useState({
    1: bg1,
    2: bg2,
    3: bg3,
    4: bg4,
    5: bg5,
    6: bg6,
  });

  // const setLevel = () => {};
  console.log("level loaded! : ", lvl);

  return (
    <section className="waldoLevel">
      level loaded: <h1>{lvl}</h1>
      <img src={bgImg[lvl]} alt="Waldo Scenario" />
    </section>
  );
};

export default Level;
