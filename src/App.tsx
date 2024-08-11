import { useState } from 'react';
import RadioBoxGroup from './components/RadioBoxGroup/RadioBoxGroup';
import { RadioBoxGroupType } from './components/RadioBoxGroup/RadioBoxGroup.types';

const App = () => {
  const [value, setValue] = useState('cat');

  const items: RadioBoxGroupType['items'] = [
    {
      label: 'cat',
      value: 'cat',
      color: 'danger',
    },
    {
      label: 'dog',
      value: 'dog',
    },
  ];

  return (
    <>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <RadioBoxGroup
          items={items}
          value={value}
          name="group2"
          onChange={setValue}
        />
      </div>
    </>
  );
};

export default App;
