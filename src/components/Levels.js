import React, { useEffect } from "react";

import DropdownMenu from "./DropdownMenu";
import Final from "./Final";

const Level = ({
  lvl,
  imgDatabase,
  avatarDatabase,
  setInHome,
  setChosenCharacter,
  foundCharacters,
  setFoundCharacters,
  show,
  setShow,
  clickLocation,
  imageClick,
  isGameOver,
  showFinal,
  userName,
  setUserName,
  finalTime,
  handleInput,
  showFinalMessage,
  handleFinalSubmit,
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
        setFoundCharacters={setFoundCharacters}
        isGameOver={isGameOver}
      />
      {showFinal ? (
        <Final
          showFinal={showFinal}
          userName={userName}
          setUserName={setUserName}
          finalTime={finalTime}
          handleInput={handleInput}
          showFinalMessage={showFinalMessage}
          handleFinalSubmit={handleFinalSubmit}
          found
        />
      ) : null}
    </section>
  );
};

export default Level;
