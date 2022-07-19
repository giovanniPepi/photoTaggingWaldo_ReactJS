import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import waldoHeader from "../img/waldoHeader.jpg";

const Header = ({ lvl, setLvl, imgDatabase, avatarDatabase, inHome }) => {
  console.log(imgDatabase);
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
            {imgDatabase["waldo"] === true ? (
              <img
                src={avatarDatabase["waldo"]}
                alt="waldo"
                className="avatar"
              />
            ) : null}
            {imgDatabase["odlaw"] === true ? (
              <img
                src={avatarDatabase["odlaw"]}
                alt="odlaw"
                className="avatar"
              />
            ) : null}
            {imgDatabase["wenda"] === true ? (
              <img
                src={avatarDatabase["wenda"]}
                alt="waldo"
                className="avatar"
              />
            ) : null}
            {imgDatabase["wizard"] === true ? (
              <img
                src={avatarDatabase["wizard"]}
                alt="wizard"
                className="avatar"
              />
            ) : null}
          </div>
          <p className="headerLevel">Level {lvl}</p>
          <Link to="/">
            <button onClick={() => setLvl(0)}>Go back</button>
          </Link>
        </>
      ) : null}
    </section>
  );
};

export default Header;
