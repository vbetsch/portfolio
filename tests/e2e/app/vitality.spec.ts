import { test, expect } from '@playwright/test';
import { StatusCodes } from 'http-status-codes';
import { E2eTagsEnum } from '../e2e-tags.enum.ts';

test.describe('Vitality Check', { tag: [E2eTagsEnum.SMOKE_LEVEL_1] }, () => {
  test(
    'Healthcheck - Should return HTTP 200 connectivity',
    { tag: [E2eTagsEnum.HEALTHCHECK] },
    async ({ request }) => {
      const response = await request.get('/');
      expect(response.status()).toBe(StatusCodes.OK);
    }
  );

  test(
    'Root DOM Elements - Should mount root elements',
    { tag: [E2eTagsEnum.ROOT_ELEMENTS] },
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
