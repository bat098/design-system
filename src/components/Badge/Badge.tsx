import { Root } from './Badge.styled';
import { BadgeInterface } from './Badge.types';

const Badge = (props: BadgeInterface) => {
  const { children, color, variant, size } = props;
  return (
    <Root color={color} variant={variant} size={size}>
      {children}
    </Root>
  );
};

export default Badge;
