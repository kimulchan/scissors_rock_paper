import styled, {
  DefaultTheme,
  FlattenInterpolation,
  ThemeProps,
  css,
} from "styled-components";

type FillType = "main" | "bdMain" | "default" | "bdDefault";
interface BaseButtonProps {
  fill?: FillType;
}

const BaseButton = styled.button<BaseButtonProps>`
  ${({ fill }) => buttonColorSelector[fill || "default"]}
  ${({ theme }) => theme.typo.body1}
  width: 100%;
  height: 42px;
  border-radius: 8px;
  transition: all 0.5s;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }
`;

const buttonColorSelector: Record<
  FillType,
  FlattenInterpolation<ThemeProps<DefaultTheme>>
> = {
  bdDefault: css`
    border: 1px solid ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.white};
    background-color: ${({ theme }) => theme.color.black};
    &:hover {
      background-color: ${({ theme }) => theme.color.white};
      color: ${({ theme }) => theme.color.black};
    }
  `,
  bdMain: css`
    border: 1px solid ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.main};
    background-color: ${({ theme }) => theme.color.black};
    &:hover {
      background-color: ${({ theme }) => theme.color.main};
      color: ${({ theme }) => theme.color.black};
    }
  `,
  default: css`
    background-color: ${({ theme }) => theme.color.white};
    color: ${({ theme }) => theme.color.black};
    border: 1px solid ${({ theme }) => theme.color.white};
    &:hover {
      background-color: ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.white};
    }
  `,
  main: css`
    border: 1px solid ${({ theme }) => theme.color.main};
    color: ${({ theme }) => theme.color.black};
    background-color: ${({ theme }) => theme.color.main};
    &:hover {
      background-color: ${({ theme }) => theme.color.black};
      color: ${({ theme }) => theme.color.main};
    }
  `,
};

export default BaseButton;
