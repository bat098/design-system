import styled, { css } from 'styled-components';
import { ButtonProps } from './Button.types';
import { getContrastColor } from '../../helpers/helpers';
import Color from 'color';

const baseStyle = css<ButtonProps>`
  font-weight: 500;
  cursor: pointer;
  text-transform: uppercase;
  border: 0.1rem solid
    ${(props) =>
      props.color
        ? props.theme.colors[props.color]
        : props.theme.colors.primary};
  transition: all 0.3s ease-in-out;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
`;

const containedStyle = css<ButtonProps>`
  background-color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  color: ${(props) =>
    props.color
      ? getContrastColor(props.theme.colors[props.color])
      : getContrastColor(props.theme.colors.primary)};
  &:not(:disabled) {
    &:hover {
      background-color: ${(props) =>
        props.color
          ? Color(props.theme.colors[props.color]).darken(0.15).hex()
          : Color(props.theme.colors.primary).darken(0.15).hex()};
      border: 0.1rem solid
        ${(props) =>
          props.color
            ? Color(props.theme.colors[props.color]).darken(0.15).hex()
            : Color(props.theme.colors.primary).darken(0.15).hex()};
    }
    &:active {
      background-color: ${(props) =>
        props.color
          ? Color(props.theme.colors[props.color]).darken(0.3).hex()
          : Color(props.theme.colors.primary).darken(0.3).hex()};
      border: 0.1rem solid
        ${(props) =>
          props.color
            ? Color(props.theme.colors[props.color]).darken(0.3).hex()
            : Color(props.theme.colors.primary).darken(0.3).hex()};
    }
  }
`;

const outlinedStyle = css<ButtonProps>`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.primary};

  &:not(:disabled):hover {
    background-color: ${(props) =>
      props.color
        ? Color(props.theme.colors[props.color]).lightness(95).hex()
        : Color(props.theme.colors.primary).darken(1).hex()};
  }
`;

const variantStyle = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'contained':
      return containedStyle;
    case 'outlined':
      return outlinedStyle;
    default:
      return containedStyle;
  }
};

const smallStyle = css`
  font-size: 1.3rem;
  height: 2.6rem;
  padding: 0 1.3rem;
  border-radius: 1.3rem;
`;
const mediumStyle = css`
  font-size: 1.6rem;
  height: 3.2rem;
  padding: 0 1.6rem;
  border-radius: 1.6rem;
`;
const largeStyle = css`
  font-size: 1.9rem;
  height: 3.8rem;
  padding: 0 1.9rem;
  border-radius: 1.9rem;
`;

const sizeStyle = (variant: ButtonProps['size']) => {
  switch (variant) {
    case 'small':
      return smallStyle;
    case 'medium':
      return mediumStyle;
    case 'large':
      return largeStyle;
    default:
      return mediumStyle;
  }
};

const disabledStyle = css`
  opacity: 0.4;
  cursor: not-allowed;
`;

export const StyledButton = styled.button<ButtonProps>`
  ${baseStyle};
  ${(props) => variantStyle(props.variant)}
  ${(props) => sizeStyle(props.size)}
  ${(props) => props.disabled && disabledStyle}
`;
