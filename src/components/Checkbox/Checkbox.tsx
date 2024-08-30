import { CheckBoxProps } from './Checkbox.types';
import { VscCheck } from 'react-icons/vsc';

import { CustomInput, Input, Wrapper } from './Checkbox.styled';
import { getDefaultPropsFromTheme } from '../../helpers/helpers';

const Checkbox = (props: CheckBoxProps) => {
  const defaultPropsFromTheme = getDefaultPropsFromTheme('CheckBox');

  const mergedProps = { ...props, ...defaultPropsFromTheme };
  const {
    disabled = false,
    checked = false,
    onChange = () => {},
    size = 'medium',
    isError = false,
    color = 'primary',
    innerRef = null,
    ...rest
  } = mergedProps;

  return (
    <Wrapper>
      <CustomInput
        checked={checked}
        size={size}
        disabled={disabled}
        isError={isError}
        color={color}
      >
        <VscCheck />
      </CustomInput>
      <Input
        ref={innerRef}
        id={props.id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
    </Wrapper>
  );
};

export default Checkbox;
