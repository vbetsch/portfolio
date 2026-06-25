import { test, expect } from '@playwright/test';

test.describe('Vitality Check @smoke-lv1', () => {
  test('Healthcheck - Should return HTTP 200 connectivity @healthcheck', async ({ request }) => {
    const response = await request.get('/');
    expect(response.status()).toBe(200);
  });

  test('Root DOM Elements - Should mount root elements @root-elements', async ({ page }) => {
    const response = await page.goto('/');
    expect(response?.status()).toBe(200);

    const mainElement = page.locator('main');
    await expect(mainElement).toBeVisible();

    const bodyElement = page.locator('body');
    await expect(bodyElement).toBeVisible();
  });
});
