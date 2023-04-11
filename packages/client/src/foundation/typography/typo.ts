import { css } from "styled-components";
import { FontWeightType, TypoType } from "./typo.type";

export const typoGenerator = (
  fontSize: number,
  fontWeight?: FontWeightType,
  lineHeight?: number
) => css`
  font-size: ${fontSize}px;
  font-weight: ${fontWeight || 500};
  line-height: ${lineHeight ? `${lineHeight}px` : 1.2};
`;

export const typo: TypoType = {
  heading1: typoGenerator(120, 600, 160),
  heading2: typoGenerator(64, 600, 86),
  heading3: typoGenerator(36, 600, 54),
  heading4: typoGenerator(28, 500, 40),
  heading5: typoGenerator(24, 500, 36),
  heading6: typoGenerator(20, 500, 28),
  body1: typoGenerator(16, 500, 24),
  body2: typoGenerator(16, 400, 24),
  body3: typoGenerator(14, 500, 20),
  body4: typoGenerator(14, 400, 20),
};
