import uniqid from "uniqid";

const Highscores = ({ highscores }) => {
  return (
    <>
      <h2 className="highscoresTitle">Highscores</h2>
      <section className="highscoreContainer">
        {highscores.map((item) => {
          return item.map((subItem) => {
            return (
              <p key={uniqid()} className="highscoreItem">
                Level {subItem.lvl} - {subItem.userName} - {subItem.time}s
              </p>
            );
          });
        })}
      </section>
    </>
  );
};

export default Highscores;
