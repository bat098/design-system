import type { Preview } from '@storybook/react';

import { ThemeProvider } from 'styled-components';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

/* TODO: update import for your custom theme configurations */
import { theme } from '../src/theme';

import GlobalStyles from '../src/GlobalStyle';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  decorators: [
    withThemeFromJSXProvider({
      themes: {
        theme: theme,
      },
      defaultTheme: 'theme',
      Provider: ThemeProvider,
      GlobalStyles,
    }),
  ],
};

export default preview;
