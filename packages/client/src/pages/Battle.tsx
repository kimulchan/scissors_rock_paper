import { useEffect, useLayoutEffect, useState } from "react";
import SelectSRP from "../components/game/SelectSRP";
import Typo from "../components/common/typo";
import useTimer from "../hooks/useTimer";
import { useNavigate, useParams } from "react-router-dom";
import { SRPType } from "../../../types/common";
import Template from "../components/common/template";
import SocketService from "../utils/SocketService";

const Battle = () => {
  const navigate = useNavigate();
  const { roomId } = useParams<{ roomId: string }>();
  const [selectSRP, setSelectSRP] = useState<SRPType | null>(null);
  const [otherSelectSRP, setOtherSelectSRP] = useState<SRPType | null>(null);

  const [onTimer, offTimer] = useTimer(
    () =>
      !selectSRP &&
      roomId &&
      SocketService.playSRPGame(roomId, "NONE", (SRPValue) =>
        setSelectSRP(SRPValue)
      ),
    3000
  );

  useEffect(() => {
    onTimer();
    return () => offTimer();
  }, []);

  useEffect(() => {
    SocketService.onPlaySRPGame(setOtherSelectSRP);
  }, []);

  useEffect(() => {
    if (selectSRP && otherSelectSRP) {
      if (selectSRP === otherSelectSRP)
        navigate(`/same/${roomId}?srp=${selectSRP}`, { replace: true });
      else
        navigate(`/result/${roomId}?me=${selectSRP}&other=${otherSelectSRP}`, {
          replace: true,
        });
    }
  }, [selectSRP, otherSelectSRP]);

  return (
    <>
      <Template justify="center" align="center" gap={42}>
        <Typo.Heading3 color="main">가위 바위 보!</Typo.Heading3>
        <SelectSRP
          onClick={(SRPValue) => {
            roomId && SocketService.playSRPGame(roomId, SRPValue, setSelectSRP);
          }}
        />
        <Typo.Body1>
          {selectSRP === null
            ? "가위, 바위, 보 중에 하나를 선택하세요!"
            : "상대방이 선택할 때까지 잠시만 기다려주세요!"}
        </Typo.Body1>
      </Template>
    </>
  );
};

export default Battle;
