import { Link } from "react-router-dom";

const Final = ({ showFinal, finalTime, handleInput, handleFinalSubmit }) => {
  return (
    <>
      {showFinal ? (
        <div className="endgameModal visible">
          <p>Congratulations!</p>
          <p>It took you {finalTime} seconds to find all the characters</p>
          <label htmlFor="userName" className="userName visible">
            Do you want to save your score?
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
