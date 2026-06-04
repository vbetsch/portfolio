import { test, expect } from '@playwright/test';

test('should have the fullname as website title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Victor BETSCH/);
});
