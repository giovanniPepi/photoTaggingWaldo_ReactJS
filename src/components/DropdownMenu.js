import React from "react";
import Check from "./Check";
import Loading from "./Loading";
import Wrong from "./Wrong";

const DropdownMenu = ({
  show,
  imgDatabase,
  avatarDatabase,
  clickLocation,
  setChosenCharacter,
  isGameOver,
  showLoading,
  showCheck,
  showWrong,
}) => {
  const handleCharacterChoice = async (character) => {
    // hides menu
    //  setShow(false);
    setChosenCharacter(character);
  };

  return (
    <>
      {show && !isGameOver ? (
        <div className="dropdownMenu visible" style={clickLocation}>
          <div className="communicationFeedback">
            {showLoading ? <Loading /> : null}
            {showWrong ? <Wrong /> : null}
            {showCheck ? <Check /> : null}
          </div>
          {imgDatabase.waldo && (
            <div
              className="option"
              onClick={() => handleCharacterChoice("waldo")}
            >
              <img
                src={avatarDatabase.waldo}
                alt="waldo"
                className="avatarMini"
              />
              Waldo
            </div>
          )}
          {imgDatabase.odlaw && (
            <div
              className="option"
              onClick={() => handleCharacterChoice("odlaw")}
            >
              <img
                src={avatarDatabase.odlaw}
                alt="odlaw"
                className="avatarMini"
              />
              Odlaw
            </div>
          )}
          {imgDatabase.wenda && (
            <div
              className="option"
              onClick={() => handleCharacterChoice("wenda")}
            >
              <img
                src={avatarDatabase.wenda}
                alt="wenda"
                className="avatarMini"
              />
              Wenda
            </div>
          )}
          {imgDatabase.wizard && (
            <div
              className="option"
              onClick={() => handleCharacterChoice("wizard")}
            >
              <img
                src={avatarDatabase.wizard}
                alt="wizard"
                className="avatarMini"
              />
              Wizard
            </div>
          )}
        </div>
      ) : (
        <div className="dropdownMenu hidden">
          <div className="option">Waldo</div>
          <div className="option">Odlaw</div>
          <div className="option">Wenda</div>
          <div className="option">Wizard</div>
        </div>
      )}
    </>
  );
};

export default DropdownMenu;
