import uniqid from "uniqid";

const Highscores = ({ highscores }) => {
  return (
    <>
      <h2 className="highscoresTitle">Highscores</h2>
      <section className="highscoreContainer">
        <h3>Level 01: </h3>
        {highscores.map((item) => {
          return (
            <p key={uniqid()} className="highscoreItem">
              User {item.userName} - {item.time} s
            </p>
          );
        })}
      </section>
    </>
  );
};

export default Highscores;
