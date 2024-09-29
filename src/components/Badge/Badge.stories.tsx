import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';
import { BadgeInterface } from './Badge.types';
import Row from '../Decorators/Row/Row';
import Col from '../Decorators/Col/Col';

const colors: BadgeInterface['color'][] = [
  'danger',
  'info',
  'primary',
  'secondary',
  'success',
  'warn',
];

const sizes: BadgeInterface['size'][] = ['small', 'medium', 'large'];

const variants: BadgeInterface['variant'][] = ['contained', 'outlined'];

const meta: Meta<typeof Badge> = {
  component: Badge,
  title: 'Components/Badge',
  args: {
    children: '',
    color: 'primary',
    size: 'medium',
    variant: 'contained',
  },
  argTypes: {
    children: {
      control: 'text',
    },
    color: {
      control: 'select',
      options: colors,
    },
    size: {
      control: 'radio',
      options: sizes,
    },
    variant: {
      control: 'radio',
      options: variants,
    },
  },
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Base: Story = {
  render: (args) => (
    <Col>
      <Badge {...args}>{args.children || 'base'}</Badge>,
    </Col>
  ),
};

export const Varaint: Story = {
  argTypes: {
    variant: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => (
    <Col>
      <Row>
        {variants.map((variant, index) => (
          <Badge {...args} key={index} variant={variant}>
            {args.children || variant}
          </Badge>
        ))}
      </Row>
    </Col>
  ),
};

export const Size: Story = {
  argTypes: {
    size: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => (
    <Col>
      <Row>
        {sizes.map((size, index) => (
          <Badge {...args} key={index} size={size}>
            {args.children || size}
          </Badge>
        ))}
      </Row>
    </Col>
  ),
};

export const Color: Story = {
  argTypes: {
    color: {
      table: {
        disable: true,
      },
    },
  },
  render: (args) => (
    <Col>
      <Row>
        {colors.map((color, index) => (
          <Badge {...args} key={index} color={color}>
            {args.children || color}
          </Badge>
        ))}
      </Row>
    </Col>
  ),
};
