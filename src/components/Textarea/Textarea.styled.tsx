import styled, { css } from 'styled-components';
import { TextareaProps } from './Textarea.types';

const disabledStyle = css`
  opacity: 0.4;
`;

const errorStyle = css`
  border: 0.1rem solid ${(props) => props.theme.colors.danger};
`;

export const Root = styled.textarea<TextareaProps>`
  padding: 1rem;
  font-size: 1.6rem;
  border-radius: 0.4rem;
  resize: ${(props) => props.resize};
  border: 0.1rem solid ${(props) => props.theme.colors.gray};
  outline: none;
  transition-property: border, box-shadow;
  transition-duration: 0.3s;
  transition-timing-function: ease-out;
  width: 100%;
  ${(props) => props.isError && errorStyle}
  ${(props) => props.disabled && disabledStyle}
  &:focus {
    box-shadow: 0 0 0 0.1rem ${(props) => props.theme.colors.primary};
    border: 0.1rem solid ${(props) => props.theme.colors.primary};
  }
`;
