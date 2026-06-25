import { test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { E2eTagsEnum } from '@tests/e2e/e2e-tags.enum.ts';

test(
  'The homepage complies with WCAG standards',
  { tag: [E2eTagsEnum.ACCESSIBILITY, E2eTagsEnum.SMOKE_LEVEL_3] },
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
