import { render, screen } from '@testing-library/react';
import Badge from './Badge';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../theme';

describe('Badge', () => {
  test('render children correctly', () => {
    render(
      <ThemeProvider theme={theme}>
        <Badge>Hello</Badge>
      </ThemeProvider>
    );
    const badge = screen.getByText('Hello');
    expect(badge).toBeInTheDocument();
  });
});
