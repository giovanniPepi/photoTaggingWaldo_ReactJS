import React from "react";
import { Link } from "react-router-dom";
import waldoHeader from "../img/waldoHeader.jpg";

const Header = ({
  lvl,
  setLvl,
  imgDatabase,
  avatarDatabase,
  inHome,
  foundCharacters,
}) => {
  return (
    <section className="header">
      {inHome ? (
        <>
          <Link to="/">
            <div className="headerAvatarCont">
              <img src={waldoHeader} alt="Waldo" className="waldoHeaderImg" />
              <div className="headerTitle">
                <p className="red">Where's</p>
                <p className="blue">Waldo</p>
              </div>
            </div>
          </Link>
        </>
      ) : null}

      {inHome === false ? (
        <>
          <div className="charactersPresent">
            {imgDatabase["waldo"] === true &&
            !foundCharacters.includes("waldo") ? (
              <img
                src={avatarDatabase["waldo"]}
                alt="waldo"
                className="avatar"
                id="waldoHeader"
              />
            ) : null}
            {imgDatabase["odlaw"] === true ? (
              <img
                src={avatarDatabase["odlaw"]}
                alt="odlaw"
                className="avatar"
                id="odlawHeader"
              />
            ) : null}
            {imgDatabase["wenda"] === true ? (
              <img
                src={avatarDatabase["wenda"]}
                alt="waldo"
                className="avatar"
                id="wendaHeader"
              />
            ) : null}
            {imgDatabase["wizard"] === true ? (
              <img
                src={avatarDatabase["wizard"]}
                alt="wizard"
                className="avatar"
                id="wizardHeader"
              />
            ) : null}
          </div>
          <p className="headerLevel">Level {lvl}</p>
          <Link to="/">
            <button className="gobackBtn">Go back</button>
          </Link>
        </>
      ) : null}
    </section>
  );
};

export default Header;
