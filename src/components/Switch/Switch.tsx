import { Ball, Root, Wrapper } from './Switch.styled';
import { SwitchProps } from './Switch.types';
import { getDefaultPropsFromTheme } from '../../helpers/helpers';

const defaultPropsFromTheme = getDefaultPropsFromTheme('Switch');

const Switch = (props: SwitchProps) => {
  const mergedProps: SwitchProps = { ...defaultPropsFromTheme, ...props };
  const {
    size = 'medium',
    color = 'primary',
    checked = false,
    onChange = () => {},
    disabled = false,
    innerRef = null,
  } = mergedProps;

  return (
    <Wrapper color={color} size={size} checked={checked} disabled={disabled}>
      <Ball checked={checked} size={size} />
      <Root
        type="checkbox"
        checked={checked}
        onChange={disabled ? () => {} : onChange}
        disabled={disabled}
        ref={innerRef}
      />
    </Wrapper>
  );
};

export default Switch;
