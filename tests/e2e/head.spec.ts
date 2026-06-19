import { test, expect } from '@playwright/test';

test('should have the fullname as website title @main-title @smoke-lv1', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Victor BETSCH/);
});

test('should have the global css import @assets @smoke-lv2', async ({ page }) => {
  await page.goto('/');
  const stylesheetLink = page.locator('link[rel="stylesheet"][href*="global"]');
  await expect(stylesheetLink).toBeAttached();
});

test('should have the main favicon import @assets @smoke-lv2', async ({ page }) => {
  await page.goto('/');
  const faviconLink = page.locator('link[rel="icon"][type="image/x-icon"][href*="favicon.ico"]');
  await expect(faviconLink).toBeAttached();
});

test.describe('Metadata', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have the language configuration', async ({ page }) => {
    const htmlMeta = page.locator('html[lang="fr"]');
    const utf8Meta = page.locator('meta[charset="utf-8"]');
    await expect(htmlMeta).toBeAttached();
    await expect(utf8Meta).toBeAttached();
  });
});
