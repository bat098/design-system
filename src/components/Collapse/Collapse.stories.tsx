import type { Meta, StoryObj } from '@storybook/react';
import Collapse from './Collapse';
import Row from '../Decorators/Row/Row';
import Col from '../Decorators/Col/Col';
import Card from '../Card/Card';
import CardHeader from '../CardHeader/CardHeader';
import Button from '../Button/Button';
import { useEffect, useState } from 'react';
import CardBody from '../CardBody/CardBody';

const meta: Meta<typeof Collapse> = {
  component: Collapse,
  title: 'Components/Collapse',
  args: {
    isOpen: false,
    onAnimationStart: () => {},
    onAnimationEnd: () => {},
    children: '',
  },
  argTypes: {
    isOpen: {
      control: 'boolean',
    },
    children: {
      control: {
        type: 'text',
      },
    },
    onAnimationStart: {
      type: 'function',
    },
    onAnimationEnd: {
      type: 'function',
    },
  },
};
export default meta;

type Story = StoryObj<typeof Collapse>;

export const Playground: Story = {
  render: (args) => {
    const [isOpen, setIsOpen] = useState(args.isOpen);

    useEffect(() => {
      setIsOpen(args.isOpen);
    }, [args.isOpen]);
    return (
      <Row>
        <Col>
          <Card>
            <CardHeader>
              <Button onClick={() => setIsOpen((prev) => !prev)}>
                {isOpen ? 'Close' : 'Open'}
              </Button>
            </CardHeader>
            <Collapse isOpen={isOpen}>
              <CardBody>
                {args.children || (
                  <>
                    Ex dolore excepteur id eu amet est aliquip consectetur elit
                    officia duis culpa nostrud eiusmod. Mollit labore magna
                    occaecat voluptate qui Lorem laboris dolore sit. Laboris
                    dolore sunt fugiat eiusmod incididunt incididunt qui fugiat
                    et deserunt ex ea velit exercitation. Esse cupidatat minim
                    mollit minim aute veniam enim cillum velit ex incididunt
                    sunt. Esse excepteur elit ea nisi qui voluptate minim.
                    Tempor quis dolore ea nisi in cupidatat sunt non qui aute
                    ipsum. Cupidatat eiusmod culpa pariatur ea consequat qui
                    irure velit nulla exercitation quis officia tempor occaecat.
                    Eiusmod consectetur ex labore nostrud magna sunt aliquip
                    minim culpa ipsum proident sunt. Fugiat proident consectetur
                    officia voluptate pariatur laborum mollit. Veniam amet
                    fugiat mollit est quis anim est minim deserunt reprehenderit
                    sint culpa sunt laboris. Dolore aliqua esse non ad. In nulla
                    veniam sit labore. Anim anim laboris amet in in dolor ipsum
                    cupidatat. Minim ad nisi ad esse exercitation. Adipisicing
                    culpa pariatur consequat ut sit.
                  </>
                )}
              </CardBody>
            </Collapse>
          </Card>
        </Col>
      </Row>
    );
  },
};
