import { screen } from '@testing-library/dom';
import { render } from '@/test-utils';
import Badge from '@/components/Badge/Badge';

describe('Badge', () => {
  test('render children correctly', () => {
    render(<Badge>Hello</Badge>);
    const badge = screen.getByText('Hello');
    expect(badge).toBeInTheDocument();
  });
});
