import { RuleSet } from 'styled-components';
import { BaseColors, Size } from '../../@types/styled';
import { PickAttributeFromHTMLElement } from './../../types';

export interface CheckBoxProps {
  checked?: boolean;
  onChange?: PickAttributeFromHTMLElement<'input', 'onChange'>;
  id?: PickAttributeFromHTMLElement<'input', 'id'>;
  size?: Size;
  disabled?: boolean;
  isError?: boolean;
  color?: keyof BaseColors;
  innerRef?: React.RefObject<HTMLInputElement>;
}

export interface CustomInpuProps
  extends Pick<
    CheckBoxProps,
    'size' | 'checked' | 'disabled' | 'isError' | 'color'
  > {}

export interface InputProps
  extends Pick<
    CheckBoxProps,
    'innerRef' | 'checked' | 'onChange' | 'disabled'
  > {}

export type PickSizeType = (size: Size | undefined) => RuleSet<object>;
