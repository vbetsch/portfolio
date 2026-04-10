import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default tseslint.config(
  [
    {
      ignores: [
        '.astro/',
      ],
    },

    {
      languageOptions: {
        parserOptions: {
          project: './tsconfig.json',
          extraFileExtensions: ['.astro'],
        },
      },
    },
    {
      files: ['**/*.astro'],
      languageOptions: {
        parser: eslintPluginAstro.parser,
        parserOptions: {
          parser: tseslint.parser,
        },
      },
    },
  ],
);
