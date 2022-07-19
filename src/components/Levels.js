import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Level = ({ lvl, setLvl, imgDatabase, avatarDatabase }) => {
  console.log(lvl, imgDatabase, avatarDatabase);

  return (
    <section className="waldoLevel">
      <div className="levelInfo">
        <div className="levelLoaded">
          level loaded: <p className="levelLoadedRed">{lvl}</p>
        </div>
        {imgDatabase["waldo"] === true ? (
          <img src={avatarDatabase["waldo"]} alt="waldo" className="avatar" />
        ) : null}
        {imgDatabase["oddlaw"] === true ? (
          <img src={avatarDatabase["odlaw"]} alt="odlaw" className="avatar" />
        ) : null}
        {imgDatabase["wenda"] === true ? (
          <img src={avatarDatabase["wenda"]} alt="waldo" className="avatar" />
        ) : null}
        {imgDatabase["wizard"] === true ? (
          <img src={avatarDatabase["waldo"]} alt="wizard" className="avatar" />
        ) : null}
        <Link to="/">Go back</Link>
      </div>
      <img className="scenaroImg" src={imgDatabase[lvl]} alt="Waldo Scenario" />
    </section>
  );
};

export default Level;
