import styled from "styled-components";
import { Flex, FlexOption } from "../flex";
import { HTMLAttributes, PropsWithChildren } from "react";

interface BaseTemplateProps extends FlexOption {}

const BaseTemplate = ({
  children,
  ...rest
}: PropsWithChildren<BaseTemplateProps>) => {
  return (
    <TemplateContainer
      dir="column"
      fullHeight={true}
      fullWidth={true}
      {...rest}
    >
      {children}
    </TemplateContainer>
  );
};

const TemplateContainer = styled(Flex)`
  position: absolute;
  top: 0;
  left: 0;
  padding: 34px 20px;
`;

export default BaseTemplate;
