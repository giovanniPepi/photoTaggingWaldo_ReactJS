import React, { useEffect } from "react";

import DropdownMenu from "./DropdownMenu";
import Final from "./Final";

const Level = ({
  imgDatabase,
  avatarDatabase,
  setInHome,
  setChosenCharacter,
  isGameOver,
  show,
  clickLocation,
  imageClick,
  showFinal,
  finalTime,
  handleInput,
  handleFinalSubmit,
  showLoading,
  showCheck,
  showWrong,
  setShowWrong,
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
        imgDatabase={imgDatabase}
        avatarDatabase={avatarDatabase}
        clickLocation={clickLocation}
        setChosenCharacter={setChosenCharacter}
        isGameOver={isGameOver}
        showLoading={showLoading}
        showCheck={showCheck}
        showWrong={showWrong}
        setShowWrong={setShowWrong}
      />
      {showFinal ? (
        <Final
          showFinal={showFinal}
          finalTime={finalTime}
          handleInput={handleInput}
          handleFinalSubmit={handleFinalSubmit}
          found
        />
      ) : null}
    </section>
  );
};

export default Level;
