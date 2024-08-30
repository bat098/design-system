import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

import { ButtonProps } from './Button.types';
import Row from '../Decorators/Row/Row';
import Col from '../Decorators/Col/Col';
import { FaUser } from 'react-icons/fa6';

const colors: ButtonProps['color'][] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'info',
  'warn',
];

const variants: ButtonProps['variant'][] = ['contained', 'outlined'];
const sizes: ButtonProps['size'][] = ['small', 'medium', 'large'];

const types: ButtonProps['type'][] = ['button', 'submit'];

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
  args: {
    disabled: false,
    children: '',
    type: 'button',
  },
  argTypes: {
    color: {
      control: 'select',
      options: colors,
    },
    type: {
      control: 'radio',
      options: types,
    },
    disabled: {
      control: 'boolean',
    },
    children: {
      control: 'text',
    },
    iconStart: {
      table: {
        disable: true,
      },
    },
    iconEnd: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Colors: Story = {
  render: (args) => (
    <Col>
      <Row>
        {colors.map((color, index) => (
          <Button variant="contained" key={index} color={color} {...args}>
            {args.children ? args.children : color}
          </Button>
        ))}
      </Row>
      <Row>
        {colors.map((color, index) => (
          <Button variant="outlined" key={index} color={color} {...args}>
            {args.children ? args.children : color}
          </Button>
        ))}
      </Row>
    </Col>
  ),
  args: {
    size: 'medium',
  },
};

export const Variant: Story = {
  render: (args) => (
    <Row>
      {variants.map((variant, index) => (
        <Button key={index} variant={variant} {...args}>
          {args.children ? args.children : variant}
        </Button>
      ))}
    </Row>
  ),
  args: {
    color: 'primary',
    size: 'medium',
  },
};

export const Size: Story = {
  render: (args) => (
    <Col>
      <Row>
        {sizes.map((size, index) => (
          <Button key={index} size={size} {...args}>
            {args.children ? args.children : size}
          </Button>
        ))}
      </Row>
      <Row>
        {sizes.map((size, index) => (
          <Button variant="outlined" key={index} size={size} {...args}>
            {args.children ? args.children : size}
          </Button>
        ))}
      </Row>
    </Col>
  ),
  args: {
    color: 'primary',
  },
};

export const Icon: Story = {
  render: (args) => (
    <Col>
      <Row>
        <Button iconStart={<FaUser />} {...args}>
          icon start
        </Button>
        <Button iconEnd={<FaUser />} {...args}>
          icon end
        </Button>
        <Button iconStart={<FaUser />} iconEnd={<FaUser />} {...args}>
          icon start and end
        </Button>
      </Row>
      <Row>
        <Button variant="outlined" iconStart={<FaUser />} {...args}>
          icon start
        </Button>
        <Button variant="outlined" iconEnd={<FaUser />} {...args}>
          icon end
        </Button>
        <Button
          variant="outlined"
          iconStart={<FaUser />}
          iconEnd={<FaUser />}
          {...args}
        >
          icon start and end
        </Button>
      </Row>
    </Col>
  ),
  args: {
    color: 'primary',
    size: 'medium',
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Row>
      <Button variant="contained" disabled {...args}>
        disabled
      </Button>
      <Button variant="outlined" disabled {...args}>
        disabled
      </Button>
    </Row>
  ),
  args: {
    color: 'primary',
    disabled: true,
    size: 'medium',
  },
};
