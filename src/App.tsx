import Textarea from './components/Textarea/Textarea';

const App = () => {
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
        <Textarea disabled />
      </div>
    </>
  );
};

export default App;
