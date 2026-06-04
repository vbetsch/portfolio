import { expect, type Locator, test } from '@playwright/test';

test('should have the fullname', async ({ page }) => {
  await page.goto('/');
  const _footer = page.locator('footer');
  await expect(_footer).toContainText('Victor BETSCH');
});

test.describe('Address links', () => {
  let footer: Locator;
  let phoneNumberLink: Locator;
  let mailAddressLink: Locator;
  let linkedinProfileLink: Locator;
  let githubProfileLink: Locator;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    footer = page.locator('footer');

    phoneNumberLink = footer.getByRole('link', { name: `${process.env.PHONE_NUMBER}` });
    mailAddressLink = footer.getByRole('link', { name: `${process.env.MAILTO_EMAIL}` });
    linkedinProfileLink = footer.locator(
      `a[href="https://www.linkedin.com/in/${process.env.ID_LINKEDIN}"]`
    );
    githubProfileLink = footer.locator(`a[href="https://github.com/${process.env.ID_GITHUB}"]`);
  });

  test('should have the phone number', async () => {
    await expect(phoneNumberLink).toBeVisible();
  });

  test('the phone number should be a tel link to the phone number', async () => {
    await expect(phoneNumberLink).toHaveAttribute('href', `tel:${process.env.PHONE_NUMBER}`);
  });

  test('should have the mail address', async () => {
    await expect(mailAddressLink).toBeVisible();
  });

  test('the mail address should be a mailto link to the mail address', async () => {
    await expect(mailAddressLink).toHaveAttribute('href', `mailto:${process.env.MAILTO_EMAIL}`);
  });

  test('should have the linkedin profile', async () => {
    await expect(linkedinProfileLink).toBeVisible();
  });

  test('the linkedin profile should open a new tab', async () => {
    await expect(linkedinProfileLink).toHaveAttribute('target', '_blank');
  });

  test('should have the github profile', async () => {
    await expect(githubProfileLink).toBeVisible();
  });

  test('the github profile should open a new tab', async () => {
    await expect(githubProfileLink).toHaveAttribute('target', '_blank');
  });
});
