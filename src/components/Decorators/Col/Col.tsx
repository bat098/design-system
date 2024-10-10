import styled from 'styled-components';
import { RowProps } from '../Row/Row.types';

const Col = ({ children, style }: RowProps) => {
  return <Root style={style}>{children}</Root>;
};

export default Col;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  flex: 1;
  align-items: center;
`;
