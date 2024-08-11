export type TextFieldProps = {
  value?: string;
  onChange?: () => void;
  placeholder?: string;
  inputAddonLeft?: React.ReactNode;
  inputAddonRight?: React.ReactNode;
  inputElementLeft?: React.ReactNode;
  inputElementRight?: React.ReactNode;
};
