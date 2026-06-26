// @ts-check
import { defineConfig, envField } from 'astro/config';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
  env: {
    schema: {
      APP_CV_PDF_NAME_FILE: envField.string({
        context: 'client',
        access: 'public',
        optional: false,
      }),
      APP_ID_GITHUB: envField.string({ context: 'client', access: 'public', optional: false }),
      APP_ID_LINKEDIN: envField.string({ context: 'client', access: 'public', optional: false }),
      APP_MAILTO_EMAIL: envField.string({ context: 'client', access: 'public', optional: false }),
      APP_PHONE_NUMBER: envField.string({ context: 'client', access: 'public', optional: false }),
    },
  },
  integrations: [icon()],
});
