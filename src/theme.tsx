import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    primary: '#1976d2',
    secondary: '#9c27b0',
    danger: '#d32f2f',
    success: '#2e7d32',
    white: '#ffffff',
    black: '#000000',
    lightGray: '#eeeeee',
    gray: '#cccccc',
    info: '#03a9f4',
    warn: '#ffa500',
  },
  base: {
    borderRadius: '0.4rem',
  },
  componentsProps: {
    TextArea: {},
    Select: {},
  },
};
