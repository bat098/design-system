import { useState } from 'react';
import Checkbox from './components/Checkbox/Checkbox';
// import TextField from './components/TextField/TextField';
// import { FaUser } from 'react-icons/fa6';

const App = () => {
  const [value, setValue] = useState(true);

  const handleOnChange = () => {
    setValue((prev) => !prev);
  };
  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {/* <Checkbox value={value} onChange={handleOnChange}>
        test
      </Checkbox> */}

      {/* <Checkbox id="test" value={value} onChange={handleOnChange} />
      <label htmlFor="test">test2</label> */}

      <Checkbox value={value} onChange={handleOnChange} />
    </div>
  );
};

export default App;
