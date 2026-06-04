import { test, expect } from '@playwright/test';

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have the fullname as website title', async ({ page }) => {
    await expect(page).toHaveTitle(/Victor BETSCH/);
  });
});
