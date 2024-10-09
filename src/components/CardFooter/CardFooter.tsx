import { CardFooterStyled } from './CardFooter.styled';
import { CardFooterInterface } from './CardFooter.types';

const CardFooter = (props: CardFooterInterface) => {
  const { children } = props;

  return <CardFooterStyled>{children}</CardFooterStyled>;
};

export default CardFooter;
