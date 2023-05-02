import styled from "styled-components";
import { Flex } from "../flex";

const BaseTemplate = styled(Flex).attrs(() => ({
  dir: "column",
  fullHeight: true,
  fullWidth: true,
}))`
  position: absolute;
  top: 0;
  left: 0;
  padding: 34px 20px;
`;

export default BaseTemplate;
