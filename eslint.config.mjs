import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';
import baseVbetsch from '@vbetsch/config-eslint/base';
import jsxVbetsch from '@vbetsch/config-eslint/jsx';
import namingVbetsch from '@vbetsch/config-eslint/naming';
import prettierVbetsch from '@vbetsch/config-eslint/prettier';
import strictVbetsch from '@vbetsch/config-eslint/strict';

export default [
  ...baseVbetsch,
  strictVbetsch,
  namingVbetsch,
  jsxVbetsch,
  ...prettierVbetsch,

  {
    languageOptions: {
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  /* --- Overrides --- */
  ...eslintPluginAstro.configs.recommended,
  {
    ignores: [
      '.astro/',
      'playwright.config.ts',
      'playwright-report/',
      'src/env.d.ts',
      'test-results/',
      'tests/astro-env.mock.ts',
      'vitest-report/',
    ],
  },
  {
    files: ['**/*.astro'],
    languageOptions: {
      parser: eslintPluginAstro.parser,
      parserOptions: {
        extraFileExtensions: ['.astro'],
        parser: tseslint.parser,
        project: './tsconfig.json',
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'max-lines': [
        'error',
        {
          max: 50,
          skipBlankLines: true,
          skipComments: true,
        },
      ],
    },
  },
  {
    rules: {
      '@typescript-eslint/naming-convention': [
        'warn',
        /** Variables use camelCase or PascalCase */
        {
          selector: ['variable'],
          format: ['camelCase', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
      ],
    },
  },
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
      'import/core-modules': ['astro:env/client', 'astro:env/server', 'astro:content'],
    },
  },
];
