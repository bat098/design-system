import type { Meta, StoryObj } from '@storybook/react';
import Textarea from './Textarea';
import Row from '../Decorators/Row/Row';
import { TextareaProps } from './Textarea.types';

const resizeOptions: TextareaProps['resize'][] = [
  'both',
  'horizontal',
  'vertical',
  'none',
];

const meta: Meta<typeof Textarea> = {
  component: Textarea,
  title: 'Components/Textarea',
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

    placeholder: {
      control: 'text',
      table: {
        disable: true,
      },
    },
    resize: {
      control: 'select',
      options: resizeOptions,
      table: {
        disable: true,
      },
    },
    rows: {
      control: 'number',
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Base: Story = {
  render: (args) => <Textarea {...args} />,
};

export const Placeholder: Story = {
  render: (args) => <Textarea {...args} />,
  args: {
    placeholder: 'Message...',
  },
  argTypes: {
    placeholder: {
      table: {
        disable: false,
      },
    },
  },
};

export const Disable: Story = {
  render: (args) => (
    <Textarea
      placeholder={`This is ${args.disabled ? 'disabled' : 'NOT disabled'} textarea`}
      {...args}
    />
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

export const Resize: Story = {
  render: (args) => (
    <Row>
      <Textarea placeholder="Resize horizontal" resize="horizontal" {...args} />
      <Textarea placeholder="Resize vertical" resize="vertical" {...args} />
      <Textarea placeholder="Resize both" resize="both" {...args} />
      <Textarea placeholder="No resize" resize="none" {...args} />
    </Row>
  ),
  argTypes: {
    resize: {
      table: {
        disable: false,
      },
    },
  },
};

export const Rows: Story = {
  render: (args) => (
    <Textarea placeholder={`This texarea has ${args.rows} a row/s`} {...args} />
  ),
  args: {
    rows: 5,
  },
  argTypes: {
    rows: {
      table: {
        disable: false,
      },
    },
  },
};

export const Error: Story = {
  render: (args) => (
    <Textarea
      placeholder={`This is a textarea ${args.isError ? 'WITH' : 'WITHOUT'} an error.`}
      {...args}
    />
  ),
  args: {
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
