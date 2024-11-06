import styled, { css } from 'styled-components';
import { BadgeInterface } from './Badge.types';
import { getContrastColor } from '../../helpers/helpers';

const containedStyle = css<BadgeInterface>`
  background-color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
  color: ${(props) =>
    props.color
      ? getContrastColor(props.theme.colors[props.color])
      : getContrastColor(props.theme.colors.primary)};
`;

const outlinedStyle = css<BadgeInterface>`
  background-color: ${(props) => props.theme.colors.white};
  color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.primary};
`;

const variantStyle = (variant: BadgeInterface['variant']) => {
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
  font-size: 1rem;
`;

const mediumStyle = css`
  font-size: 1.3rem;
`;

const largeStyle = css`
  font-size: 1.6rem;
`;

const sizeStyle = (size: BadgeInterface['size']) => {
  switch (size) {
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

const commonStyles = css<BadgeInterface>`
  display: inline-block;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  letter-spacing: 0.1rem;
  font-weight: 500;
  border: 0.1rem solid
    ${(props) =>
      props.color
        ? props.theme.colors[props.color]
        : props.theme.colors.primary};
`;

export const Root = styled.div<BadgeInterface>`
  ${commonStyles}
  text-transform: uppercase;
  ${(props) => variantStyle(props.variant)}
  ${(props) => sizeStyle(props.size)}
`;
