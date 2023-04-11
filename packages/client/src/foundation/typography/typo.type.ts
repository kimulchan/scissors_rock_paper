import { FlattenSimpleInterpolation } from "styled-components";

export type FontWeightType =
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900;

export type TypoSectionType = "heading" | "body";

type TypoKeyConverter<
  TypoSection extends TypoSectionType,
  TypoNumbers extends number[]
> = `${TypoSection}${TypoNumbers[number]}`;

type TypoKeyType =
  | TypoKeyConverter<"heading", [1, 2, 3, 4, 5, 6]>
  | TypoKeyConverter<"body", [1, 2, 3, 4]>;

export type TypoType = Record<TypoKeyType, FlattenSimpleInterpolation>;
