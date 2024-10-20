/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },

  plugins: [react()],
  assetsInclude: ['**/*.woff', '**/*.woff2'],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
      include: ['src/**'],
      exclude: [
        '**/*styled.{ts,tsx}',
        '**/*stories.{ts,tsx}',
        '**/*.test.{ts,tsx}',
      ],
    },
  },
});
