import uniqid from "uniqid";

const Highscores = ({ highscoreList }) => {
  return (
    <>
      <h2 className="highscoresTitle">Highscores</h2>
      <section className="highscoreContainer">
        {highscoreList.map((item) => {
          return (
            <p key={uniqid()} className="highscoreItem">
              User {item.name} - level {item.level} - {item.time} s
            </p>
          );
        })}
      </section>
    </>
  );
};

export default Highscores;
