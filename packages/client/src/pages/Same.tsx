import styled from "styled-components";
import Template from "../components/common/template";
import Typo from "../components/common/typo";
import ResultContainer from "../components/result/SRPResultBox";
import useTimer from "../hooks/useTimer";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useLayoutEffect } from "react";
import useQueryString from "../hooks/useQueryString";
import { SRPType } from "../../../types";

const Same = () => {
  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>();
  const { srp } = useQueryString<{ srp: SRPType }>();
  const [onTimer, offTimer] = useTimer(
    () => navigate(`/battle/${roomId}`),
    3000
  );
  useLayoutEffect(() => {
    onTimer();
    return () => offTimer();
  }, []);
  return (
    <>
      <Template justify="center" align="center">
        <ResultContainer mySRP={srp} opponentSRP={srp} />
      </Template>
      <Template justify="flex-end" align="center">
        <Typo.Body1>완벽한 승부를 결정하기 위해</Typo.Body1>
        <Typo.Body1>3초 뒤 다시 시작합니다.</Typo.Body1>
      </Template>
    </>
  );
};

export default Same;
