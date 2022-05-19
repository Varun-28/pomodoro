import { useState, useRef, useEffect } from "react";

function usePomodoroFunctions(minutes) {
  const clockInitalState = {
    isStarted: false,
    isPaused: false,
  };
  const [seconds, setSeconds] = useState(0);
  const [clockState, setClockState] = useState(clockInitalState);
  const [pomoMode, setPomoMode] = useState("focus");
  const intervalTime = useRef(null);
  const secondsTime = useRef(0);
  const time = Number(minutes);

  const clockHandler = (key, value) => {
    setClockState((val) => ({ ...val, [key]: value }));
  };

  const switchMode = () => {
    if (intervalTime.current) clearInterval(intervalTime.current);

    setPomoMode((prev) => (prev === "focus" ? "break" : "focus"));

    if (pomoMode === "focus") {
      setSeconds(5 * 60);
      secondsTime.current = 5 * 60;
    } else {
      setSeconds(time * 60);
      secondsTime.current = time * 60;
    }

    clockHandler("isStarted", false);
  };

  const handleStart = () => {
    if (intervalTime.current) clearInterval(intervalTime.current);
    clockHandler("isStarted", true);

    intervalTime.current = setInterval(() => {
      if (secondsTime.current === 0) {
        clearInterval(intervalTime);
        switchMode();
      } else {
        secondsTime.current--;
        setSeconds(secondsTime.current);
      }
    }, 1000);
  };

  const pauseHandler = () => {
    if (clockState.isPaused) {
      handleStart();
      clockHandler("isPaused", false);
    } else {
      clearInterval(intervalTime.current);
      clockHandler("isPaused", true);
    }
  };

  const restartHandler = () => {
    setSeconds(time * 60);
    secondsTime.current = time * 60;
    clearInterval(intervalTime.current);
    setClockState(clockInitalState);
    setPomoMode("focus");
  };

  useEffect(() => {
    setSeconds(time * 60);
    secondsTime.current = time * 60;
  }, [time]);

  const totalSeconds = pomoMode === "focus" ? time * 60 : 5 * 60;
  const secondsLeft = seconds % 60;
  const minutesLeft = Math.floor(seconds / 60);
  const percentValue = (seconds / totalSeconds) * 100;

  return {
    clockState,
    secondsLeft,
    minutesLeft,
    percentValue,
    pauseHandler,
    restartHandler,
    handleStart,
  };
}

export { usePomodoroFunctions };
