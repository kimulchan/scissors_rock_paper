import TimerBox from "./TimerBox";
import TimerContainer from "./TimerContainer";
import { TimerContext } from "./TimerContext";

type TimerType = typeof TimerBox & {
  Context: typeof TimerContext;
  Container: typeof TimerContainer;
};

const Timer = TimerBox as TimerType;

Timer.Container = TimerContainer;
Timer.Context = TimerContext;

export default Timer;
