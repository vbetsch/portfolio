import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'node',
    alias: {
      'astro:env/client': new URL('./tests/mocks/astro-env-inline.ts', import.meta.url).pathname,
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'src/data/**',
        'tests/mocks/**',
        'src/env.d.ts',
        'node_modules/**',
        'vitest.config.ts',
      ],
    },
  },
});
