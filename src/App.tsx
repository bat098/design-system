import { useState } from 'react';
import Button from './components/Button/Button';
import Collapse from './components/Collapse/Collapse';
import Col from './components/Decorators/Col/Col';
import Row from './components/Decorators/Row/Row';
import Card from './components/Card/Card';
import CardBody from './components/CardBody/CardBody';
import CardHeader from './components/CardHeader/CardHeader';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Col>
      <Row style={{ display: 'flex', flexDirection: 'column' }}>
        <Card>
          <CardHeader>
            <Button onClick={() => setIsOpen((prev) => !prev)}>Toggle</Button>
          </CardHeader>
          <Collapse isOpen={isOpen}>
            <CardBody>
              Sint sit est veniam minim ut in ad. Exercitation enim Lorem
              commodo aliquip tempor eiusmod. Sint laboris quis ullamco aliqua
              sunt ad ullamco in.
            </CardBody>
          </Collapse>
        </Card>
      </Row>
    </Col>
  );
};

export default App;
