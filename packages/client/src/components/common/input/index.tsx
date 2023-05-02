import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 42px;
  outline: none;
  border: 1px solid ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  padding: 12px;
  border-radius: 4px;
  ${({ theme }) => theme.typo.body2}
  :active,:focus {
    border: 1px solid ${({ theme }) => theme.color.main};
  }
`;

export default Input;
