import { type Locator, test, expect } from '@playwright/test';

test.describe('Hero', () => {
  let mainSection: Locator;
  let contactMeCTAButton: Locator;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    mainSection = page.getByRole('main');
    contactMeCTAButton = mainSection.getByRole('link', { name: 'Me contacter' });
  });

  test('should have the role as first title', async () => {
    const firstTitle = mainSection.locator('h1');
    await expect(firstTitle).toContainText('Développeur web full-stack');
  });

  test('should have the status as second title', async () => {
    const secondTitle = mainSection.locator('h2');
    await expect(secondTitle).toContainText('Recherche un poste en tant que développeur web');
  });

  test('should have a Contact Me CTA button', async () => {
    await expect(contactMeCTAButton).toBeVisible();
  });
});
