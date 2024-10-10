import type { Meta, StoryObj } from '@storybook/react';
import Divider from './Divider';
import Row from '../Decorators/Row/Row';
import Col from '../Decorators/Col/Col';
import { DividerInterface } from './Divider.types';

const colors: DividerInterface['color'][] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'info',
  'warn',
  'black',
  'gray',
  'lightGray',
  'white',
];

const orientations: DividerInterface['orientation'][] = [
  'horizontal',
  'vertical',
];

const meta: Meta<typeof Divider> = {
  component: Divider,
  title: 'Components/Divider',
  args: {
    color: 'black',
    orientation: 'horizontal',
  },
  argTypes: {
    color: {
      control: 'select',
      options: colors,
      table: {
        disable: true,
      },
    },
    orientation: {
      control: 'radio',
      options: orientations,
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Divider>;

export const Playground: Story = {
  render: (args) => {
    return (
      <Row>
        <Col style={{ height: '200px' }}>
          <Divider {...args} />
        </Col>
      </Row>
    );
  },
  argTypes: {
    color: {
      table: {
        disable: false,
      },
    },
    orientation: {
      table: {
        disable: false,
      },
    },
  },
};

export const Colors: Story = {
  render: (args) => {
    return (
      <Row>
        <Col>
          {colors.map((color, index) => (
            <Divider {...args} key={index} color={color} />
          ))}
        </Col>
      </Row>
    );
  },
};

export const Orientation: Story = {
  render: (args) => {
    return (
      <Row>
        <Col style={{ width: '100%', height: '100px' }}>
          {orientations.map((orientation, index) => (
            <Divider {...args} key={index} orientation={orientation} />
          ))}
        </Col>
      </Row>
    );
  },
};
