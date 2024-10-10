import type { Meta, StoryObj } from '@storybook/react';
import Card from './Card';
import Row from '../Decorators/Row/Row';
import Col from '../Decorators/Col/Col';
import CardBody from '../CardBody/CardBody';
import CardHeader from '../CardHeader/CardHeader';
import CardFooter from '../CardFooter/CardFooter';
import Divider from '../Divider/Divider';

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Components/Card',
  args: {
    children: '',
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Playground: Story = {
  render: (args) => {
    return (
      <Row>
        <Col>
          <Card {...args}>
            <CardHeader>Card Header</CardHeader>
            <Divider color="lightGray" />
            <CardBody>CardBody</CardBody>
            <Divider color="lightGray" />
            <CardFooter>CardFooter</CardFooter>
          </Card>
        </Col>
      </Row>
    );
  },
};
