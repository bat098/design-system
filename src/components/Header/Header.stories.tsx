import type { Meta, StoryObj } from '@storybook/react';
import Header from './Header';
import Row from '../Decorators/Row/Row';
import Col from '../Decorators/Col/Col';
import { HeaderInterface } from './Header.types';

const components: HeaderInterface['component'][] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

const variants: HeaderInterface['variant'][] = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
];

const colors: HeaderInterface['color'][] = [
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

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
  args: {
    color: 'black',
    component: 'h1',
    children: 'Header',
    variant: 'h1',
  },
  argTypes: {
    color: {
      control: 'select',
      options: colors,
      table: {
        disable: true,
      },
    },
    component: {
      control: 'select',
      options: components,
      table: {
        disable: true,
      },
    },
    children: {
      control: 'text',
      table: {
        disable: true,
      },
    },
    variant: {
      control: 'select',
      options: variants,
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Header>;

export const Playground: Story = {
  render: (args) => {
    return (
      <Row>
        <Col>
          <Header {...args}>{args.children}</Header>
        </Col>
      </Row>
    );
  },
  argTypes: {
    children: {
      table: {
        disable: false,
      },
    },
    color: {
      table: {
        disable: false,
      },
    },
    component: {
      table: {
        disable: false,
      },
    },
    variant: {
      table: {
        disable: false,
      },
    },
  },
};

export const Components: Story = {
  render: () => {
    return (
      <Row>
        <Col>
          {components.map((component, index) => (
            <Header
              component={component}
              key={index}
            >{`Header ${component}`}</Header>
          ))}
        </Col>
      </Row>
    );
  },
};

export const Colors: Story = {
  render: () => {
    return (
      <Row>
        <Col>
          {colors.map((color, index) => (
            <Header color={color} key={index}>
              Header
            </Header>
          ))}
        </Col>
      </Row>
    );
  },
};

export const Varaint: Story = {
  render: () => {
    return (
      <Row>
        <Col>
          {variants.map((variant, index) => (
            <Header variant={variant} key={index}>
              {`Header h1 with ${variant} style`}
            </Header>
          ))}
        </Col>
      </Row>
    );
  },
};
