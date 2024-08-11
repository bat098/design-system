import { useState } from 'react';
import Checkbox from './components/Checkbox/Checkbox';

const App = () => {
  const [value, setValue] = useState(true);

  const handleOnChange = () => {
    setValue((prev) => !prev);
  };
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      <Checkbox value={value} onChange={handleOnChange} />
    </div>
  );
};

export default App;
