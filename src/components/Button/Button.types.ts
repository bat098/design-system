import { Size, BaseColors } from '../../@types/styled';
import { PickAttributeFromHTMLElement } from '../../types';

export type VariantType = 'contained' | 'outlined';

export interface ButtonProps {
  variant?: VariantType;
  type?: PickAttributeFromHTMLElement<'button', 'type'>;
  disabled?: PickAttributeFromHTMLElement<'button', 'disabled'>;
  onClick?: PickAttributeFromHTMLElement<'button', 'onClick'>;
  size?: Size;
  color?: keyof BaseColors;
  children?: React.ReactNode;
  iconStart?: React.ReactNode;
  iconEnd?: React.ReactNode;
}
