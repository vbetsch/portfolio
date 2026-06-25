import { test, expect } from '@playwright/test';
import { E2ETagsEnum } from '@tests/e2e/e2e-tags.enum';

test.describe(
  'Assets Integrity',
  {
    tag: [E2ETagsEnum.SMOKE_LEVEL_2, E2ETagsEnum.ASSETS],
  },
  () => {
    test(
      'Favicon - Should return HTTP 200 and correct Content-Type',
      { tag: [E2ETagsEnum.FAVICON] },
      async ({ request }) => {
        const response = await request.get('/favicon.ico');
        expect(response.status()).toBe(200);
        expect(response.headers()['content-type']).toContain('image/');
      }
    );

    test(
      'CV PDF - Should return HTTP 200 and application/pdf',
      { tag: [E2ETagsEnum.PDF_FILE] },
      async ({ request }) => {
        const response = await request.get(`/files/cv_fr.pdf`);
        expect(response.status()).toBe(200);
        expect(response.headers()['content-type']).toContain('application/pdf');
      }
    );

    test(
      'Compiled CSS - Should exist in DOM and return HTTP 200',
      { tag: [E2ETagsEnum.CSS_FILE] },
      async ({ request }) => {
        const homeResponse = await request.get('/');
        expect(homeResponse.status()).toBe(200);
        const html = await homeResponse.text();

        const cssMatch = html.match(
          /<link[^>]+rel=["']stylesheet["'][^>]+href=["'](\/_astro\/[^"']+\.css)["']/i
        );

        if (!cssMatch || !cssMatch[1]) {
          throw new Error("The link tag from the Astro CSS cannot be found in the DOM");
        }

        const cssResponse = await request.get(cssMatch[1]);
        expect(cssResponse.status()).toBe(200);
        expect(cssResponse.headers()['content-type']).toContain('text/css');
      }
    );
  }
);
