import { CheckBoxType } from './Checkbox.types';
import { VscCheck } from 'react-icons/vsc';
import { useRef } from 'react';
import { CustomInput, Input, Wrapper } from './Checkbox.styled';

const Checkbox = (props: CheckBoxType) => {
  const {
    disabled = false,
    value = false,
    onChange,
    size = 'medium',
    isError = false,
    color = 'primary',
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <Wrapper onClick={handleClick}>
      <Input
        ref={inputRef}
        id={props.id}
        type="checkbox"
        checked={value}
        onChange={onChange}
        disabled={disabled}
        {...rest}
      />
      <CustomInput
        value={value}
        size={size}
        disabled={disabled}
        isError={isError}
        color={color}
      >
        <VscCheck />
      </CustomInput>
    </Wrapper>
  );
};

export default Checkbox;
