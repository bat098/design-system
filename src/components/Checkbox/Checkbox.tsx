import styled from 'styled-components';
import { CheckBoxType, CheckBoxWithChildren } from './Checkbox.types';

import { VscCheck } from 'react-icons/vsc';

const Checkbox = (props: CheckBoxType) => {
  const hasChildren = (props: CheckBoxType): props is CheckBoxWithChildren => {
    return (props as CheckBoxWithChildren).children !== undefined;
  };

  const { value = false, onChange } = props;

  const isChildren = hasChildren(props);

  console.log(props);

  return (
    <>
      {isChildren ? (
        <Label>
          <Input type="checkbox" checked={value} onChange={onChange} />
          <CustomInput value={value}>
            <VscCheck />
          </CustomInput>
          {props.children}
        </Label>
      ) : (
        <div>
          <Input
            id={props.id}
            type="checkbox"
            checked={value}
            onChange={onChange}
          />
          <CustomInput value={value}>
            <VscCheck />
          </CustomInput>
        </div>
      )}
    </>
  );
};

export default Checkbox;

const Label = styled.label``;

const CustomInput = styled.div<{ value: boolean }>`
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) =>
    props.value ? props.theme.colors.primary : props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1.6rem;
  height: 1.6rem;
  font-size: 1.6rem;
  border: 0.1rem solid
    ${(props) =>
      props.value ? props.theme.colors.primary : props.theme.colors.gray};
  border-radius: 0.4rem;
`;

const Input = styled.input<CheckBoxType>`
  appearance: none;
  width: 0;
  height: 0;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  opacity: 0;
  position: absolute;
`;
