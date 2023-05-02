import { SRPIconType, SRPType } from "@packages/types/common";
import { Flex } from "../common/flex";
import Typo from "../common/typo";
import { SRPSelector } from "../../constant/SRP";
import styled, { css } from "styled-components";
import { useState } from "react";
interface SelectSRPProps {
  onClick: (value: SRPType) => void;
}

const SelectSRP = ({ onClick }: SelectSRPProps) => {
  const [selectValue, setSelectValue] = useState<null | SRPType>(null);

  const onClickSRP = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const selectSRPValue =
      SRPSelector[e.currentTarget.innerText as SRPIconType];
    !selectValue &&
      (() => {
        onClick(selectSRPValue);
        setSelectValue(selectSRPValue);
      })();
  };

  const isSelect = (mySRP: SRPType) =>
    selectValue === null || mySRP === selectValue;
  return (
    <Flex gap={52} justify="center" align="center" fullWidth={true}>
      <SRPSelectButton onClick={onClickSRP} isSelect={isSelect("ROCK")}>
        ✊
      </SRPSelectButton>
      <SRPSelectButton onClick={onClickSRP} isSelect={isSelect("SCISSORS")}>
        ✌️
      </SRPSelectButton>
      <SRPSelectButton onClick={onClickSRP} isSelect={isSelect("PAPER")}>
        ✋
      </SRPSelectButton>
    </Flex>
  );
};

const SRPSelectButton = styled(Typo.Heading2)<{ isSelect: boolean }>`
  cursor: pointer;
  visibility: visible;
  ${({ isSelect, theme }) => !isSelect && "display: none"};
  transition: all 0.5s;
`;

export default SelectSRP;
