import { keyframes } from "styled-components";
import { AnimationType } from "./animation.type";

export const animation: AnimationType = {
  slideLeftOut: keyframes`
        0%{
            transform: translateX(0)
        }
        100%{
            transform: translateX(100%);
        }
    `,
  slideRightOut: keyframes`
        0%{
            transform: translateX(0)
        }
        100%{
            transform: translateX(-100%);
        }
    `,
  slideLeftIn: keyframes`
        0%{
            transform: translateX(-100%); 
        }
        100%{
            transform: translateX(0)
        }
    `,
  slideRightIn: keyframes`
        0%{
            transform: translateX(100%);
        }
        100%{
            transform: translateX(0)
        }
    `,
};
