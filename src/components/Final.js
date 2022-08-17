const Final = ({
  showFinal,
  userName,
  setUserName,
  finalTime,
  showFinalMessage,
  handleInput,
}) => {
  return (
    <>
      {showFinal ? (
        <div className="endgameModal visible">
          <label htmlFor="userName" className="userName visible">
            Name:
          </label>
          <input
            onChange={handleInput}
            name="userName"
            id="userName"
            className="userName visible"
          ></input>
          <button className="endgameBtn" onClick={showFinalMessage}>
            Register score
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Final;
