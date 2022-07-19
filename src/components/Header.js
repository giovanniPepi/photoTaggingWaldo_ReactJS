import React from "react";
import { Link } from "react-router-dom";
import waldoHeader from "../img/waldoHeader.jpg";

const Header = ({ lvl }) => {
  return (
    <section className="header">
      <div className="headerLeaderboard">Leaderboard</div>
      <Link to="/">
        <div className="headerAvatarCont">
          <img src={waldoHeader} alt="Waldo" className="waldoHeaderImg" />
          <div className="headerTitle">
            <p className="red">Where's</p>
            <p className="blue">Waldo</p>
          </div>
        </div>
      </Link>
      <p className="headerLevel">Level: {lvl}</p>
    </section>
  );
};

export default Header;
