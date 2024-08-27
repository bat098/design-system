import { useState } from 'react';
import Select from './components/Select/Select';
import { SelectProps } from './components/Select/Select.types';

const options: SelectProps['options'] = [
  {
    label: 'red',
    value: 'red',
  },
  {
    label: 'blue',
    value: 'blue',
  },
];

const App = () => {
  const [value, setValue] = useState(options[0].value);

  const handleOnChange = (e: string) => {
    setValue(e);
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
        <Select
          options={options}
          value={value}
          onChange={handleOnChange}
          size="small"
        />
        <Select
          options={options}
          value={value}
          onChange={handleOnChange}
          size="medium"
        />
        <Select
          options={options}
          value={value}
          onChange={handleOnChange}
          size="large"
        />
      </div>
    </>
  );
};

export default App;
