import { CheckBoxProps } from './../components/Checkbox/Checkbox.types';
// import original module declarations

import 'styled-components';
import { TextareaProps } from '../components/Textarea/Textarea.types';
import { SelectProps } from '../components/Select/Select.types';
import { SwitchProps } from '../components/Switch/Switch.types';
import { ButtonProps } from '../components/Button/Button.types';

export type componentsProps = {
  TextArea?: TextareaProps | object;
  Button?: ButtonProps | object;
  Select?: SelectProps | object;
  Switch?: SwitchProps | object;
  CheckBox?: CheckBoxProps | object;
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

export type BaseColors = Pick<
  Colors,
  'primary' | 'secondary' | 'success' | 'danger' | 'info' | 'warn'
>;

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
