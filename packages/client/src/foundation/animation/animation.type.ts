import { Keyframes } from "styled-components";
import { CamelToPascalCase } from "../../utils/camelToPascalCase";

type AnimationActionType = "fade" | "slide" | "marquee";

type AnimationKeyConverter<
  AnimationAction extends AnimationActionType,
  AnimationDetail extends string[]
> = `${AnimationAction}${CamelToPascalCase<AnimationDetail[number]>}`;

type AnimationKeyType = AnimationKeyConverter<
  "slide",
  ["leftOut", "rightOut", "leftIn", "rightIn"]
>;

export type AnimationType = Record<AnimationKeyType, Keyframes>;
