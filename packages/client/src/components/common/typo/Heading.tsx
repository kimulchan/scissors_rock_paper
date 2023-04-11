import styled from "styled-components";
import { typo } from "../../../foundation";

export const Heading1 = styled.h1<{ color?: ColorKeyType }>`
  ${typo.heading1}
  ${({ theme, color }) => color && `color: ${theme.color[color]}`}
`;

export const Heading2 = styled.h2<{ color?: ColorKeyType }>`
  ${typo.heading2}
  ${({ theme, color }) => color && `color: ${theme.color[color]}`}
`;

export const Heading3 = styled.h3<{ color?: ColorKeyType }>`
  ${typo.heading3}
  ${({ theme, color }) => color && `color: ${theme.color[color]}`}
`;

export const Heading4 = styled.h4<{ color?: ColorKeyType }>`
  ${typo.heading4}
  ${({ theme, color }) => color && `color: ${theme.color[color]}`}
`;

export const Heading5 = styled.h5<{ color?: ColorKeyType }>`
  ${typo.heading5}
  ${({ theme, color }) => color && `color: ${theme.color[color]}`}
`;

export const Heading6 = styled.h6<{ color?: ColorKeyType }>`
  ${typo.heading6}
  ${({ theme, color }) => color && `color: ${theme.color[color]}`}
`;
