import { SRPType } from "@packages/types/common";
import { Flex } from "../common/flex";
import Typo from "../common/typo";
interface SelectSRPProps {
  value: SRPType;
  onClick: (value: SRPType) => void;
}

const SelectSRP = ({ onClick, value }: SelectSRPProps) => {
  const a = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {};
  return (
    <Flex gap={8} justify="center" fullWidth={true}>
      <Typo.Body2 onClick={(e) => console.log(e)}>✊</Typo.Body2>
      <Typo.Body2>✌️</Typo.Body2>
      <Typo.Body2>✋</Typo.Body2>
    </Flex>
  );
};

export default SelectSRP;
