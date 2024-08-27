import { useRef, useState } from 'react';
import { getDefaultPropsFromTheme } from '../../helpers/helpers';
import { Root, Wrapper, Options, Option, Icon } from './Select.styled';
import { SelectProps } from './Select.types';

import { useOnClickOutside } from 'usehooks-ts';
import { VscChevronDown } from 'react-icons/vsc';
const defaultPropsFromTheme = getDefaultPropsFromTheme('Select');

const Select = (props: SelectProps) => {
  const mergedProps: SelectProps = { ...defaultPropsFromTheme, ...props };

  const {
    value = '',
    onChange = () => {},
    options = [],
    size = 'medium',
    icon = <VscChevronDown />,
    disabled = false,
    isError = false,
  } = mergedProps;

  const [isOpen, setIsOpen] = useState(false);

  const ref = useRef(null);

  const handleClickOutside = () => {
    setIsOpen(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (value: string) => {
    setIsOpen(false);
    onChange(value);
  };

  return (
    <Wrapper ref={ref} size={size} disabled={disabled}>
      <Root
        onClick={disabled ? () => {} : toggleOpen}
        isOpen={isOpen}
        isError={isError}
        size={size}
      >
        {value}
      </Root>
      <Icon onClick={disabled ? () => {} : toggleOpen}>{icon}</Icon>
      {isOpen && (
        <Options>
          {options.map(({ label, value }, index) => (
            <Option onClick={() => handleOptionClick(value)} key={index}>
              {label}
            </Option>
          ))}
        </Options>
      )}
    </Wrapper>
  );
};

export default Select;
