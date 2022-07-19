import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Level = ({ lvl, setLvl, imgDatabase }) => {
  console.log(lvl, imgDatabase);

  return (
    <section className="waldoLevel">
      <p className="levelLoaded">
        level loaded: <h1 className="levelLoadedRed">{lvl}</h1>{" "}
      </p>
      <Link to="/">Go back</Link>
      {imgDatabase["waldo"] === true ? <div>has waldo</div> : null}
      {imgDatabase["oddlaw"] === true ? <div>has oddlaw</div> : null}
      {imgDatabase["wenda"] === true ? <div>has oddlaw</div> : null}
      {imgDatabase["wizard"] === true ? <div>has wizard</div> : null}
      <img className="scenaroImg" src={imgDatabase[lvl]} alt="Waldo Scenario" />
    </section>
  );
};

export default Level;
