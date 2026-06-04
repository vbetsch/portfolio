import { test, expect } from '@playwright/test';

test.describe('Navbar', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should have the fullname as title', async ({ page }) => {
    const header = page.locator('#header');
    await expect(header).toContainText('Victor BETSCH');
  });

  test('should have a Contact Me button', async ({ page }) => {
    const header = page.locator('#header');
    await expect(header).toBeVisible();
    const contactMeButton = header.getByRole('link', { name: 'Me contacter' });
    await expect(contactMeButton).toBeVisible();
  });
});
