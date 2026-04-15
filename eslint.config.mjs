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

  /* IMPORTANT: You have to add these lines only for the strict module ! */
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
    ignores: ['.astro/'],
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
  },
  {
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
  },
];
