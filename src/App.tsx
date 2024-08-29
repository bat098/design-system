import { useEffect, useRef, useState } from 'react';
import Switch from './components/Switch/Switch';

const App = () => {
  const [value, setValue] = useState(true);

  const handleOnChange = () => {
    setValue((prev) => !prev);
  };

  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.checked);
    }
  }, [ref]);
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
        <Switch
          checked={value}
          onChange={handleOnChange}
          color="success"
          innerRef={ref}
        />
      </div>
    </>
  );
};

export default App;
