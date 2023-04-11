import { PropsWithChildren } from "react";
import styled from "styled-components";
import Typo from ".";
import { camelToPascalCase } from "../../../utils/camelToPascalCase";

interface MarqueeProps {
  direction: "left" | "right";
  time: string;
}

const Marquee = ({
  children,
  direction = "right",
  time = "60000",
}: PropsWithChildren<Partial<MarqueeProps>>) => {
  return (
    <MarqueeContainer>
      <MarqueeLeftWrapper direction={direction} time={time}>
        <Typo.Heading2>{children}</Typo.Heading2>
      </MarqueeLeftWrapper>
      <MarqueeRightWrapper direction={direction} time={time}>
        <Typo.Heading2>{children}</Typo.Heading2>
      </MarqueeRightWrapper>
    </MarqueeContainer>
  );
};

const MarqueeContainer = styled.div`
  width: 100%;
  height: 86px;
  overflow: hidden;
  display: flex;
  white-space: nowrap;
  z-index: -1;
  position: relative;
`;

const MarqueeLeftWrapper = styled.div<MarqueeProps>`
  position: absolute;
  animation: ${({ theme, direction }) =>
      theme.animation[
        `slide${camelToPascalCase(direction)}${
          direction === "right" ? "Out" : "In"
        }`
      ]}
    ${({ time }) => time}ms linear infinite;
`;

const MarqueeCenterWrapper = styled.div``;

const MarqueeRightWrapper = styled.div<MarqueeProps>`
  position: absolute;
  animation: ${({ theme, direction }) =>
      theme.animation[
        `slide${camelToPascalCase(direction)}${
          direction === "right" ? "In" : "Out"
        }`
      ]}
    ${({ time }) => time}ms linear infinite;
`;

export default Marquee;
