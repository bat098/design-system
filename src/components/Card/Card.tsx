import { getDefaultPropsFromTheme } from '../../helpers/helpers';
import { StyledCard } from './Card.styled';
import { CardInterface } from './Card.types';

const Card = (props: CardInterface) => {
  const defaultPropsFromTheme = getDefaultPropsFromTheme('Card');
  const mergedProps = { ...defaultPropsFromTheme, ...props };
  const { children } = mergedProps;

  return <StyledCard>{children}</StyledCard>;
};

export default Card;
