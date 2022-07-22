import React, { useEffect } from "react";

const DropdownMenu = ({
  show,
  imgDatabase,
  avatarDatabase,
  lvl,
  clickLocation,
}) => {
  return (
    <>
      {show ? (
        <div className="dropdownMenu visible" style={clickLocation}>
          {imgDatabase.waldo && (
            <div className="option">
              <img
                src={avatarDatabase.waldo}
                alt="waldo"
                className="avatarMini"
              />
              Waldo
            </div>
          )}
          {imgDatabase.odlaw && (
            <div className="option">
              <img
                src={avatarDatabase.odlaw}
                alt="odlaw"
                className="avatarMini"
              />
              Odlaw
            </div>
          )}
          {imgDatabase.wenda && (
            <div className="option">
              <img
                src={avatarDatabase.wenda}
                alt="wenda"
                className="avatarMini"
              />
              Wenda
            </div>
          )}
          {imgDatabase.wizard && (
            <div className="option">
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
