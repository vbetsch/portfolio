import { test, expect } from '@playwright/test';

test.describe('Home page - Portfolio', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display right title', async ({ page }) => {
    await expect(page).toHaveTitle(/Victor BETSCH/);
  });

  test('should have a functional link to Github', async ({ page }) => {
    const githubLink = page.locator('a[href*="github.com"]');
    await expect(githubLink).toBeVisible();
  });

  test('contact button should point to mailto', async ({ page }) => {
    const contactButton = page.getByRole('link', { name: /contact/i });

    if ((await contactButton.count()) > 0) {
      await expect(contactButton).toHaveAttribute('href', /mailto:/);
    }
  });
});
