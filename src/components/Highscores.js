import uniqid from "uniqid";

const Highscores = ({ highscoreListLevelOne }) => {
  return (
    <>
      <h2 className="highscoresTitle">Highscores</h2>
      <section className="highscoreContainer">
        {highscoreListLevelOne.map((item) => {
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
