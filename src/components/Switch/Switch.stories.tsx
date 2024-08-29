import type { Meta, StoryObj } from '@storybook/react';
import Switch from './Switch';
import { SwitchProps } from './Switch.types';
import { useState } from 'react';
import Row from '../Decorators/Row/Row';

const sizes: SwitchProps['size'][] = ['small', 'medium', 'large'];
const colors: SwitchProps['color'][] = [
  'black',
  'danger',
  'gray',
  'info',
  'primary',
  'secondary',
  'success',
  'warn',
];

const meta: Meta<typeof Switch> = {
  component: Switch,
  title: 'Components/Switch',
  args: {},

  argTypes: {
    disabled: {
      control: 'boolean',
      table: {
        disable: true,
      },
    },
    size: {
      table: {
        disable: true,
      },
    },
    checked: {
      control: 'boolean',
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    color: {
      table: {
        disable: true,
      },
    },
    innerRef: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Switch>;

const SwitchWithLogic = (args: SwitchProps) => {
  const [value, setValue] = useState(args.checked || false);

  const handleChange = () => {
    setValue((prev) => !prev);
  };

  return <Switch {...args} checked={value} onChange={handleChange} />;
};

export const Base: Story = {
  render: (args) => {
    return (
      <Row>
        <SwitchWithLogic {...args} />
      </Row>
    );
  },
};

export const Size: Story = {
  argTypes: {
    size: {
      control: 'select',
      options: sizes,
      table: {
        disable: false,
      },
    },
  },
  render: (args) => (
    <Row>
      {sizes.map((size, index) => (
        <SwitchWithLogic key={index} size={size} {...args} />
      ))}
    </Row>
  ),
};

export const Disable: Story = {
  argTypes: {
    disabled: {
      table: {
        disable: false,
      },
    },
  },
  args: {
    disabled: true,
    checked: true,
  },
  render: (args) => {
    return (
      <Row>
        <SwitchWithLogic {...args} />
      </Row>
    );
  },
};

export const Color: Story = {
  argTypes: {
    color: {
      table: {
        disable: false,
      },
      control: 'select',
      options: colors,
    },
  },
  args: {
    checked: true,
  },
  render: (args) => {
    return (
      <Row>
        {colors.map((color, index) => (
          <SwitchWithLogic key={index} color={color} {...args} />
        ))}
      </Row>
    );
  },
};
