import { type Locator, test, expect } from '@playwright/test';
import { E2ETagsEnum } from '@tests/e2e/e2e-tags.enum.ts';

test.describe('Hero', () => {
  let mainSection: Locator;
  let contactMeCTAButton: Locator;
  let downloadCVCTAButton: Locator;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    mainSection = page.getByRole('main');
    contactMeCTAButton = mainSection.getByRole('link', { name: 'Me contacter' });
    downloadCVCTAButton = mainSection.getByRole('link', { name: 'Télécharger mon CV' });
  });

  test(
    'should have the role as first title',
    { tag: [E2ETagsEnum.MAIN_TITLE, E2ETagsEnum.SMOKE_LEVEL_1] },
    async () => {
      const firstTitle = mainSection.locator('h1');
      await expect(firstTitle).toContainText('Développeur web full-stack');
    }
  );

  test('should have the status as second title', async () => {
    const secondTitle = mainSection.locator('h2');
    await expect(secondTitle).toContainText('Recherche un poste en tant que développeur web');
  });

  test('should have a Contact Me CTA button', async () => {
    await expect(contactMeCTAButton).toBeVisible();
    await expect(contactMeCTAButton).toHaveAttribute('variant', 'primary');
  });

  test('should have a Download CV CTA button', async () => {
    await expect(downloadCVCTAButton).toBeVisible();
    await expect(downloadCVCTAButton).toHaveAttribute('variant', 'secondary');
  });

  test.describe('CTA Button', () => {
    test('the Contact Me CTA button should be a mailto link to the mail address', async () => {
      await expect(contactMeCTAButton).toHaveAttribute(
        'href',
        `mailto:${process.env.APP_MAILTO_EMAIL}`
      );
    });

    test(
      'the Download CV CTA button should be a download link to the CV',
      {
        tag: [E2ETagsEnum.SMOKE_LEVEL_2, E2ETagsEnum.ASSETS, E2ETagsEnum.PDF_FILE],
      },
      async () => {
        await expect(downloadCVCTAButton).toHaveAttribute('href', '/files/cv_fr.pdf');
        await expect(downloadCVCTAButton).toHaveAttribute(
          'download',
          `${process.env.APP_CV_PDF_NAME_FILE}.pdf`
        );
      }
    );
  });
});
