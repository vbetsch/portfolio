import type { Locator } from '@playwright/test';
import { test, expect } from '@playwright/test';

test.describe('Navbar', () => {
  let header: Locator;
  let contactMeElement: Locator;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    header = page.locator('#header');
    contactMeElement = header.getByRole('link', { name: 'Me contacter' });
  });

  test('should have the fullname', async () => {
    await expect(header).toContainText('Victor BETSCH');
  });

  test('should have a Contact Me element', async () => {
    await expect(contactMeElement).toBeVisible();
  });

  test.describe('Contact Me', () => {
    test('should be a mailto link to the mail address', async () => {
      await expect(contactMeElement).toHaveAttribute(
        'href',
        `mailto:${process.env.APP_MAILTO_EMAIL}`
      );
    });
  });
});
