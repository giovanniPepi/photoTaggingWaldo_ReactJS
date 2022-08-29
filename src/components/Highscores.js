import uniqid from "uniqid";

const Highscores = ({ highscores }) => {
  return (
    <>
      <h2 className="highscoresTitle">Highscores</h2>
      <section className="highscoreContainer">
        <table>
          <th>Level</th>
          <th>Name</th>
          <th>Time</th>
          <tbody>
            {/* Each array item is a level*/}
            {highscores.map((item) => {
              /* each subItem is a player object   */
              // sorts the lowest time
              item.sort((a, b) => {
                return a.time - b.time;
              });
              return item.map((subItem) => {
                return (
                  <tr>
                    <td key={uniqid()} className="highscoreItem">
                      {subItem.lvl}
                    </td>
                    <td key={uniqid()} className="highscoreItem">
                      {subItem.userName}
                    </td>
                    <td key={uniqid()} className="highscoreItem">
                      {subItem.time}s
                    </td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </section>
    </>
  );
};

export default Highscores;
