import { CardHeaderInterface } from './CardHeader.types';
import { CardHeaderStyled } from './CardHeader.styled';
import { getDefaultPropsFromTheme } from '../../helpers/helpers';

const CardHeader = (props: CardHeaderInterface) => {
  const defaultPropsFromTheme = getDefaultPropsFromTheme('CardHeader');
  const mergedProps = { ...defaultPropsFromTheme, ...props };
  const { children } = mergedProps;

  return <CardHeaderStyled>{children}</CardHeaderStyled>;
};

export default CardHeader;
