import { defineConfig } from 'vitest/config';

export default defineConfig({
  resolve: {
    tsconfigPaths: true,
  },
  test: {
    alias: {
      'astro:env/client': new URL('./tests/astro-env.mock.ts', import.meta.url).pathname,
    },
    coverage: {
      exclude: [
        'node_modules/**',
        'src/components/**',
        'src/data/**',
        'src/enums/**',
        'src/pages/**',
        'src/types/**',
        'src/env.d.ts',
        'tests/astro-env.mock.ts',
        'vitest.config.ts',
        'vitest-report/**',
      ],
      include: ['src/**/*.ts'],
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
    },
    environment: 'node',
    exclude: ['tests/playwright/**', 'node_modules/**', 'dist/**'],
    globals: true,
    include: ['tests/vitest/**/*.test.ts'],
  },
});
