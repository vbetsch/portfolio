// @ts-check
import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      ID_GITHUB: envField.string({ context: 'client', access: 'public', optional: false }),
      ID_LINKEDIN: envField.string({ context: 'client', access: 'public', optional: false }),
      MAILTO_EMAIL: envField.string({ context: 'client', access: 'public', optional: false }),
      PHONE_NUMBER: envField.string({ context: 'client', access: 'public', optional: false }),
    },
  },
  integrations: [icon()],
});
