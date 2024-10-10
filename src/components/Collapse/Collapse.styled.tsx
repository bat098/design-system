import styled from 'styled-components';
import { CollapseInterface } from './Collapse.types';

export const StyledCollapse = styled.div<CollapseInterface>`
  display: grid;
  grid-template-rows: ${(props) => (props.isOpen ? '1fr' : '0fr')};
  transition: grid-template-rows 0.3s ease-in-out;
`;

export const Content = styled.div`
  overflow: hidden;
`;
