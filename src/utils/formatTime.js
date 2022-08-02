const formatTime = (time, setTime) => {
  const getSeconds = `0${Math.round(time % 60)}`.slice(-2);
  const minutes = `${Math.floor(time / 60)}`;
  const getMinutes = `0${minutes % 60}`.slice(-2);
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  return `${time} ${getHours}:${getMinutes}:${getSeconds}`;
};

export default formatTime;
