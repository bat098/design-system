// import original module declarations

import 'styled-components';
import { TextareaProps } from '../components/Textarea/Textarea.types';
import { SelectProps } from '../components/Select/Select.types';

export type componentsProps = {
  TextArea?: TextareaProps;
  Button?: ButtonProps;
  Select?: SelectProps;
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
    base: {
      borderRadius: string;
    };
  }
}
