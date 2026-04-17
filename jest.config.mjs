import baseVbetsch from '@vbetsch/config-jest/base';
import domVbetsch from '@vbetsch/config-jest/dom';
import strictVbetsch from '@vbetsch/config-jest/strict';

export default {
  ...baseVbetsch,
  ...domVbetsch,
  ...strictVbetsch,

  /* Overrides */
  moduleNameMapper: {
    '^astro:env/client$': '<rootDir>/tests/mocks/astro-env.ts',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1',
  },
  transform: {
    '^.+\\.astro$': 'jest-transform-stub',
  },
};
