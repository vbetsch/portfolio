import { expect, type Locator, test } from '@playwright/test';

test('should have the fullname', async ({ page }) => {
  await page.goto('/');
  const _footer = page.locator('footer');
  await expect(_footer).toContainText('Victor BETSCH');
});
