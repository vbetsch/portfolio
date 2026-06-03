import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
  test: {
    globals: true,
    environment: 'node',
    alias: {
      'astro:env/client': new URL('./tests/mocks/astro-env.ts', import.meta.url).pathname,
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      include: ['src/**/*.ts'],
      exclude: [
        'node_modules/**',
        'src/components/**',
        'src/data/**',
        'src/env.d.ts',
        'src/pages/**',
        'tests/mocks/**',
        'vitest.config.ts',
      ],
    },
  },
});
