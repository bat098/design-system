import { RuleSet } from 'styled-components';
import { Colors, Size } from '../../@types/styled';
import { ExcludeKeys, PickAttributeFromHTMLElement } from '../../types';

export type RadioBoxType = {
  value?: string;
  label?: React.ReactNode;
  onChange?: PickAttributeFromHTMLElement<'input', 'onChange'>;
  id?: PickAttributeFromHTMLElement<'input', 'id'>;
  size?: Size;
  disabled?: boolean;
  isError?: boolean;
  color?: keyof ExcludeKeys<Colors, 'white' | 'lightGray'>;
  name?: string;
  checked?: boolean;
};

export type CustomInpuType = Pick<
  RadioBoxType,
  'size' | 'value' | 'disabled' | 'isError' | 'color' | 'checked'
>;

export type PickSizeType = (size: Size | undefined) => RuleSet<object>;
