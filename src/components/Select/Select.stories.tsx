import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';
import { SelectProps } from './Select.types';
import { useState } from 'react';
import Row from '../Decorators/Row/Row';

const options: SelectProps['options'] = [
  {
    label: 'apple',
    value: 'apple',
  },
  {
    label: 'orange',
    value: 'orange',
  },
  {
    label: 'plum',
    value: 'plum',
  },
];

const sizes: SelectProps['size'][] = ['small', 'medium', 'large'];

const meta: Meta<typeof Select> = {
  component: Select,
  title: 'Components/Select',
  args: {
    options: options,
    value: options[0].value,
  },

  argTypes: {
    disabled: {
      control: 'boolean',
      table: {
        disable: true,
      },
    },
    isError: {
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
    value: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    icon: {
      table: {
        disable: true,
      },
    },
    options: {
      control: 'object',

      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Base: Story = {
  render: (args) => {
    const [value, setValue] = useState(options[0].value);

    const handleChange = (e: string) => {
      setValue(e);
    };

    return <Select {...args} value={value} onChange={handleChange} />;
  },
};

const SelectWithLogic = (args: SelectProps) => {
  const [value, setValue] = useState(options[0].value);

  const handleChange = (e: string) => {
    setValue(e);
  };

  return <Select {...args} value={value} onChange={handleChange} />;
};

export const Options: Story = {
  argTypes: {
    options: {
      table: {
        disable: false,
      },
    },
  },
  render: (args) => {
    return <SelectWithLogic {...args} />;
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
        <SelectWithLogic key={index} size={size} {...args} />
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
  },
  render: (args) => {
    return <SelectWithLogic {...args} />;
  },
};

export const Error: Story = {
  argTypes: {
    isError: {
      table: {
        disable: false,
      },
    },
  },
  args: {
    isError: true,
  },
  render: (args) => {
    return <SelectWithLogic {...args} />;
  },
};
