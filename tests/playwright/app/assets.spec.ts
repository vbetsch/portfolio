import { test, expect } from '@playwright/test';
import { PlaywrightTagsEnum } from '@tests/playwright/playwright-tags.enum.ts';

test.describe(
  'Assets Integrity',
  {
    tag: [PlaywrightTagsEnum.ASSETS, PlaywrightTagsEnum.SMOKE_LEVEL_2],
  },
  () => {
    test(
      'Favicon - Should return and correct Content-Type',
      { tag: [PlaywrightTagsEnum.FAVICON] },
      async ({ request }) => {
        const response = await request.get('/favicon.ico');
        expect(response.headers()['content-type']).toContain('image/');
      }
    );

    test(
      'CV PDF - Should return application/pdf Content-Type',
      { tag: [PlaywrightTagsEnum.PDF_FILE] },
      async ({ request }) => {
        const response = await request.get(`/files/cv_fr.pdf`);
        expect(response.headers()['content-type']).toContain('application/pdf');
      }
    );

    test(
      'Compiled CSS - Should exist in DOM',
      { tag: [PlaywrightTagsEnum.CSS_FILE] },
      async ({ request }) => {
        const homeResponse = await request.get('/');
        const html = await homeResponse.text();

        const cssMatch = html.match(
          /<link[^>]+rel=["']stylesheet["'][^>]+href=["'](\/_astro\/[^"']+\.css)["']/i
        );

        if (!cssMatch || !cssMatch[1]) {
          throw new Error('The link tag from the Astro CSS cannot be found in the DOM');
        }

        const cssResponse = await request.get(cssMatch[1]);
        expect(cssResponse.headers()['content-type']).toContain('text/css');
      }
    );
  }
);
