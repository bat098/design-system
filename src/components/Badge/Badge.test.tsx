import { screen } from '@testing-library/dom';
import { render } from '@/test-utils';
import Badge from '@/components/Badge/Badge';
import { BadgeInterface } from './Badge.types';
import { CSSProperties } from 'react';
import { theme } from '@/theme';
import { getContrastColor } from '@/helpers/helpers';
import { baseColorsWithUndefined, variantsWithUndefined } from '@/variables';
import {
  BaseColorsWithUndefinedType,
  VaraintWithUndefinedType,
} from '@/@types/styled';

type sizeDataType = { size: BadgeInterface['size']; styles: CSSProperties }[];

const sizeData: sizeDataType = [
  {
    size: 'small',
    styles: {
      fontSize: '1rem',
    },
  },
  {
    size: 'medium',
    styles: {
      fontSize: '1.3rem',
    },
  },
  {
    size: 'large',
    styles: {
      fontSize: '1.6rem',
    },
  },
  {
    size: undefined,
    styles: {
      fontSize: '1.3rem',
    },
  },
];

type colorAndVaraintDataType = {
  variant: BadgeInterface['variant'];
  color: BadgeInterface['color'];
  styles: CSSProperties;
}[];

const getVariantAndColorStyles = (
  variant: VaraintWithUndefinedType,
  color: BaseColorsWithUndefinedType
): CSSProperties => {
  const selectedColor = color ? theme.colors[color] : theme.colors.primary;
  const contrastedColor = getContrastColor(selectedColor);

  return variant === 'outlined'
    ? { color: selectedColor, backgroundColor: theme.colors.white }
    : { color: contrastedColor, backgroundColor: selectedColor };
};

const colorAndVaraintData: colorAndVaraintDataType =
  variantsWithUndefined.flatMap((variant) =>
    baseColorsWithUndefined.map((color) => ({
      variant: variant,
      color: color,
      styles: getVariantAndColorStyles(variant, color),
    }))
  );

// const colorAndVaraintData2: colorAndVaraintDataType = [
//   // variant contained with colors
//   {
//     variant: 'contained',
//     color: 'primary',
//     styles: {
//       color: getContrastColor(theme.colors.primary),
//     },
//   },
//   {
//     variant: 'contained',
//     color: 'secondary',
//     styles: {
//       color: getContrastColor(theme.colors.secondary),
//     },
//   },
//   {
//     variant: 'contained',
//     color: 'success',
//     styles: {
//       color: getContrastColor(theme.colors.success),
//     },
//   },
//   {
//     variant: 'contained',
//     color: 'danger',
//     styles: {
//       color: getContrastColor(theme.colors.danger),
//     },
//   },
//   {
//     variant: 'contained',
//     color: 'info',
//     styles: {
//       color: getContrastColor(theme.colors.info),
//     },
//   },
//   {
//     variant: 'contained',
//     color: 'warn',
//     styles: {
//       color: getContrastColor(theme.colors.warn),
//     },
//   },
//   // variant outlined with colors
//   {
//     variant: 'outlined',
//     color: 'primary',
//     styles: {
//       color: theme.colors.primary,
//     },
//   },
//   {
//     variant: 'outlined',
//     color: 'secondary',
//     styles: {
//       color: theme.colors.secondary,
//     },
//   },
//   {
//     variant: 'outlined',
//     color: 'success',
//     styles: {
//       color: theme.colors.success,
//     },
//   },
//   {
//     variant: 'outlined',
//     color: 'danger',
//     styles: {
//       color: theme.colors.danger,
//     },
//   },
//   {
//     variant: 'outlined',
//     color: 'info',
//     styles: {
//       color: theme.colors.info,
//     },
//   },
//   {
//     variant: 'outlined',
//     color: 'warn',
//     styles: {
//       color: theme.colors.warn,
//     },
//   },
// ];

describe('Badge', () => {
  test('render children correctly', () => {
    render(<Badge>Hello</Badge>);
    const badge = screen.getByText('Hello');
    expect(badge).toBeInTheDocument();
  });

  // check badge sizes
  describe('render badge sizes', () => {
    sizeData.forEach(({ size, styles }) => {
      test(`${size}`, () => {
        render(<Badge size={size}>Hello</Badge>);
        const badge = screen.getByText('Hello');
        Object.entries(styles).forEach(([key, value]) => {
          expect(badge).toHaveStyle({ [key]: value });
        });
      });
    });
  });

  describe('render badge with color and varaint', () => {
    colorAndVaraintData.forEach(({ color, variant, styles }) => {
      test(`varaint: ${variant} color: ${color}`, () => {
        render(
          <Badge variant={variant} color={color}>
            Hello
          </Badge>
        );
        const badge = screen.getByText('Hello');
        Object.entries(styles).forEach(([key, value]) => {
          expect(badge).toHaveStyle({ [key]: value });
        });
      });
    });
  });
});
