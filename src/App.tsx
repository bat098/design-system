import Card from './components/Card/Card';
import CardBody from './components/CardBody/CardBody';
import CardFooter from './components/CardFooter/CardFooter';
import CardHeader from './components/CardHeader/CardHeader';
import Col from './components/Decorators/Col/Col';
import Row from './components/Decorators/Row/Row';
import Divider from './components/Divider/Divider';
import Header from './components/Header/Header';

const App = () => {
  return (
    <Col>
      <Row>
        <Card>
          <CardHeader>
            <Header component="h1">Tutuł karty</Header>
            <Header component="h1" variant="h2" color="info">
              Tutuł karty
            </Header>
            <Header component="h3">Tutuł karty</Header>
            <Header component="h4">Tutuł karty</Header>
            <Header component="h5">Tutuł karty</Header>
            <Header component="h6">Tutuł karty</Header>
          </CardHeader>
          <Divider color="danger" />
          <CardBody>Laborum sit aliqua laboris do elit eu dolore.</CardBody>
          <Divider color="success" />
          <CardFooter>Footer karty</CardFooter>
        </Card>
      </Row>
    </Col>
  );
};

export default App;
