import { type Locator, test, expect } from '@playwright/test';

test.describe('Hero', () => {
  let mainSection: Locator;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    mainSection = page.getByRole('main');
  });

  test('should have the role as first title', async () => {
    const firstTitle = mainSection.locator('h1');
    await expect(firstTitle).toContainText('Développeur web full-stack');
  });
});
