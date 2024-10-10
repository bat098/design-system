import React from 'react';
import type { Preview } from '@storybook/react';
import { ThemeProvider, StyleSheetManager } from 'styled-components';

import isPropValid from '@emotion/is-prop-valid';

import { theme } from '../src/theme';

import GlobalStyle from '../src/GlobalStyle';

const preview: Preview = {
  parameters: {
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    (Story) => {
      return (
        <StyleSheetManager shouldForwardProp={isPropValid}>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Story />
          </ThemeProvider>
        </StyleSheetManager>
      );
    },
  ],
};

export default preview;
