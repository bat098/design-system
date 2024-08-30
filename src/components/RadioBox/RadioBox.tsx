import { RadioBoxProps } from './RadioBox.types';
import { VscCheck } from 'react-icons/vsc';
import { CustomInput, Input, Wrapper } from './RadioBox.styled';
import { getDefaultPropsFromTheme } from '../../helpers/helpers';

const RadioBox = (props: RadioBoxProps) => {
  const defaultPropsFromTheme = getDefaultPropsFromTheme('CheckBox');

  const mergedProps = { ...defaultPropsFromTheme, ...props };
  const {
    disabled = false,
    value = '',
    onChange = () => {},
    size = 'medium',
    isError = false,
    color = 'primary',
    checked = false,
    innerRef = null,
    id = '',
    name = '',
    label = '',
  } = mergedProps;

  return (
    <Wrapper>
      <Input
        id={id}
        ref={innerRef}
        type="radio"
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        name={name}
      />
      <CustomInput
        value={value}
        size={size}
        disabled={disabled}
        isError={isError}
        color={color}
        checked={checked}
      >
        <VscCheck />
      </CustomInput>
      {label}
    </Wrapper>
  );
};

export default RadioBox;
