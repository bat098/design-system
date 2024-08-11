import type { Meta, StoryObj } from '@storybook/react';
import Row from '../Decorators/Row/Row';

// import { RadioBoxType } from './RadioBox.types';
import RadioBox from './RadioBox';

const meta: Meta<typeof RadioBox> = {
  component: RadioBox,
  title: 'Components/RadioBox',
  args: {
    value: '',
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
    value: {
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

type Story = StoryObj<typeof RadioBox>;

// const sizes: RadioBoxType['size'][] = ['small', 'medium', 'large'];
// const colors: RadioBoxType['color'][] = [
//   'primary',
//   'secondary',
//   'success',
//   'danger',
//   'info',
//   'warn',
//   'black',
//   'gray',
// ];

export const Base: Story = {
  render: (args) => (
    <Row>
      <RadioBox {...args} />
    </Row>
  ),
  args: {
    value: '',
  },
  argTypes: {
    value: {
      table: {
        disable: false,
      },
    },
  },
};
