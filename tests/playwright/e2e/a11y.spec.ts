import { test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { PlaywrightTagsEnum } from '@tests/playwright/playwright-tags.enum.ts';

test(
  'The homepage complies with WCAG standards',
  { tag: [PlaywrightTagsEnum.ACCESSIBILITY, PlaywrightTagsEnum.SMOKE_LEVEL_3] },
  async ({ page }) => {
    await page.goto('/');
    const scanResults = await new AxeBuilder({ page }).analyze();

    if (scanResults.violations.length > 0) {
      const errorLog = scanResults.violations
        .map(
          violation =>
            `❌ Rule: ${violation.id} (${violation.help})\n   Impact: ${violation.impact}\n   Elements concerned: ${violation.nodes.map(node => node.target).join(', ')}`
        )
        .join('\n\n');

      throw new Error(`Accessibility violations detected :\n\n${errorLog}`);
    }
  }
);
