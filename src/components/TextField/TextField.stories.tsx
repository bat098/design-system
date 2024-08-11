import type { Meta, StoryObj } from '@storybook/react';
import TextField from './TextField';
import { FaUser } from 'react-icons/fa6';
import Row from '../Decorators/Row/Row';
import Col from '../Decorators/Col/Col';

const meta: Meta<typeof TextField> = {
  component: TextField,
  title: 'Components/TextField',
  argTypes: {
    value: {
      control: 'text',
    },
    addonLeft: {
      table: {
        disable: true,
      },
    },
    addonRight: {
      table: {
        disable: true,
      },
    },
    elementLeft: {
      table: {
        disable: true,
      },
    },
    elementRight: {
      table: {
        disable: true,
      },
    },
    onChange: {
      table: {
        disable: true,
      },
    },
    placeholder: {
      table: {
        disable: true,
      },
    },
  },
};
export default meta;

type Story = StoryObj<typeof TextField>;

export const Base: Story = {
  render: (args) => <TextField {...args} />,
  args: {},
};

export const Placeholder: Story = {
  render: (args) => <TextField {...args} />,
  args: {
    placeholder: 'First name',
  },
  argTypes: {
    placeholder: {
      table: {
        disable: false,
      },
    },
  },
};

export const Addons: Story = {
  render: (args) => (
    <Row>
      <TextField addonLeft={<FaUser />} {...args} />
      <TextField addonRight={<FaUser />} {...args} />
      <TextField addonRight={<FaUser />} addonLeft={<FaUser />} {...args} />
    </Row>
  ),
  args: {
    placeholder: 'First name',
  },
  argTypes: {
    placeholder: {
      table: {
        disable: false,
      },
    },
  },
};

export const Elements: Story = {
  render: (args) => (
    <Row>
      <TextField elementLeft={<FaUser />} {...args} />
      <TextField elementRight={<FaUser />} {...args} />
      <TextField elementLeft={<FaUser />} elementRight={<FaUser />} {...args} />
    </Row>
  ),
  args: {
    placeholder: 'First name',
  },
  argTypes: {
    placeholder: {
      table: {
        disable: false,
      },
    },
  },
};

export const AddonsAndElements: Story = {
  render: (args) => (
    <Col>
      <Row>
        <TextField addonLeft={<FaUser />} elementLeft={<FaUser />} {...args} />
        <TextField addonLeft={<FaUser />} elementRight={<FaUser />} {...args} />
        <TextField
          addonLeft={<FaUser />}
          elementLeft={<FaUser />}
          elementRight={<FaUser />}
          {...args}
        />
      </Row>
      <Row>
        <TextField addonRight={<FaUser />} elementLeft={<FaUser />} {...args} />
        <TextField
          addonRight={<FaUser />}
          elementRight={<FaUser />}
          {...args}
        />
        <TextField
          addonRight={<FaUser />}
          elementLeft={<FaUser />}
          elementRight={<FaUser />}
          {...args}
        />
      </Row>
      <Row>
        <TextField
          addonRight={<FaUser />}
          addonLeft={<FaUser />}
          elementLeft={<FaUser />}
          {...args}
        />
        <TextField
          addonRight={<FaUser />}
          addonLeft={<FaUser />}
          elementRight={<FaUser />}
          {...args}
        />
        <TextField
          addonRight={<FaUser />}
          addonLeft={<FaUser />}
          elementLeft={<FaUser />}
          elementRight={<FaUser />}
          {...args}
        />
      </Row>
    </Col>
  ),
  args: {
    placeholder: 'First name',
  },
  argTypes: {
    placeholder: {
      table: {
        disable: false,
      },
    },
  },
};

export const Size: Story = {
  render: (args) => (
    <Row>
      <TextField size="small" {...args} />
      <TextField size="medium" {...args} />
      <TextField size="large" {...args} />
    </Row>
  ),
  args: {
    placeholder: 'First name',
  },
  argTypes: {
    placeholder: {
      table: {
        disable: false,
      },
    },
  },
};

AddonsAndElements.storyName = 'Addons and Elemens';
