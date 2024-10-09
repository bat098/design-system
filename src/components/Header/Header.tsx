import { getDefaultPropsFromTheme } from '../../helpers/helpers';
import { getStyledComponent } from './Header.styled';
import { HeaderInterface } from './Header.types';

const Header = (props: HeaderInterface) => {
  const defaultPropsFromTheme = getDefaultPropsFromTheme('Header');
  const mergedProps = { ...defaultPropsFromTheme, ...props };

  const {
    children,
    component = 'h1',
    variant = component,
    color,
  } = mergedProps;

  const StyledComponent = getStyledComponent(component);

  return (
    <StyledComponent variant={variant} color={color}>
      {children}
    </StyledComponent>
  );
};

export default Header;
