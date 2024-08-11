import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { StyleSheetManager, ThemeProvider } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import { theme } from './theme.tsx';
import GlobalStyle from './GlobalStyle.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </StyleSheetManager>
  </React.StrictMode>
);
