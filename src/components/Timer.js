import { useEffect } from "react";

const Timer = ({ inHome, time, setTime }) => {
  useEffect(() => {
    let interval;
    if (!inHome) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  });
  console.log(time);
  return <>{time}</>;
};
export default Timer;
