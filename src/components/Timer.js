import { useEffect } from "react";
import formatTime from "../utils/formatTime";

const Timer = ({ inHome, time, setTime, isGameOver }) => {
  useEffect(() => {
    if (!isGameOver) {
      let interval;
      if (!inHome) {
        interval = setInterval(() => {
          setTime((time) => time + 1);
        }, 1000);
      } else {
        clearInterval(interval);
        setTime(0);
      }

      // avoids absurd times
      if (time > 86400) setTime(0);

      // setInterval cleared when component unmounts
      return () => clearInterval(interval);
    }
  });

  return <>{formatTime(time, setTime)}</>;
};
export default Timer;
