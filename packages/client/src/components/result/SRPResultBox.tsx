import styled, { DefaultTheme } from "styled-components";
import { GameResultType, SRPType } from "@packages/types/common";
import Typo from "../common/typo";
import { Flex } from "../common/flex";
import { SRPIconSelector } from "../../constant/SRP";
import { playSRP } from "../../utils/playSRP";
import { ResultToKor } from "../../constant/Result";

interface ResultContainerProps {
  mySRP: SRPType;
  opponentSRP: SRPType;
}

const ResultContainer = ({ mySRP, opponentSRP }: ResultContainerProps) => {
  return (
    <AnimationContainer dir="column" align="center" gap={40} fullWidth={true}>
      <Typo.Heading2>{ResultToKor[playSRP(mySRP, opponentSRP)]}</Typo.Heading2>
      <Flex justify="space-between" fullWidth={true}>
        <SRPResultBox isMine={false} srp={opponentSRP}></SRPResultBox>
        <SRPResultBox isMine={true} srp={mySRP}></SRPResultBox>
      </Flex>
    </AnimationContainer>
  );
};

const SRPResultBox = ({ isMine, srp }: { srp: SRPType; isMine: boolean }) => {
  return (
    <Flex dir="column" gap={30} align="center">
      <Typo.Heading5 color={isMine ? "main" : "white"}>
        {isMine ? "나" : "상대방"}
      </Typo.Heading5>
      <Typo.Heading2>{SRPIconSelector[srp]}</Typo.Heading2>
    </Flex>
  );
};

const AnimationContainer = styled(Flex)`
  max-width: 600px;
  animation: ${({ theme }) => theme.animation.fadeIn} 0.7s linear forwards;
`;

export default ResultContainer;
