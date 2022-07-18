import React from "react";
import { Link } from "react-router-dom";
import waldoHeader from "../img/waldoHeader.jpg";
const Header = ({ lvl }) => {
  return (
    <section className="header">
      <div>Leaderboard</div>
      <Link to="/">
        <img src={waldoHeader} alt="Waldo" className="waldoHeaderImg" />
      </Link>
      <div className="headerTitle">Where's Waldo?</div>
      <p>Level: {lvl}</p>
    </section>
  );
};

export default Header;
