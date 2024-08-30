import { ButtonProps } from './Button.types';
import { getDefaultPropsFromTheme } from '../../helpers/helpers';
import { StyledButton } from './Button.styled';

const Button = (props: ButtonProps) => {
  const defaultPropsFromTheme = getDefaultPropsFromTheme('Button');

  const mergedProps = { ...props, ...defaultPropsFromTheme };

  const {
    type = 'button',
    variant = 'contained',
    size = 'medium',
    color = 'primary',
    iconStart,
    iconEnd,
    children,
    ...rest
  } = mergedProps;

  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      color={color}
      {...rest}
    >
      {iconStart}
      {children}
      {iconEnd}
    </StyledButton>
  );
};

export default Button;
