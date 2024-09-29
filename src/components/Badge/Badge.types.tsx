import { BaseColors, Size } from '../../@types/styled';

export type VariantType = 'contained' | 'outlined';

export interface BadgeInterface {
  children: React.ReactNode;
  variant?: VariantType;
  color?: keyof BaseColors;
  size?: Size;
}
