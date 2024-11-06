import {
  BaseColors,
  BaseColorsWithUndefinedType,
  BaseSizesWithUndefinedType,
  VaraintWithUndefinedType,
  VariantType,
} from './@types/styled.d';
import { Size } from './@types/styled';

export const baseSizes: Size[] = ['small', 'medium', 'large'];

export const baseSizesWithUndefined: BaseSizesWithUndefinedType[] = [
  'small',
  'medium',
  'large',
  undefined,
];

export const variants: VariantType[] = ['contained', 'outlined'];

export const variantsWithUndefined: VaraintWithUndefinedType[] = [
  'contained',
  'outlined',
  undefined,
];

export const baseColors: (keyof BaseColors)[] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'info',
  'warn',
];

export const baseColorsWithUndefined: BaseColorsWithUndefinedType[] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'info',
  'warn',
  undefined,
];
