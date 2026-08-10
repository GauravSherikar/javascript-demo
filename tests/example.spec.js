const { test, expect } = require('@playwright/test');

test('basic example test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBeTruthy();
});

test('page has heading', async ({ page }) => {
  await page.goto('https://example.com');
  const heading = await page.locator('h1').first();
  expect(heading).toBeDefined();
});
