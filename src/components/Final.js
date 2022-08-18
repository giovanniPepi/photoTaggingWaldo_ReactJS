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
          <button className="endgameBtn" onClick={handleFinalSubmit}>
            Register score
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Final;
