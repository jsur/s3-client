import React from "react";
import { styleReset } from "react95";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

/* Pick a theme of your choice */
import original from "react95/dist/themes/original";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url(node_modules/dist/fonts/ms_sans_serif.woff2) format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url(node_modules/dist/fonts/ms_sans_serif_bold.woff2) format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`;

const Wrapper = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.desktopBackground};
`;

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <Wrapper>
        <p>hello</p>
      </Wrapper>
    </ThemeProvider>
  </div>
);

export default App;
