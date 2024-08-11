import styled from 'styled-components';
import { DecoratorCenterType } from './DecoratorCenter.types';

const DecoratorCenter = ({ children }: DecoratorCenterType) => {
  return <Root>{children}</Root>;
};

export default DecoratorCenter;

const Root = styled.div`
  /* height: calc(100vh - 2rem); */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
