import React, { useEffect, useState } from "react";
import uniqid from "uniqid";
import { Link } from "react-router-dom";
import Header from "./Header";

import Level from "./Levels";
const Home = ({
  lvl,
  setLvl,
  possibleLvls,
  imgDatabase,
  avatarDatabase,
  inHome,
  setInHome,
}) => {
  useEffect(() => {
    setInHome(true);
  });

  return (
    <main className="home">
      <section className="levelGrid">
        {possibleLvls.map((item) => {
          return (
            <Link
              key={uniqid()}
              onClick={() => setLvl(item - 1)}
              to={`/level/${item}`}
              element={<Level id={uniqid()} lvl={item} setLvl={setLvl} />}
            >
              <div className="lvlContainer">
                <div className="infoLvl">
                  <p>Level {item}</p>
                  <div className="avatarsLvl">
                    {imgDatabase[item - 1]["waldo"] === true ? (
                      <img
                        src={avatarDatabase["waldo"]}
                        alt="waldo"
                        className="avatarLevel"
                      />
                    ) : null}
                    {imgDatabase[item - 1]["odlaw"] === true ? (
                      <img
                        src={avatarDatabase["odlaw"]}
                        alt="odlaw"
                        className="avatarLevel"
                      />
                    ) : null}
                    {imgDatabase[item - 1]["wenda"] === true ? (
                      <img
                        src={avatarDatabase["wenda"]}
                        alt="wenda"
                        className="avatarLevel"
                      />
                    ) : null}
                    {imgDatabase[item - 1]["wizard"] === true ? (
                      <img
                        src={avatarDatabase["wizard"]}
                        alt="wizard"
                        className="avatarLevel"
                      />
                    ) : null}
                  </div>
                </div>
                <img
                  src={imgDatabase[item - 1][item]}
                  alt={`level ${item}`}
                  className="lvlImgGrid"
                />
              </div>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
