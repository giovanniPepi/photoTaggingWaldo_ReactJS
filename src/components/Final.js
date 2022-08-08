const Final = ({ showFinal, userName, setUserName, finalTime }) => {
  return (
    <>
      {showFinal ? (
        <div className="endgameModal visible">
          <label htmlFor="userName" className="userName visible">
            Name:
          </label>
          <input
            name="userName"
            id="userName"
            className="userName visible"
          ></input>
          <button className="endgameBtn">Register score</button>
        </div>
      ) : null}
    </>
  );
};

export default Final;
