import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { StyleSheetManager } from 'styled-components';
import isPropValid from '@emotion/is-prop-valid';

import GlobalStyle from './GlobalStyle.tsx';
import { AppProviders } from './providers/AppProviders.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StyleSheetManager shouldForwardProp={isPropValid}>
      <AppProviders>
        <GlobalStyle />
        <App />
      </AppProviders>
    </StyleSheetManager>
  </React.StrictMode>
);
