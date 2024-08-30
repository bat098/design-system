import type { Meta, StoryObj } from '@storybook/react';
import Row from '../Decorators/Row/Row';
import Checkbox from './Checkbox';
import { CheckBoxProps } from './Checkbox.types';

const meta: Meta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Components/Checkbox',
  args: {
    checked: true,
  },
  argTypes: {
    disabled: {
      table: {
        disable: true,
      },
    },
    id: {
      table: {
        disable: true,
      },
    },
    onChange: {
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
      table: {
        disable: true,
      },
    },
    isError: {
      table: {
        disable: true,
      },
    },
    color: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

const sizes: CheckBoxProps['size'][] = ['small', 'medium', 'large'];
const colors: CheckBoxProps['color'][] = [
  'primary',
  'secondary',
  'success',
  'danger',
  'info',
  'warn',
];

export const Base: Story = {
  render: (args) => (
    <Row>
      <Checkbox {...args} />
    </Row>
  ),
  args: {
    checked: true,
  },
  argTypes: {
    checked: {
      table: {
        disable: false,
      },
    },
  },
};

export const Color: Story = {
  render: (args) => (
    <Row>
      {colors.map((color, index) => (
        <Checkbox key={index} color={color} {...args} />
      ))}
    </Row>
  ),
  argTypes: {
    color: {
      table: {
        disable: false,
      },
      control: 'select',
      options: colors,
    },
  },
};

export const Size: Story = {
  render: (args) => (
    <Row>
      <Checkbox size="small" {...args} />
      <Checkbox size="medium" {...args} />
      <Checkbox size="large" {...args} />
    </Row>
  ),
  argTypes: {
    size: {
      table: {
        disable: false,
      },
      control: 'select',
      options: sizes,
    },
  },
};

export const Disabled: Story = {
  render: (args) => (
    <Row>
      <Checkbox disabled {...args} />
    </Row>
  ),
  args: {
    disabled: true,
  },
  argTypes: {
    disabled: {
      table: {
        disable: false,
      },
    },
  },
};

export const Error: Story = {
  render: (args) => (
    <Row>
      <Checkbox isError {...args} />
    </Row>
  ),
  args: {
    checked: false,
    isError: true,
  },
  argTypes: {
    isError: {
      table: {
        disable: false,
      },
    },
  },
};
