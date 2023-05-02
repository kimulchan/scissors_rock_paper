import React, { PropsWithChildren, useEffect, useState } from "react";
import Timer from "./TimerBox";
import { TimerContext } from "./TimerContext";

const TimerContainer = ({ children }: PropsWithChildren) => {
  const [isShow, setIsShow] = useState(false);
  const [time, setTime] = useState(1000);
  const [refreshNum, setRefreshNum] = useState(0);

  const refresh = () => {
    setRefreshNum((num) => num + 1);
  };
  return (
    <TimerContext.Provider value={{ setTime, setIsShow, refresh }}>
      <TimerContext.Consumer>
        {() => (
          <>
            {isShow && <Timer time={time}></Timer>}
            {children}
          </>
        )}
      </TimerContext.Consumer>
    </TimerContext.Provider>
  );
};

export default TimerContainer;
