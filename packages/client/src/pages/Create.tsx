import Template from "../components/common/template";
import Typo from "../components/common/typo";

const Create = () => {
  return (
    <>
      <Template justify="center" align="center" gap={8}>
        <Typo.Heading5>생성된 방의 코드는</Typo.Heading5>
        <Typo.Heading2 color="main">J9dj2x</Typo.Heading2>
        <Typo.Heading5>입니다</Typo.Heading5>
      </Template>
      <Template justify="end" align="center">
        <Typo.Body2>상대방 입장이 완료되면 자동으로 넘어갑니다.</Typo.Body2>
      </Template>
    </>
  );
};

export default Create;
