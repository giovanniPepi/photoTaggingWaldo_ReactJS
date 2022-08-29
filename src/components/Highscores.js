import uniqid from "uniqid";

const Highscores = ({ highscores }) => {
  const compareTime = (a, b) => {
    console.log("compared");
    return a.time > b.time ? b : a;
  };
  return (
    <>
      <h2 className="highscoresTitle">Highscores</h2>
      <section className="highscoreContainer">
        {/* Each array item is a level*/}
        {highscores.map((item) => {
          /* each subItem is a player object   */

          item.sort((a, b) => {
            return a.time - b.time;
          });
          console.log(item);
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
