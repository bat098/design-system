import styled, { css } from 'styled-components';
import { DividerInterface, PickOrientation } from './Divider.types';

const horizontalStyles = css`
  width: 100%;
  height: 0.1rem;
`;

const verticalStyles = css`
  height: 100%;
  width: 0.1rem;
`;

const pickOrientationStyles: PickOrientation = (orientation) => {
  switch (orientation) {
    case 'horizontal':
      return horizontalStyles;
    case 'vertical':
      return verticalStyles;
    default:
      return horizontalStyles;
  }
};

export const StyledDivider = styled.div<DividerInterface>`
  ${(props) => pickOrientationStyles(props.orientation)}
  background-color: ${(props) =>
    props.color ? props.theme.colors[props.color] : props.theme.colors.black};
`;
