import RadioBox from '../RadioBox/RadioBox';
import { Root, Row } from './Radio.styled';
import { RadioBoxGroupProps } from './RadioBoxGroup.types';

const RadioBoxGroup = (props: RadioBoxGroupProps) => {
  const { onChange = () => {}, value: val = '', items = [], name = '' } = props;

  return (
    <Root>
      {items.map(({ label, value, color, size }, index) => (
        <Row key={index}>
          <RadioBox
            size={size}
            color={color}
            name={name}
            key={index}
            value={value}
            onChange={onChange}
            checked={val === value}
            label={label}
          />
        </Row>
      ))}
    </Root>
  );
};

export default RadioBoxGroup;
