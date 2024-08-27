import { VscChevronDown } from 'react-icons/vsc';
import { SelectProps } from './Select.types';

export const selectDefaultProps: SelectProps = {
  value: '',
  onChange: () => {},
  options: [],
  size: 'small',
  icon: <VscChevronDown />,
  disabled: false,
  isError: false,
};
