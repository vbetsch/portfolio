import { test, expect } from '@playwright/test';
import { StatusCodes } from 'http-status-codes';
import { PlaywrightTagsEnum } from '@tests/playwright/playwright-tags.enum.ts';

test.describe('Vitality Check', { tag: [PlaywrightTagsEnum.SMOKE_LEVEL_1] }, () => {
  test(
    'Healthcheck - Should return HTTP 200 connectivity',
    { tag: [PlaywrightTagsEnum.HEALTHCHECK] },
    async ({ request }) => {
      const response = await request.get('/');
      expect(response.status()).toBe(StatusCodes.OK);
    }
  );

  test(
    'Root DOM Elements - Should mount root elements',
    { tag: [PlaywrightTagsEnum.ROOT_DOM_ELEMENTS] },
    async ({ page }) => {
      const response = await page.goto('/');
      expect(response?.status()).toBe(StatusCodes.OK);

      const mainElement = page.locator('main');
      await expect(mainElement).toBeVisible();

      const bodyElement = page.locator('body');
      await expect(bodyElement).toBeVisible();
    }
  );
});
