import React from "react";
import waldoHeader from "../img/waldoHeader.jpg";
const Header = ({ lvl }) => {
  return (
    <section className="header">
      <div>Leaderboard</div>
      <img src={waldoHeader} alt="Waldo" className="waldoHeaderImg" />
      <div className="headerTitle">Where's Waldo?</div>
      <p>Level: {lvl}</p>
    </section>
  );
};

export default Header;
