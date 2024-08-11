import styled, { css } from 'styled-components';
import { RadioBoxType, CustomInpuType, PickSizeType } from './RadioBox.types';

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

export const CustomInput = styled.div<CustomInpuType>`
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
`;

export const Input = styled.input<RadioBoxType>`
  appearance: none;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  opacity: 0;
  position: absolute;
`;
