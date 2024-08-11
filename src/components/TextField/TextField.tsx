import styled from 'styled-components';
import { TextFieldProps } from './TextField.types';
import Addon from './components/Addon/Addon';
import TextFieldBase from './components/TextFieldBase/TextFieldBase';

const TextField = (props: TextFieldProps) => {
  const { addonLeft, addonRight } = props;

  const textFieldBase = <TextFieldBase {...props} />;
  return (
    <>
      {addonLeft || addonRight ? (
        <Root>
          {addonLeft && <Addon position="left">{addonLeft}</Addon>}
          {textFieldBase}
          {addonRight && <Addon position="right">{addonRight}</Addon>}
        </Root>
      ) : (
        textFieldBase
      )}
    </>
  );
};

export default TextField;

const Root = styled.div`
  display: flex;
  height: fit-content;
`;
