import "styled-components";
import { animation, color, typo } from "../foundation";

declare module "styled-components" {
  export interface DefaultTheme {
    typo: typeof typo;
    color: typeof color;
    animation: typeof animation;
  }
}
