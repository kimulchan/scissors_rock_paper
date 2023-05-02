import { useState } from "react";
import Button from "../components/common/button";
import Template from "../components/common/template";
import Typo from "../components/common/typo";
import SocketService from "../utils/SocketService";
import CountDownModal from "../components/modal/CountDownModal";
import { useNavigate } from "react-router-dom";
import Input from "../components/common/input";
import { Flex } from "../components/common/flex";

const Join = () => {
  const [code, setCode] = useState("");
  const [isJoin, setIsJoin] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      {isJoin && (
        <CountDownModal callback={() => navigate(`/battle/${code}`)} />
      )}

      <Template justify="space-between" align="center">
        <Typo.Marquee time="10000">
          😎😎😎방 참가😎😎😎방 참가😎😎😎방 참가
        </Typo.Marquee>
        <Input
          onChange={(e) => setCode(e.target.value)}
          placeholder="방 코드를 입력해주세요!"
        />
        <Flex dir="column" align="center" gap={8} fullWidth={true}>
          <Button
            fill="main"
            onClick={() => SocketService.joinRoom(code, () => setIsJoin(true))}
          >
            방 참가
          </Button>
          <Typo.Body1>
            방 번호를 입력하여 상대방의 게임에 참가하세요!
          </Typo.Body1>
        </Flex>
      </Template>
    </>
  );
};

export default Join;
