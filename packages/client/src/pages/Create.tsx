import { useEffect, useState } from "react";
import Template from "../components/common/template";
import Typo from "../components/common/typo";
import CountDownModal from "../components/modal/CountDownModal";
import { useNavigate } from "react-router-dom";
import Button from "../components/common/button";
import io from "socket.io-client";
import SocketService from "../utils/SocketService";
const Create = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [code, setCode] = useState("");
  const router = useNavigate();

  useEffect(() => {
    SocketService.createRoom((randomId) => setCode(randomId));
    SocketService.onJoinRoom(() => setIsOpen(true));
  }, []);

  return (
    <>
      {isOpen && <CountDownModal callback={() => router(`/battle/${code}`)} />}
      <Template justify="center" align="center" gap={8}>
        <Typo.Heading5>생성된 방의 코드는</Typo.Heading5>
        <Typo.Heading2 color="main">{code}</Typo.Heading2>
        <Typo.Heading5>입니다</Typo.Heading5>
      </Template>
      <Template justify="end" align="center" gap={8}>
        <Button
          onClick={() =>
            SocketService.createRoom((randomId) => setCode(randomId))
          }
        >
          넘어가기
        </Button>
        <Typo.Body2>상대방 입장이 완료되면 자동으로 넘어갑니다.</Typo.Body2>
      </Template>
    </>
  );
};

export default Create;
