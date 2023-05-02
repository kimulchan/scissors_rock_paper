import { Link, useNavigate } from "react-router-dom";
import CountDownModal from "../components/modal/CountDownModal";
import { useState } from "react";
import Typo from "../components/common/typo";
import styled from "styled-components";
import { Flex } from "../components/common/flex";
import Template from "../components/common/template";
import Button from "../components/common/button";

const Test1 = () => {
  const router = useNavigate();
  return (
    <>
      <AbsoluteContainer
        fullWidth={true}
        fullHeight={true}
        justify="center"
        align="center"
        dir="column"
      >
        <Typo.Marquee direction="left">
          ✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋
        </Typo.Marquee>
        <Typo.Marquee direction="right">
          ✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊
        </Typo.Marquee>
        <Typo.Marquee direction="left">
          ✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️✋✊✌️
        </Typo.Marquee>
      </AbsoluteContainer>
      <Template justify="end" align="center" gap={8}>
        <Button onClick={() => router("/create")} fill="bdMain">
          방 생성하기
        </Button>
        <Flex gap={4}>
          <Typo.Body2>방을 참여하고 싶으시다면</Typo.Body2>
          <UnderlineTypo as="a" color="main" onClick={() => router("/join")}>
            방 참여하러가기
          </UnderlineTypo>
        </Flex>
      </Template>
    </>
  );
};

const AbsoluteContainer = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
`;

const UnderlineTypo = styled(Typo.Body2)`
  text-decoration: underline;
  cursor: pointer;
`;

export default Test1;
