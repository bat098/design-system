import RadioBox from '../RadioBox/RadioBox';
import { Root, Row } from './Radio.styled';
import { HandleChangeType, RadioBoxGroupType } from './RadioBoxGroup.types';

const RadioBoxGroup = (props: RadioBoxGroupType) => {
  const { onChange = () => {}, value: val, items = [], name = '' } = props;

  const handleChange: HandleChangeType = (e) => {
    onChange(e.target.value);
  };
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
            onChange={handleChange}
            checked={val === value}
          />
          {label}
        </Row>
      ))}
    </Root>
  );
};

export default RadioBoxGroup;
