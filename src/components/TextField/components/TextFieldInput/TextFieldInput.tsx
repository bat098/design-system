import styled, { css } from 'styled-components';

import { TextFieldProps } from '../../TextField.types';
import { PickSizeType, PickType, SideType } from './TextFieldInput.types';

const TextFieldInput = (props: TextFieldProps) => {
  const { type = 'text', size = 'medium', ...rest } = props;

  return <Root size={size} type={type} {...rest} />;
};

export default TextFieldInput;

const bothStyle = css`
  border-radius: 0rem;
`;
const noneStyle = css`
  border-radius: 0.4rem;
`;
const leftStyle = css`
  border-radius: 0 0.4rem 0.4rem 0;
`;
const rightStyle = css`
  border-radius: 0.4rem 0 0 0.4rem;
`;

const pickAddonStyle = (addonType: SideType) => {
  switch (addonType) {
    case 'both':
      return bothStyle;
    case 'none':
      return noneStyle;
    case 'left':
      return leftStyle;
    case 'right':
      return rightStyle;
  }
};

const elementBothStyle = css`
  padding: 0 3.2rem;
`;
const elementNoneStyle = css`
  padding: 0 0.8rem;
`;
const elementLeftStyle = css`
  padding: 0 0.8rem 0 3.2rem;
`;
const elementRightStyle = css`
  padding: 0 3.2rem 0 0.8rem;
`;

const pickElementStyle = (elementType: SideType) => {
  switch (elementType) {
    case 'both':
      return elementBothStyle;
    case 'none':
      return elementNoneStyle;
    case 'left':
      return elementLeftStyle;
    case 'right':
      return elementRightStyle;
  }
};

const pickType: PickType = (isLeft, isRight) => {
  if (isLeft && isRight) {
    return 'both';
  } else if (!isLeft && !isRight) {
    return 'none';
  } else if (isLeft && !isRight) {
    return 'left';
  } else if (!isLeft && isRight) {
    return 'right';
  } else return 'none';
};

const smallStyle = css`
  height: 2.8rem;
  font-size: 1.4rem;
`;
const mediumStyle = css`
  height: 3.2rem;
  font-size: 1.6rem;
`;
const largeStyle = css`
  height: 3.6rem;
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

const Root = styled.input<TextFieldProps>`
  position: relative;
  outline: none;
  border: 0.1rem solid ${(props) => props.theme.colors.gray};
  transition: all 0.3s ease-in-out;
  &:focus {
    box-shadow: 0 0 0 0.1rem ${(props) => props.theme.colors.primary};
    border: 0.1rem solid ${(props) => props.theme.colors.primary};
  }
  ${(props) => pickSizeStyle(props.size)}
  ${(props) => pickAddonStyle(pickType(!!props.addonLeft, !!props.addonRight))}
  ${(props) =>
    pickElementStyle(pickType(!!props.elementLeft, !!props.elementRight))}
`;
