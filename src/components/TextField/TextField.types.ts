import { Size } from '../../@types/styled';

export type InputType = 'text' | 'password';

export type TextFieldProps = {
  value?: string;
  onChange?: () => void;
  placeholder?: string;
  addonLeft?: React.ReactNode;
  addonRight?: React.ReactNode;
  elementLeft?: React.ReactNode;
  elementRight?: React.ReactNode;
  type?: InputType;
  size?: Size;
};
