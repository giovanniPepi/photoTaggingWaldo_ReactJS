import React, { useState } from "react";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import Level from "./Levels";

const Home = ({ lvl, setLvl }) => {
  const handleLevel = (n) => {
    setLvl(n);
  };

  return (
    <main className="home">
      <section className="levelGrid">
        <p>Select level:</p>
        <Link
          key={uniqid()}
          onClick={() => handleLevel(1)}
          to={`/level/${1}`}
          element={<Level lvl={1} setLvl={setLvl} />}
        >
          Level 1
        </Link>
        <Link
          key={uniqid()}
          onClick={() => handleLevel(2)}
          to={`/level/${2}`}
          element={<Level lvl={2} setLvl={setLvl} />}
        >
          Level 2
        </Link>
        <Link
          key={uniqid()}
          onClick={() => handleLevel(3)}
          to={`/level/${3}`}
          element={<Level lvl={3} setLvl={setLvl} />}
        >
          Level 3
        </Link>
        <Link
          key={uniqid()}
          onClick={() => handleLevel(4)}
          to={`/level/${4}`}
          element={<Level lvl={4} setLvl={setLvl} />}
        >
          Level 4
        </Link>
        <Link
          key={uniqid()}
          onClick={() => handleLevel(5)}
          to={`/level/${5}`}
          element={<Level lvl={5} setLvl={setLvl} />}
        >
          Level 5
        </Link>
        <Link
          key={uniqid()}
          onClick={() => handleLevel(6)}
          to={`/level/${6}`}
          element={<Level lvl={6} setLvl={setLvl} />}
        >
          Level 6
        </Link>
      </section>
    </main>
  );
};

export default Home;
