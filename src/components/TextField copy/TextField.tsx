import styled, { css } from 'styled-components';
import { TextFieldProps } from './TextField.types';

const TextField = (props: TextFieldProps) => {
  const {
    inputAddonLeft,
    inputAddonRight,
    inputElementLeft,
    inputElementRight,
  } = props;

  return (
    <>
      {inputAddonLeft ||
      inputAddonRight ||
      inputElementLeft ||
      inputElementRight ? (
        <Root>
          {inputAddonLeft && <InputAddonLeft>{inputAddonLeft}</InputAddonLeft>}
          {inputElementLeft && (
            <InputElementLeft>{inputElementLeft}</InputElementLeft>
          )}
          <StyledTextField
            inputAddonLeft={inputAddonLeft}
            inputAddonRight={inputAddonRight}
            inputElementLeft={inputElementLeft}
            inputElementRight={inputElementRight}
            {...props}
          />
          {inputElementRight && (
            <InputElementRight>{inputElementRight}</InputElementRight>
          )}
          {inputAddonRight && (
            <InputAddonRight>{inputAddonRight}</InputAddonRight>
          )}
        </Root>
      ) : (
        <StyledTextField {...props} />
      )}
    </>
  );
};

export default TextField;

const Root = styled.div`
  display: flex;
  position: relative;
`;

const InptElementRootStyle = css`
  position: absolute;
  top: 0;
  height: 100%;
  width: 3.2rem;
  padding: 0 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InputElementLeft = styled.div`
  ${InptElementRootStyle};
  left: 0;
`;

const InputElementRight = styled.div`
  ${InptElementRootStyle};
  right: 0;
`;

const InputAddonRootStyle = css`
  background-color: ${(props) => props.theme.colors.lightGray};
  font-size: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.8rem;
  border-top: 0.1rem solid ${(props) => props.theme.colors.gray};
  border-bottom: 0.1rem solid ${(props) => props.theme.colors.gray};
`;

const inputAddonLeftStyle = css`
  border-radius: 0.4rem 0 0 0.4rem;
  border-left: 0.1rem solid ${(props) => props.theme.colors.gray};
`;

const inputAddonRightStyle = css`
  border-radius: 0rem 0.4rem 0.4rem 0;
  border-right: 0.1rem solid ${(props) => props.theme.colors.gray};
`;

const InputAddonLeft = styled.div`
  ${InputAddonRootStyle}
  ${inputAddonLeftStyle}
`;

const InputAddonRight = styled.div`
  ${InputAddonRootStyle}
  ${inputAddonRightStyle}
`;

const inputLeftStyle = css`
  border-radius: 0rem 0.4rem 0.4rem 0rem;
`;

const inputRightStyle = css`
  border-radius: 0.4rem 0 0 0.4rem;
`;

const inputBorderRadius = css`
  border-radius: 0.4rem;
`;

const pickBorderStyle = (
  inputAddonLeft: TextFieldProps['inputAddonLeft'],
  inputAddonRight: TextFieldProps['inputAddonRight']
) => {
  if (!inputAddonLeft && !inputAddonRight) {
    return inputBorderRadius;
  } else if (inputAddonLeft && !inputAddonRight) {
    return inputLeftStyle;
  } else if (!inputAddonLeft && inputAddonRight) {
    return inputRightStyle;
  }
};

const inputPadding = css`
  padding: 0 3.2rem;
`;

const inputPaddingLeft = css`
  padding: 0 0.8rem 0 3.2rem;
`;

const inputPaddingRight = css`
  padding: 0 3.2rem 0 0.8rem;
`;

const inputBasePadding = css`
  padding: 0 0.8rem;
`;

const pickPaddingStyle = (
  inputElementLeft: TextFieldProps['inputElementLeft'],
  inputElementRight: TextFieldProps['inputElementRight']
) => {
  if (!inputElementLeft && !inputElementRight) {
    return inputBasePadding;
  } else if (inputElementLeft && inputElementRight) {
    return inputPadding;
  } else if (inputElementLeft && !inputElementRight) {
    return inputPaddingLeft;
  } else if (!inputElementLeft && inputElementRight) {
    return inputPaddingRight;
  }
};

const StyledTextField = styled.input<TextFieldProps>`
  width: 100%;
  position: relative;
  font-size: 1.6rem;
  line-height: 1.6rem;
  height: 3.2rem;

  outline: none;
  border: 0.1rem solid ${(props) => props.theme.colors.gray};
  transition: all 0.3s ease-in-out;
  &:focus {
    border: 0.1rem solid ${(props) => props.theme.colors.primary};
    box-shadow: 0 0 0 0.1rem ${(props) => props.theme.colors.primary};
  }
  ::placeholder {
    color: ${(props) => props.theme.colors.gray};
  }

  ${(props) => pickBorderStyle(props.inputAddonLeft, props.inputAddonRight)};
  ${(props) =>
    pickPaddingStyle(props.inputElementLeft, props.inputElementRight)};
`;
