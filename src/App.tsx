import { useState } from 'react';
import { RadioBoxGroupProps } from './components/RadioBoxGroup/RadioBoxGroup.types';
import RadioBox from './components/RadioBox/RadioBox';

const App = () => {
  const items: RadioBoxGroupProps['items'] = [
    {
      value: 'apple',
      label: 'apple',
    },
    {
      value: 'orange',
      label: 'orange',
    },
  ];

  const [val, setVal] = useState(items[1].value);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '1rem',
          flexWrap: 'wrap',
          margin: '20px',
        }}
      >
        {items.map(({ value, label }, index) => (
          <RadioBox
            key={index}
            label={label}
            value={value}
            checked={value === val}
            onChange={handleOnChange}
            name="fruit"
          />
        ))}
      </div>
    </>
  );
};

export default App;
