import { RuleSet } from 'styled-components';
import { Colors, Size } from '../../@types/styled';
import { ExcludeKeys, PickAttributeFromHTMLElement } from './../../types';

export type CheckBoxType = {
  value?: boolean;
  onChange?: PickAttributeFromHTMLElement<'input', 'onChange'>;
  id?: PickAttributeFromHTMLElement<'input', 'id'>;
  size?: Size;
  disabled?: boolean;
  isError?: boolean;
  color?: keyof ExcludeKeys<Colors, 'white' | 'lightGray'>;
};

export type CustomInpuType = Pick<
  CheckBoxType,
  'size' | 'value' | 'disabled' | 'isError' | 'color'
>;

export type PickSizeType = (size: Size | undefined) => RuleSet<object>;
