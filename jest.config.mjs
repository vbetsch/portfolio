import baseVbetsch from '@vbetsch/config-jest/base';
import domVbetsch from '@vbetsch/config-jest/dom';
import strictVbetsch from '@vbetsch/config-jest/strict';

export default {
  ...baseVbetsch,
  ...domVbetsch,
  ...strictVbetsch,

  /* Overrides */
  moduleNameMapper: {
    '^@components/(.*)$': '<rootDir>/src/components/$1',
    '^@data/(.*)$': '<rootDir>/src/data/$1',
  },
};
