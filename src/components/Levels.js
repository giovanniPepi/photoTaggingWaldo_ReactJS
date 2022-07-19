import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Level = ({
  lvl,
  setLvl,
  imgDatabase,
  avatarDatabase,
  inHome,
  setInHome,
}) => {
  useEffect(() => {
    setInHome(false);
  });
  return (
    <section className="waldoLvl">
      <img
        className="scenarioImg"
        src={imgDatabase["photo"]}
        alt="Waldo Scenario"
      />
    </section>
  );
};

export default Level;
