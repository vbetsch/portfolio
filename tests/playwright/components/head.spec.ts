import { test, expect } from '@playwright/test';
import { PlaywrightTagsEnum } from '@tests/playwright/playwright-tags.enum.ts';

test(
  'should have the fullname as website title',
  { tag: [PlaywrightTagsEnum.MAIN_TITLE, PlaywrightTagsEnum.SMOKE_LEVEL_1] },
  async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Victor BETSCH/);
  }
);

test(
  'should have the global css import',
  { tag: [PlaywrightTagsEnum.ASSETS, PlaywrightTagsEnum.SMOKE_LEVEL_2, PlaywrightTagsEnum.CSS_FILE] },
  async ({ page }) => {
    await page.goto('/');
    const stylesheetLink = page.locator('link[rel="stylesheet"][href*="global"]');
    await expect(stylesheetLink).toBeAttached();
  }
);

test(
  'should have the main favicon import',
  { tag: [PlaywrightTagsEnum.ASSETS, PlaywrightTagsEnum.SMOKE_LEVEL_2, PlaywrightTagsEnum.FAVICON] },
  async ({ page }) => {
    await page.goto('/');
    const faviconLink = page.locator('link[rel="icon"][type="image/x-icon"][href*="favicon.ico"]');
    await expect(faviconLink).toBeAttached();
  }
);

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
