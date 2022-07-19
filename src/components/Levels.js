import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Level = ({ lvl, setLvl, imgDatabase, avatarDatabase }) => {
  return (
    <section className="waldoLvl">
      <img
        className="scenarioImg"
        src={imgDatabase[lvl]}
        alt="Waldo Scenario"
      />
    </section>
  );
};

export default Level;
