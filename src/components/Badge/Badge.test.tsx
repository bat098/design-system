import { render, screen } from '../../test-utils';
import Badge from './Badge';

describe('Badge', () => {
  test('render children correctly', () => {
    render(<Badge>Hello</Badge>);
    const badge = screen.getByText('Hello');
    expect(badge).toBeInTheDocument();
  });
});
