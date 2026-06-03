import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    alias: {
      'astro:env/client': new URL('./tests/mocks/astro-env.ts', import.meta.url).pathname,
    },
    coverage: {
      exclude: [
        'node_modules/**',
        'src/components/**',
        'src/data/**',
        'src/pages/**',
        'src/env.d.ts',
        'tests/mocks/**',
        'vitest.config.ts',
      ],
      include: ['src/**/*.ts'],
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    environment: 'node',
    globals: true,
  },
});
