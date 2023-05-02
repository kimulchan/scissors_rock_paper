import { useContext, useEffect, useRef } from "react";
import Timer from "../components/common/timer";
import { flushSync } from "react-dom";

const useTimer = (callBack?: () => void, time: number = 3000) => {
  const { setIsShow, setTime } = useContext(Timer.Context);
  const timerRef = useRef<NodeJS.Timeout>();
  useEffect(() => {
    setTime(time);
  }, [time]);

  const on = () => {
    setIsShow(true);
    timerRef.current = setTimeout(() => {
      callBack?.();
      setIsShow(false);
      clearTimeout(timerRef.current);
    }, time);
  };

  const off = () => {
    flushSync(() => setIsShow(false));
    clearTimeout(timerRef.current);
  };

  return [on, off];
};

export default useTimer;
