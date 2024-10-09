import styled, { css } from 'styled-components';
import { componenetType, HeaderInterface, stylesType } from './Header.types';

export const StyledH1 = css`
  font-size: 2rem;
  margin-bottom: 1rem;
`;
export const StyledH2 = css`
  font-size: 1.8rem;
  margin-bottom: 0.9rem;
`;
export const StyledH3 = css`
  font-size: 1.6rem;
  margin-bottom: 0.8rem;
`;
export const StyledH4 = css`
  font-size: 1.4rem;
  margin-bottom: 0.7rem;
`;
export const StyledH5 = css`
  font-size: 1.2rem;
  margin-bottom: 0.6rem;
`;
export const StyledH6 = css`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const styles: stylesType = {
  h1: StyledH1,
  h2: StyledH2,
  h3: StyledH3,
  h4: StyledH4,
  h5: StyledH5,
  h6: StyledH6,
};

export const getStyledComponent = (component: componenetType) => {
  const StyledComponent = styled(component)<HeaderInterface>`
    ${(props) => (props.variant ? styles[props.variant] : styles[component])}
    color: ${(props) =>
      props.color ? props.theme.colors[props.color] : props.theme.colors.black};
    margin-top: 0;
    font-weight: bold;
  `;

  return StyledComponent;
};