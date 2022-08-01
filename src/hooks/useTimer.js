import { useRef, useState } from "react";

const useTimer = (initivalVal = 0) => {
  const [timer, setTimer] = useState(initivalVal);
  // persist between resrenders
  const countRef = useRef(null);

  const start = () => {
    countRef.current = setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };

  const stop = () => {
    clearInterval(countRef.current);
  };

  const reset = () => {
    clearInterval(countRef.current);
    setTimer(0);
  };

  return [timer, start, stop, reset];
};

export default useTimer;
