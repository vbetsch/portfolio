import { test, expect } from '@playwright/test';

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have the fullname as title', async ({ page }) => {
    const header = page.locator('#header');
    await expect(header).toContainText('Victor BETSCH');
  });
});
