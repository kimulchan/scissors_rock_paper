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
  scaleDownTop: keyframes`
        0% {
            transform: translateY(0) scale(1);
        }
        100% {
            transform: translateY(-80px) scale(0.98);
        }
    `,
  fadeIn: keyframes`
        0%{
            transform: translateY(20px);
            opacity: 0;
        }
        100% {
            transform: translateY(0);
            opacity:1;
        }
    `,
};
