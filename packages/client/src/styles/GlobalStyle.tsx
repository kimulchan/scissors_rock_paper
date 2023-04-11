import { createGlobalStyle } from "styled-components";
import { reset } from "styled-reset";
const GlobalStyle = createGlobalStyle`
    ${reset};
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: ${({ theme }) => theme.color.white}
    }
    body{
        background-color: ${({ theme }) => theme.color.black}
    }
    #modal{
        z-index: 999;
    }
    
`;

export default GlobalStyle;
