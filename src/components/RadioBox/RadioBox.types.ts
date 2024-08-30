import { RuleSet } from 'styled-components';
import { Colors, Size } from '../../@types/styled';
import { ExcludeKeys, PickAttributeFromHTMLElement } from '../../types';

export interface RadioBoxProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  checked: boolean;
  name: string;
  label: React.ReactNode;
  id?: PickAttributeFromHTMLElement<'input', 'id'>;
  size?: Size;
  disabled?: boolean;
  isError?: boolean;
  color?: keyof ExcludeKeys<Colors, 'white' | 'lightGray'>;
  innerRef?: React.RefObject<HTMLInputElement>;
}

export interface CustomInpupProps
  extends Pick<
    RadioBoxProps,
    'size' | 'value' | 'disabled' | 'isError' | 'color' | 'checked'
  > {}

export interface InputProps
  extends Pick<
    RadioBoxProps,
    'value' | 'disabled' | 'checked' | 'innerRef' | 'name' | 'id' | 'onChange'
  > {}

export type PickSizeType = (size: Size | undefined) => RuleSet<object>;
