import { test, expect } from '@playwright/test';

test('should have the fullname as website title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Victor BETSCH/);
});

test('should have the global css import', async ({ page }) => {
  await page.goto('/');
  const stylesheetLink = page.locator('link[rel="stylesheet"][href*="global"]');
  await expect(stylesheetLink).toBeAttached();
});

test('should have the main favicon import', async ({ page }) => {
  await page.goto('/');
  const faviconLink = page.locator('link[rel="icon"][type="image/x-icon"][href*="favicon.ico"]');
  await expect(faviconLink).toBeAttached();
});
