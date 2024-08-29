import styled, { css } from 'styled-components';
import {
  BallProps,
  pickColorType,
  pickSizeType,
  WrapperProps,
} from './Switch.types';

const baseWidth = '1.6rem';
const factor = 1.25;

const pickColor: pickColorType = (color, checked) => css`
  background-color: ${(props) =>
    checked
      ? color
        ? props.theme.colors[color]
        : props.theme.colors.primary
      : props.theme.colors.lightGray};
`;

const smallWrapperStyle = css`
  width: ${`calc(2 * ${baseWidth} / ${factor})`};
  height: ${`calc(${baseWidth} / ${factor})`};
`;

const mediumWrapperStyle = css`
  width: ${`calc(2 * ${baseWidth})`};
  height: ${baseWidth};
`;

const largeWrapperStyle = css`
  width: ${`calc(2 * ${baseWidth} * ${factor})`};
  height: ${`calc(${baseWidth} * ${factor})`};
`;

const pickSize: pickSizeType = (size) => {
  switch (size) {
    case 'small':
      return smallWrapperStyle;
    case 'medium':
      return mediumWrapperStyle;
    case 'large':
      return largeWrapperStyle;

    default:
      return mediumWrapperStyle;
  }
};

const pickDisableStyle = css`
  opacity: 0.4;
`;

export const Wrapper = styled.div<WrapperProps>`
  position: relative;
  border-radius: 2rem;
  padding: 0.2rem;
  box-sizing: content-box;
  transition: all 0.3s ease-in-out;
  ${(props) => pickColor(props.color, props.checked)};
  ${(props) => pickSize(props.size)};
  ${(props) => props.disabled && pickDisableStyle}
`;

export const Root = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  appearance: none;
  width: 100%;
  height: 100%;
  border: none;
  background-color: transparent;
  padding: 0;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

const ballActiveStyle = css`
  transform: translateX(100%);
`;

const smallBallStyle = css`
  width: ${`calc(${baseWidth} / ${factor})`};
  height: ${`calc(${baseWidth} / ${factor})`};
`;

const mediumBallStyle = css`
  width: ${baseWidth};
  height: ${baseWidth};
`;

const largeBallStyle = css`
  width: ${`calc(${baseWidth} * ${factor})`};
  height: ${`calc(${baseWidth} * ${factor})`};
`;

const pickBallSize: pickSizeType = (size) => {
  switch (size) {
    case 'small':
      return smallBallStyle;
    case 'medium':
      return mediumBallStyle;
    case 'large':
      return largeBallStyle;
    default:
      return mediumBallStyle;
  }
};
export const Ball = styled.div<BallProps>`
  ${(props) => pickBallSize(props.size)};
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 50%;
  transition: all 0.3s ease-in-out;
  ${(props) => props.checked && ballActiveStyle}
`;
