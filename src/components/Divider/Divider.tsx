import { getDefaultPropsFromTheme } from '../../helpers/helpers';
import { StyledDivider } from './Divider.styled';
import { DividerInterface } from './Divider.types';

const Divider = (props: DividerInterface) => {
  const defaultPropsFromTheme = getDefaultPropsFromTheme('Divider');
  const mergedProps = { ...defaultPropsFromTheme, ...props };
  const { orientation = 'horizontal', color } = mergedProps;

  return <StyledDivider orientation={orientation} color={color} />;
};

export default Divider;
