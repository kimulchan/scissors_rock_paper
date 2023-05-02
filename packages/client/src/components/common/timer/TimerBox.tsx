import { useEffect } from "react";
import styled from "styled-components";

interface TimerProps {
  time: number;
}

const TimerBox = ({ time }: TimerProps) => {
  return (
    <TimerAbsoluteWrapper>
      <TimerRelativeWrapper>
        <TimerBar time={time} />
      </TimerRelativeWrapper>
    </TimerAbsoluteWrapper>
  );
};

const TimerAbsoluteWrapper = styled.div`
  width: 100%;
  height: 8px;
  top: 0;
  position: absolute;
`;

const TimerRelativeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  overflow: hidden;
  top: 0;
`;
const TimerBar = styled.div<{ time: number }>`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.color.main};
  animation: ${({ theme }) => theme.animation.slideLeftIn}
    ${({ time }) => time}ms linear;
`;

export default TimerBox;
