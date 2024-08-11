import styled from 'styled-components';
import { RowProps } from './Row.types';

const Row = ({ children }: RowProps) => {
  return <Root>{children}</Root>;
};

export default Row;

const Root = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;
