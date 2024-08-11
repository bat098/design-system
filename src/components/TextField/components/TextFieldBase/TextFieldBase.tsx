import styled from 'styled-components';
import Element from '../Element/Element';
import TextFieldInput from '../TextFieldInput/TextFieldInput';
import { TextFieldProps } from '../../TextField.types';

const TextFieldBase = (props: TextFieldProps) => {
  const { elementLeft, elementRight } = props;

  const textFieldInput = <TextFieldInput {...props} />;
  return (
    <>
      {elementLeft || elementRight ? (
        <Wrapper>
          {elementLeft && <Element position="left">{elementLeft}</Element>}
          {textFieldInput}
          {elementRight && <Element position="right">{elementRight}</Element>}
        </Wrapper>
      ) : (
        textFieldInput
      )}
    </>
  );
};

export default TextFieldBase;

const Wrapper = styled.div`
  position: relative;
  height: fit-content;
`;
