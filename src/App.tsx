import Badge from './components/Badge/Badge';
import Col from './components/Decorators/Col/Col';
import Row from './components/Decorators/Row/Row';

const App = () => {
  return (
    <Col>
      <Row>
        <Badge>base</Badge>
      </Row>
    </Col>
  );
};

export default App;
