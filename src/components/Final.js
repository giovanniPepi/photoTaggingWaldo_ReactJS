const Final = ({ showFinal, userName, setUserName, finalTime }) => {
  return (
    <>
      {showFinal
        ? console.log("show final modal activated", finalTime, "seconds")
        : null}
      <div className="endgameModal">
        <label htmlFor="userName">Enter your name: </label>
        <input name="userName"></input>
        <button>Ok</button>
      </div>
    </>
  );
};

export default Final;
