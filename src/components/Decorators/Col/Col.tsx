import styled from 'styled-components';
import { RowProps } from '../Row/Row.types';

const Col = ({ children }: RowProps) => {
  return <Root>{children}</Root>;
};

export default Col;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4rem;
  flex: 1;
  align-items: center;
`;
