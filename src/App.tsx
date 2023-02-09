import React from "react";
import { styleReset } from "react95";
import { createGlobalStyle, ThemeProvider } from "styled-components";

/* Pick a theme of your choice */
import original from "react95/dist/themes/original";
import Main from "./components/Main";

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

const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <Main />
    </ThemeProvider>
  </div>
);

export default App;
