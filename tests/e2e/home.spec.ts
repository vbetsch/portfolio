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
    const mainSection = page.getByRole('main');
    const contactButton = mainSection.getByRole('link', { name: 'Me contacter' });

    await expect(contactButton).toBeVisible();
    await expect(contactButton).toHaveAttribute('href', 'mailto:vbetsch.contact@gmail.com');
  });
});
