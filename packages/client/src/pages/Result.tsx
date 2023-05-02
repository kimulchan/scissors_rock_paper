import styled from "styled-components";
import Button from "../components/common/button";
import { Flex } from "../components/common/flex";
import Template from "../components/common/template";
import Typo from "../components/common/typo";
import ResultContainer from "../components/result/SRPResultBox";
import { useNavigate, useParams } from "react-router-dom";
import CountDownModal from "../components/modal/CountDownModal";
import { useState } from "react";
import useQueryString from "../hooks/useQueryString";
import { SRPType } from "../../../types";

const Result = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { me, other } = useQueryString<{ me: SRPType; other: SRPType }>();
  const { roomId } = useParams<{ roomId: string }>();
  return (
    <>
      {isOpen && (
        <CountDownModal callback={() => navigate(`/battle/${roomId}`)} />
      )}
      <Template justify="center" align="center">
        <ResultContainer mySRP={me} opponentSRP={other}></ResultContainer>
      </Template>
      <FadeInTemplate justify="flex-end" gap={80}>
        <Flex dir="column" gap={8} align="center" justify="flex-end">
          <Typo.Body1 color="main">상대방이 재결투를 요청했습니다</Typo.Body1>
          <Flex gap={8} fullWidth>
            <Button fill="bdDefault" onClick={() => navigate("/")}>
              돌아가기
            </Button>
            <Button fill="bdMain" onClick={() => setIsOpen(true)}>
              다시하기
            </Button>
          </Flex>
          <Typo.Body1 color="white">떨어져도 튀는 공처럼...</Typo.Body1>
        </Flex>
      </FadeInTemplate>
    </>
  );
};

const FadeInTemplate = styled(Template)`
  opacity: 0;
  animation: ${({ theme }) => theme.animation.fadeIn} 1s linear 1s forwards;
`;

export default Result;
