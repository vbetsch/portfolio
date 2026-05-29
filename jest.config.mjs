import baseVbetsch from '@vbetsch/config-jest/base';
import domVbetsch from '@vbetsch/config-jest/dom';
import strictVbetsch from '@vbetsch/config-jest/strict';

export default {
  ...baseVbetsch,
  ...domVbetsch,
  ...strictVbetsch,

  /* Overrides */
  // coverageThreshold: null,
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@components/(.*)$': '<rootDir>/src/components/$1',
  },
};
