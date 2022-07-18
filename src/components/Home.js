import React, { useState } from "react";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import Level from "./Levels";

const Home = ({ lvl, setLvl, possibleLvls }) => {
  const handleLevel = (n) => {
    setLvl(n);
  };

  return (
    <main className="home">
      <section className="levelGrid">
        <p>Select level:</p>
        {possibleLvls.map((item) => {
          return (
            <Link
              key={uniqid()}
              onClick={() => handleLevel(item)}
              to={`/level/${item}`}
              element={<Level lvl={item} setLvl={setLvl} />}
            >
              Level {item}
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
