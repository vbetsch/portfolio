import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test('The homepage complies with WCAG standards', async ({ page }) => {
  await page.goto('/');
  const results = await new AxeBuilder({ page }).analyze();
  console.log('results', results);
  expect(results.violations).toEqual([]);
});
