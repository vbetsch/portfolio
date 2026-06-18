import { test } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('The homepage complies with WCAG standards', async ({ page }) => {
  await page.goto('/');
  const scanResults = await new AxeBuilder({ page }).analyze();

  if (scanResults.violations.length > 0) {
    const errorLog = scanResults.violations.map(violation =>
      `❌ Rule: ${violation.id} (${violation.help})\n   Impact: ${violation.impact}\n   Elements concerned: ${violation.nodes.map(node => node.target).join(', ')}`
    ).join('\n\n');

    throw new Error(`Accessibility violations detected :\n\n${errorLog}`);
  }
});
