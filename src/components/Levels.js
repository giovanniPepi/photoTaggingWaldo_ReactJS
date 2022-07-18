import React, { useEffect, useState } from "react";

const Level = ({ lvl, setLvl, imgDatabase }) => {
  console.log(lvl, imgDatabase);

  return (
    <section className="waldoLevel">
      level loaded: <h1>{lvl}</h1>
      {imgDatabase["waldo"] === true ? <div>has waldo</div> : null}
      {imgDatabase["oddlaw"] === true ? <div>has oddlaw</div> : null}
      {imgDatabase["wenda"] === true ? <div>has oddlaw</div> : null}
      {imgDatabase["wizard"] === true ? <div>has wizard</div> : null}
      <img className="scenaroImg" src={imgDatabase[lvl]} alt="Waldo Scenario" />
    </section>
  );
};

export default Level;
