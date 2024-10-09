import { StyledCardBody } from './CardBody.styled';
import { CardBodyInterface } from './CardBody.types';

const CardBody = (props: CardBodyInterface) => {
  const { children } = props;
  return <StyledCardBody>{children}</StyledCardBody>;
};

export default CardBody;
