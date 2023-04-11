import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { color, typo, animation } from "../foundation";
import GlobalStyle from "./GlobalStyle";
const StyleProvider = ({ children }: PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={{ color, typo, animation }}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default StyleProvider;
