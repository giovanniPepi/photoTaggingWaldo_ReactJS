import { Link } from "react-router-dom";

const Final = ({
  showFinal,
  userName,
  setUserName,
  finalTime,
  showFinalMessage,
  handleInput,
  handleFinalSubmit,
  foundCharacters,
}) => {
  return (
    <>
      {showFinal ? (
        <div className="endgameModal visible">
          <p>Congratulations!</p>
          <p>It took you {finalTime} seconds to find all the characters</p>
          <label htmlFor="userName" className="userName visible">
            Name:
          </label>
          <input
            onChange={handleInput}
            name="userName"
            id="userName"
            className="userName visible"
          ></input>
          <Link to="/" onClick={handleFinalSubmit}>
            <button className="endgameBtn">Register score</button>
          </Link>
        </div>
      ) : null}
    </>
  );
};

export default Final;
