import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import uniqid from "uniqid";

const Highscores = ({ highscoreList }) => {
  return (
    <>
      <h2>Highscores</h2>
      <div>
        {highscoreList.map((item) => {
          return (
            <p key={uniqid()}>
              {item.name} - {item.time} seconds
            </p>
          );
        })}
      </div>
    </>
  );
};

export default Highscores;
