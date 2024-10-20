import { ThemeProvider } from 'styled-components';
import { theme } from '../theme';

export const AppProviders = ({ children }: { children: React.ReactNode }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
