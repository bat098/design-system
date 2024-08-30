import styled, { css } from 'styled-components';
import { CustomInpuProps, InputProps, PickSizeType } from './Checkbox.types';

const disabledStyle = css`
  opacity: 0.4;
  cursor: not-allowed;
`;

const errorStyle = css`
  border: 0.1rem solid ${(props) => props.theme.colors.danger};
  background-color: ${(props) => props.theme.colors.white};
`;

const smallStyle = css`
  width: 1.4rem;
  height: 1.4rem;
  font-size: 1.4rem;
`;

const mediumStyle = css`
  width: 1.6rem;
  height: 1.6rem;
  font-size: 1.6rem;
`;

const largeStyle = css`
  width: 1.8rem;
  height: 1.8rem;
  font-size: 1.8rem;
`;

const pickSizeStyle: PickSizeType = (size) => {
  switch (size) {
    case 'small':
      return smallStyle;
    case 'medium':
    case undefined:
      return mediumStyle;
    case 'large':
      return largeStyle;
  }
};

export const Wrapper = styled.div`
  position: relative;
`;

export const CustomInput = styled.div<CustomInpuProps>`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.checked
      ? props.color
        ? props.theme.colors[props.color]
        : props.theme.colors.primary
      : props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.1rem solid
    ${(props) =>
      props.checked
        ? props.color
          ? props.theme.colors[props.color]
          : props.theme.colors.primary
        : props.theme.colors.gray};
  border-radius: 0.4rem;
  ${(props) => pickSizeStyle(props.size)}
  ${(props) => props.disabled && disabledStyle}
  ${(props) => props.isError && errorStyle}
  position: relative;
  z-index: 1;
`;

export const Input = styled.input<InputProps>`
  appearance: none;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  opacity: 0;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;
