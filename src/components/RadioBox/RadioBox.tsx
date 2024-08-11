import { RadioBoxType } from './RadioBox.types';
import { VscCheck } from 'react-icons/vsc';
import { useRef } from 'react';
import { CustomInput, Input, Wrapper } from './RadioBox.styled';

const RadioBox = (props: RadioBoxType) => {
  const {
    disabled = false,
    value = '',
    onChange = () => {},
    size = 'medium',
    isError = false,
    color = 'primary',
    checked = false,
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
        type="radio"
        value={value}
        onChange={onChange}
        disabled={disabled}
        checked={checked}
        {...rest}
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
    </Wrapper>
  );
};

export default RadioBox;
