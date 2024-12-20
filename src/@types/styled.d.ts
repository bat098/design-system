import { RadioBoxProps } from './../components/RadioBox/RadioBox.types';
import { CheckBoxProps } from './../components/Checkbox/Checkbox.types';
// import original module declarations

import 'styled-components';
import { TextareaProps } from '../components/Textarea/Textarea.types';
import { SelectProps } from '../components/Select/Select.types';
import { SwitchProps } from '../components/Switch/Switch.types';
import { ButtonProps } from '../components/Button/Button.types';
import { CardInterface } from '../components/Card/Card.types';
import { CardHeaderInterface } from '../components/CardHeader/CardHeader.types';
import { CardBodyInterface } from '../components/CardBody/CardBody.types';
import { CardFooterInterface } from '../components/CardFooter/CardFooter.types';
import { DividerInterface } from '../components/Divider/Divider.types';
import { HeaderInterface } from '../components/Header/Header.types';

export type componentsProps = {
  TextArea?: TextareaProps | object;
  Button?: ButtonProps | object;
  Select?: SelectProps | object;
  Switch?: SwitchProps | object;
  CheckBox?: CheckBoxProps | object;
  RadioBox?: RadioBoxProps | object;
  Card?: CardInterface | object;
  CardHeader?: CardHeaderInterface | object;
  CardBody?: CardBodyInterface | object;
  CardFooter?: CardFooterInterface | object;
  Divider?: DividerInterface | object;
  Header?: HeaderInterface | object;
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

export type VariantType = 'contained' | 'outlined';

export type BaseSizesWithUndefinedType = Size | undefined;
export type VaraintWithUndefinedType = VariantType | undefined;
export type BaseColorsWithUndefinedType = keyof BaseColors | undefined;

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    baseColors: BaseColors;
    componentsProps: componentsProps;
    base: {
      borderRadius: string;
      boxShadow: string;
    };
  }
}
