import type { Meta, StoryObj } from '@storybook/react';
import Row from '../Decorators/Row/Row';

import RadioBox from './RadioBox';
import { useEffect, useState } from 'react';
import { RadioBoxGroupProps } from '../RadioBoxGroup/RadioBoxGroup.types';

import { RadioBoxProps } from './RadioBox.types';

const items: RadioBoxGroupProps['items'] = [
  {
    value: 'apple',
    label: 'apple',
  },
  {
    value: 'orange',
    label: 'orange',
  },
];

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
      control: 'select',
      options: items.map((item) => item.value),
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
    checked: {
      table: {
        disable: true,
      },
    },
    innerRef: {
      table: {
        disable: true,
      },
    },
    label: {
      table: {
        disable: true,
      },
    },
    name: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof RadioBox>;

const ControlledRadioBoxes = (args: RadioBoxProps) => {
  const [val, setVal] = useState(args.value || items[0].value);

  useEffect(() => {
    setVal(args.value);
  }, [args]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVal(e.target.value);
  };
  return (
    <Row>
      {items.map(({ value, label }, index) => (
        <RadioBox
          key={index}
          label={label}
          value={value}
          checked={value === val}
          onChange={handleOnChange}
          name="fruit"
        />
      ))}
    </Row>
  );
};

export const Base: Story = {
  render: (args) => (
    <Row>
      <ControlledRadioBoxes {...args} />
    </Row>
  ),
  args: {
    value: items[0].value,
  },
  argTypes: {
    value: {
      table: {
        disable: false,
      },
    },
  },
};
