import { DefaultTheme } from 'styled-components';

const baseColors: DefaultTheme['baseColors'] = {
  primary: '#1976d2',
  secondary: '#9c27b0',
  danger: '#d32f2f',
  success: '#2e7d32',
  info: '#03a9f4',
  warn: '#ffa500',
};

export const theme: DefaultTheme = {
  baseColors: baseColors,
  colors: {
    ...baseColors,
    white: '#ffffff',
    black: '#000000',
    lightGray: '#eeeeee',
    gray: '#cccccc',
  },
  base: {
    borderRadius: '0.4rem',
    boxShadow: '0.1rem 0.1rem 0.2rem 0.1rem rgba(0,0,0, 0.1)',
  },
  componentsProps: {
    TextArea: {},
    Select: {},
    Switch: {},
    Button: {},
    Card: {},
    CardHeader: {},
    CardBody: {},
    CardFooter: {},
    Divider: {},
    Header: {},
  },
};
