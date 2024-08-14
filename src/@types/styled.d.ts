// import original module declarations

import 'styled-components';
import { TextareaProps } from '../components/Textarea/Textarea.types';

export type componentsProps = {
  TextArea?: TextareaProps;
  Button?: ButtonProps;
};

export type Colors = {
  primary: string;
  secondary: string;
  danger: string;
  success: string;
  white: string;
  black: string;
  gray: string;
  lightGray: string;
  info: string;
  warn: string;
};

export type Size = 'small' | 'medium' | 'large';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    componentsProps: componentsProps;
  }
}
