import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { AppProviders } from './providers/AppProviders';

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AppProviders, ...options });

/* eslint-disable react-refresh/only-export-components */
export * from '@testing-library/react';
/* eslint-enable react-refresh/only-export-components */
export { customRender as render };
