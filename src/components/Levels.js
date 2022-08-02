import React, { useEffect } from "react";

import DropdownMenu from "./DropdownMenu";

const Level = ({
  lvl,
  imgDatabase,
  avatarDatabase,
  setInHome,
  chosenCharacter,
  setChosenCharacter,
  foundCharacters,
  setFoundCharacters,
  isGameOver,
  setIsGameOver,
  show,
  setShow,
  clickLocation,
  imageClick,
}) => {
  useEffect(() => {
    // handles show home
    setInHome(false);
  });

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
