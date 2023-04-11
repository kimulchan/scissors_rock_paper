import styled from "styled-components";
import { withModal } from "../../hoc/withModal";
import { useEffect, useRef, useState } from "react";
import Typo from "../common/typo";
import { Flex } from "../common/flex";

interface CountDownModalProps {
  callback?: () => void;
}

const CountDownModal = ({ callback }: CountDownModalProps) => {
  const [count, setCount] = useState(3);

  useEffect(() => {
    const id = setInterval(() => {
      setCount((count) => count - 1);
    }, 1000);
    if (count === 0) {
      clearInterval(id);
      callback?.();
    }
    return () => clearInterval(id);
  }, [count]);

  return (
    <CountDownWrapper>
      <CountDownContainer
        fullHeight={true}
        fullWidth={true}
        justify="center"
        align="center"
      >
        <Typo.Heading1 color="black">{count}</Typo.Heading1>
      </CountDownContainer>
    </CountDownWrapper>
  );
};

const CountDownWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  top: 0;
  right: 0;
`;

const CountDownContainer = styled(Flex)`
  background-color: ${({ theme }) => theme.color.main};
  animation: ${({ theme }) => theme.animation.slideRightIn} 1s ease;
`;

export default withModal(CountDownModal);
