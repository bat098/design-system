import styled, { css } from 'styled-components';
import { ElementProps } from './Element.types';

const Element = (props: ElementProps) => {
  const { children } = props;
  return <Root {...props}>{children}</Root>;
};

export default Element;

const leftStyle = css`
  left: 0;
`;

const rightStyle = css`
  right: 0;
`;

const Root = styled.div<ElementProps>`
  position: absolute;
  z-index: -1;
  top: 0;
  width: 3.2rem;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.colors.gray};
  ${(props) => (props.position === 'left' ? leftStyle : rightStyle)};
`;
