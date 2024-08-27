import styled, { css } from 'styled-components';
import {
  PickFontSizeType,
  PickSizeType,
  SelectRootProps,
  SelectWrapperProps,
} from './Select.types';

const smallStyle = css`
  height: 2.8rem;
  padding: 0 2.8rem 0 0.8rem;
`;
const mediumStyle = css`
  height: 3.2rem;
  padding: 0 3.2rem 0 0.8rem;
`;
const largeStyle = css`
  height: 3.6rem;
  padding: 0 3.6rem 0 0.8rem;
`;

const smallFontStyle = css`
  font-size: 1.4rem;
`;
const mediumFontStyle = css`
  font-size: 1.6rem;
`;
const largeFontStyle = css`
  font-size: 1.8rem;
`;

const pickSizeStyle: PickSizeType = (size) => {
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

const pickFontSizeStyle: PickFontSizeType = (size) => {
  switch (size) {
    case 'small':
      return smallFontStyle;
    case 'medium':
      return mediumFontStyle;
    case 'large':
      return largeFontStyle;
    default:
      return mediumFontStyle;
  }
};
const disabledStyle = css`
  opacity: 0.4;
`;

export const Wrapper = styled.div<SelectWrapperProps>`
  width: 100%;
  position: relative;
  ${(props) => pickFontSizeStyle(props.size)}
  ${(props) => props.disabled && disabledStyle}
`;

const openStyle = css`
  box-shadow: 0 0 0 0.1rem ${(props) => props.theme.colors.primary};
  border: 0.1rem solid ${(props) => props.theme.colors.primary};
`;

const errorStyle = css`
  border: 0.1rem solid ${(props) => props.theme.colors.danger};
`;

export const Root = styled.div<SelectRootProps>`
  width: 100%;
  position: relative;
  outline: none;
  border: 0.1rem solid ${(props) => props.theme.colors.gray};
  transition: all 0.3s ease-in-out;
  ${(props) => props.isOpen && openStyle}
  ${(props) => pickSizeStyle(props.size)}
  display: flex;
  align-items: center;
  border-radius: ${(props) => props.theme.base.borderRadius};
  ${(props) => !props.isOpen && props.isError && errorStyle}
`;

export const Icon = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.6rem;
  z-index: 2;
`;

export const Options = styled.div`
  position: absolute;
  width: 100%;
  bottom: 0;
  transform: translateY(calc(100% + 0.1rem));
  border: 0.1rem solid ${(props) => props.theme.colors.gray};
  z-index: 1;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: ${(props) => props.theme.base.borderRadius};
`;

export const Option = styled.div`
  padding: 0 0.8rem;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.white};
  }
`;
