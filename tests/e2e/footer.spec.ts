import { expect, type Locator, test } from '@playwright/test';

test('should have the fullname', async ({ page }) => {
  await page.goto('/');
  const _footer = page.locator('footer');
  await expect(_footer).toContainText('Victor BETSCH');
});

test.describe('Address links', () => {
  let footer: Locator;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    footer = page.locator('footer');
  });

  test('should have the phone number', async () => {
    await expect(footer).toContainText(`${process.env.PHONE_NUMBER}`);
  });

  test('should have the mail address', async () => {
    await expect(footer).toContainText(`${process.env.MAILTO_EMAIL}`);
  });

  test('should have the linkedin profile', async () => {
    await expect(footer).toContainText(`${process.env.ID_LINKEDIN}`);
  });

  test('should have the github profile', async () => {
    await expect(footer).toContainText(`${process.env.ID_GITHUB}`);
  });
});
