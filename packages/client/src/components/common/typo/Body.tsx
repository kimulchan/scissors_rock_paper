import styled from "styled-components";
import { typo } from "../../../foundation";

export const Body1 = styled.p<{ color?: ColorKeyType }>`
  ${typo.body1}
  ${({ theme, color }) => color && `color: ${theme.color[color]}`}
`;

export const Body2 = styled.span<{ color?: ColorKeyType }>`
  ${typo.body2}
  ${({ theme, color }) => color && `color: ${theme.color[color]}`}
`;

export const Body3 = styled.p<{ color?: ColorKeyType }>`
  ${typo.body3}
  ${({ theme, color }) => color && `color: ${theme.color[color]}`}
`;

export const Body4 = styled.span<{ color?: ColorKeyType }>`
  ${typo.body4}
  ${({ theme, color }) => color && `color: ${theme.color[color]}`}
`;
