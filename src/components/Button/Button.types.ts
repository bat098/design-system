import { Colors } from '../../@types/styled';
import { PickAttributeFromHTMLElement } from '../../types';

export type VariantType = 'contained' | 'outlined';
type SizeType = 'small' | 'medium' | 'large';

type ColorsToRemove = Pick<Colors, 'white' | 'lightGray' | 'gray'>;
type ButtonColors = Omit<Colors, keyof ColorsToRemove>;

export interface ButtonProps {
  variant?: VariantType;
  type?: PickAttributeFromHTMLElement<'button', 'type'>;
  disabled?: PickAttributeFromHTMLElement<'button', 'disabled'>;
  onClick?: PickAttributeFromHTMLElement<'button', 'onClick'>;
  size?: SizeType;
  color?: keyof ButtonColors;
  children?: React.ReactNode;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}
