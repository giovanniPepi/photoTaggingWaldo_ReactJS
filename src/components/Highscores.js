import { collection, getDocs } from "firebase/firestore";
import { useEffect } from "react";
import uniqid from "uniqid";
import { db } from "../firebase";

const Highscores = ({ highscores, setHighscores }) => {
  useEffect(() => {
    //highscores
    const highscores = [];

    // loops through each level
    const getHighscoresFromFirestore = async () => {
      console.log("Firestore highscore acessed");
      for (let i = 1; i < 7; i++) {
        const highscoreMock = [];
        const docsHighscore = await getDocs(collection(db, `${i}`));
        docsHighscore.forEach((doc) => {
          highscoreMock.push(doc.data());
        });

        highscores.push(highscoreMock);
      }
      setHighscores(highscores);
    };

    getHighscoresFromFirestore();
  }, [setHighscores]);
  return (
    <>
      <section className="highscoreContainer">
        <h2 className="highscoresTitle">Highscores</h2>
        <table>
          <thead>
            <tr>
              <th>Level</th>
              <th>Name</th>
              <th>Time</th>
            </tr>
          </thead>

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
                  <tr key={uniqid()} className="highscoreRow">
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
