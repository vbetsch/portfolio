import { defineConfig } from 'vitest/config';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [tsconfigPaths()],
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
    exclude: ['tests/e2e/**', 'node_modules/**', 'dist/**'],
    globals: true,
    include: ['tests/units/**/*.test.ts'],
  },
});
