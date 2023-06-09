import { Keyframes } from "styled-components";
import { CamelToPascalCase } from "../../utils/camelToPascalCase";

type AnimationActionType = "fade" | "slide" | "marquee" | "increase" | "scale";

type AnimationKeyConverter<
  AnimationAction extends AnimationActionType,
  AnimationDetail extends string[]
> = `${AnimationAction}${CamelToPascalCase<AnimationDetail[number]>}`;

type AnimationKeyType =
  | AnimationKeyConverter<"slide", ["leftOut", "rightOut", "leftIn", "rightIn"]>
  | AnimationKeyConverter<"fade", ["in"]>
  | AnimationKeyConverter<"scale", ["downTop"]>;

export type AnimationType = Record<AnimationKeyType, Keyframes>;
