import styled from 'styled-components';
import { CardInterface } from './Card.types';

export const StyledCard = styled.div<CardInterface>`
  border-radius: ${(props) => props.theme.base.borderRadius};
  box-shadow: ${(props) => props.theme.base.boxShadow};
  background-color: ${(props) => props.theme.colors.white};
`;
