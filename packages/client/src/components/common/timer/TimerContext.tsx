import React, { Dispatch, SetStateAction } from "react";

export interface TimerValueType {
  setTime: (time: number) => void;
  setIsShow: (isShow: boolean) => void;
  refresh: () => void;
}

export const TimerContext = React.createContext<TimerValueType>({
  setIsShow: () => {},
  setTime: () => {},
  refresh: () => {},
});
